import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(
  (config) => {
    config.headers["ngrok-skip-browser-warning"] = "69420";
    console.log(config.headers);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
