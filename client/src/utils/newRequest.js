import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-clone-api-bug6.onrender.com" + "/api/",
  withCredentials: true,
});

export default newRequest;
