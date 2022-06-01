import axios from "axios";

const axiosInstance = axios.create();

export const setupInterceptors = () => {
  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      return Promise.reject(error);
    }
  );
};

const METHODS = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};

const makeRequest = async (url, method, data = {}) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": " origin, x-requested-with, accept",
    "Access-Control-Allow-Methods": " GET, PUT, POST, DELETE",
    "Access-Control-Allow-Headers": "X-Requested-With,content-type",
  };

  return axiosInstance({
    url,
    method,
    data,
    headers,
  });
};
