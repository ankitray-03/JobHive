import axios from "axios";
// console.log(import.meta.env.BACKEND_URL);

const api = axios.create({
  baseURL: "https://jobhivebackend.onrender.com",
  withCredentials: true,
});

export default api;
