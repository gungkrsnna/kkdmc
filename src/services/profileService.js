import axios from "axios";
import { supabase } from "../lib/supabase";

const API_URL = import.meta.env.VITE_API_URL;

export const getProfile = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await axios.get(
    `${API_URL}/api/profile/me`,
    {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    }
  );

  return response.data.data;
};