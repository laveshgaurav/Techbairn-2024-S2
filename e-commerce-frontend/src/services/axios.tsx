import axios from "axios";

// Create Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

// Interceptor to add Bearer token to specific requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Example condition: check if the route requires a Bearer token
    const routesRequiringAuth = [
      "order/create-new-order",
      "order/get-user-orders-by-id",
      "order/get-user-orders",
      "address/get-user-address",
      "address/get-user-address",
    ];

    // Check if the URL matches any route that requires authentication
    if (routesRequiringAuth.some((route) => config.url.includes(route))) {
      const token = localStorage.getItem("token"); // Assume token is stored in localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
