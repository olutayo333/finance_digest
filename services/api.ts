import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // set the base URL from .env
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.response.use(
  response => response,
  error => {
    // handle global errors
    return Promise.reject(error);
  }
);


export default api;



// import { baseUrl } from "@/constants/url";
// import axiosSetup from "axios";

// const axios = axiosSetup.create({
//     baseURL:baseUrl(),
//     headers:{}
// })

// axios.interceptors.request.use(
//     async (config) => {
//         const token = localStorage.getItem("auth_token")
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         if (config.method == 'POST') {
//             config.headers["Content-Type"] = "multipart/form-data"
//         }
//         return config
//     },
//     async (error) => {
//         if (error.response && error.response.status == 401) {
//             localStorage.clear()
//         }
//         return Promise.reject(error)
//     }
// )
// axios.interceptors.response.use(
//     (response) => {
//         return response
//     },
//     (error) => {
//         if (error.response && error.response.status == 401) {
//             localStorage.clear()
//         }
//         return Promise.reject(error)
//     }
// )

// export default axios;