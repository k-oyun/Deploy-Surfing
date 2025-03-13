import axios from "axios";

export const BASE_URL = "https://smul.store";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("토큰 만료");
      localStorage.removeItem("accessToken");
      alert("인증이 만료되었습니다. 다시 로그인 후 이용해 주세요.");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
