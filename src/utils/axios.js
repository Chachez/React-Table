import axios from "axios";

const baseURL = "https://restcountries.com/v3.1";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Perform any custom logic before sending the request
    // Intention to build up with redux and localStorage functionality

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle error responses
    if (error.response && error.response.status === 401) {
      // Error getting data
      // Perform any necessary action
    }
    return Promise.reject(error);
  }
);

export default api;
