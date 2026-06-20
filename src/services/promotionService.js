import axios from "axios";

const API_URL =
  "https://kkdmc.gladiatoraruna.com/api/promotions";

export const getPromotions =
  async () => {

    const res =
      await axios.get(API_URL);

    return res.data;

  };