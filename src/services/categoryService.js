import axios from "axios";

const API_URL =
  "https://kkdmc.gladiatoraruna.com/api/categories";

export const getCategories =
  async () => {

    const res =
      await axios.get(API_URL);

    return res.data;

  };