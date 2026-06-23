import axios from "axios";

const API_URL =
  "http://localhost:3001/api/categories";

export const getCategories =
  async () => {

    const res =
      await axios.get(API_URL);

    return res.data;

  };