import axios from "axios";

const server = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

server.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default server;
