// src/axiosInstance.ts
import axios from 'axios';

// Create an Axios instance with base configuration
const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000/api'
        : process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor to set the Authorization header
axiosInstance.interceptors.request.use(
    (config) => {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;