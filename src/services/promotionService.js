import axios from "axios";

const API_URL =
  "http://localhost:3001/api/promotions";

export const getPromotions =
  async () => {

    const res =
      await axios.get(API_URL);

    return res.data;

  };