import axios from "axios"

const BASE_URL = "https://server-79st.onrender.com/api"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

// Add token from localStorage to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") // replace with your login token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)



export default axiosInstance
