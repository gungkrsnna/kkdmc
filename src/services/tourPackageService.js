import axios from "axios";

const API_URL =
  "https://kkdmc.gladiatoraruna.com/api/tour-packages";

export const getTourPackages =
  async () => {

    const res =
      await axios.get(API_URL);

    return res.data;
  };