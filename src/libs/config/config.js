import axios from "axios";

export const API_URL = "http://localhost:3000";

//menciptakan base api url
export const axiosInstance = axios.create({
  baseURL: API_URL,
});
