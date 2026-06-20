import axios from "axios";

const api = axios.create({
  baseURL: "https://kkdmc.gladiatoraruna.com/api",
});

export default api;