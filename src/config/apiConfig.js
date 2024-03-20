import axios from "axios";

//토큰이 불필요한 경우
const api = axios.create({
  baseURL: `https://www.scrabler.com`,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("refresh", localStorage.getItem("refreshtoken"));
const requestData = {
  email: localStorage.getItem("email"),
  password: localStorage.getItem("password"),
};
//리프레시토큰 요청 api
function postRefreshToken() {
  console.log("hello");
  console.log("refresh", localStorage.getItem("refreshtoken"));
  console.log(requestData);
  const response = api.post("/api/v1/auths/reissue", requestData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("refreshtoken")}`,
    },
  });
  console.log(response);
  return response;
}

//리프레시 토큰 구현
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      const originRequest = config;
      try {
        const tokenResponse = await postRefreshToken();
        const newAccessToken = tokenResponse.data.accessToken;
        console.log(newAccessToken);
        localStorage.setItem("accesstoken", newAccessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return { originRequest };
      } catch (error) {
        window.location.replace("/");
      }
    }
    return Promise.reject(error);
  }
);
export default api;
