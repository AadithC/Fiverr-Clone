import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-clone-api-bug6.onrender.com",
  withCredentials: true,
});

export default newRequest;
