import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(
  (config) => {
    // config.headers[""] = ;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
