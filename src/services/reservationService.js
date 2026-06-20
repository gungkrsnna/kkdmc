import axios from "axios";
import { supabase } from "../lib/supabase";

const API_URL =
  import.meta.env.VITE_API_URL;

export const createReservation =
  async (payload) => {

    const {
      data: { session },
    } =
      await supabase.auth.getSession();

    const response =
      await axios.post(
        `${API_URL}/api/reservations`,
        payload,
        {
          headers: {
            Authorization:
              `Bearer ${session.access_token}`,
          },
        }
      );

    return response.data;
  };

export const getMyReservations =
  async () => {

    const {
      data: { session },
    } =
      await supabase.auth.getSession();

    const response =
      await axios.get(
        `${API_URL}/api/reservations/my`,
        {
          headers: {
            Authorization:
              `Bearer ${session.access_token}`,
          },
        }
      );

    return response.data.data;
  };