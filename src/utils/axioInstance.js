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



export default axiosInstance
