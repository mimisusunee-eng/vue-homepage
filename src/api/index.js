import axios from "axios";

const api = axios.create({
 // URL ของ API เช่น https://jsonplaceholder.typicode.com/
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com/", 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
