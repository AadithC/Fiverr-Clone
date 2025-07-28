import axios from "axios";

const newRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL  + "/api/",
  withCredentials: true,
});

export default newRequest;
