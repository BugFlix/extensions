import axios from "axios";
const api = axios.create({
  baseURL: "weblog.com",
  headers: {
    "Content-Type": "application/json",
  },
});

//가로채기
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accesstoken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//가로채기
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post("/api/user/refresh-token", {
          refreshToken: localStorage.getItem("refreshtoken"),
        });

        const newAccessToken = response.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        //새토큰으로 다시 요청 보냄
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        //리프레쉬 토큰이 계속 만료면 로그인으로 이동
        console.log("Refresh token expired. Redirect to login page.");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
