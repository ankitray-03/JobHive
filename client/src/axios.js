import axios from "axios";
// console.log(import.meta.env.BACKEND_URL);

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default api;
