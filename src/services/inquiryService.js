import axios from "axios";
import { supabase } from "../lib/supabase";

const API_URL = import.meta.env.VITE_API_URL;

export const createInquiry = async (payload) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await axios.post(
    `${API_URL}/api/inquiries`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    }
  );

  return response.data;
};

export const getMyInquiries = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await axios.get(
    `${API_URL}/api/inquiries/my`,
    {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    }
  );

  return response.data.data;
};