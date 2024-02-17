import "./login.css";
import CloseBtn from "../images/closeBtn.png";
import React, { useState } from "react";
import Extensions from "./Loginextentions";
import axios from "axios";
import api from "../config/apiConfig";
const Login = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();

    if (email === "sgky0511" && password === "ky4400") {
      alert("로그인 성공");
      onLoginSuccess("sgky0511");
    } else {
      alert("로그인 실패");
    } // 동기 처리
    const requestData = {
      email: email,
      password: password,
    };
    try {
      const response = await api.post("/api/v1/auths/login", requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      console.log(data);
      if (data.accessToken && data.refreshToken) {
        localStorage.setItem("accesstoken", data.accessToken);
        localStorage.setItem("refreshtoken", data.refreshToken);
        onLoginSuccess(data.nickname);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const auth = () => {
    window.open("http://localhost:6005/auth/google/callback", "_self");
  };

  return (
    <div className="LoginBackground">
      <div className="loginModal">
        <div className="loginHeader">
          <img src={CloseBtn} className="logincloseBtn" onClick={onClose}></img>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="modalBody">
            <div className="inputDiv">
              <label className="inputLabel" htmlFor="email">
                이메일
              </label>
              <input
                id="email"
                className="input"
                value={email}
                onChange={handleChangeEmail}
                type="text"
                placeholder=""
              />
            </div>
            <div className="inputDiv">
              <label className="inputLabel" htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className="input"
                value={password}
                onChange={handleChangePassword}
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div className="message">{message}</div>
          <div className="modalFooter">
            <button className="loginActionBtn" disabled={!email && !password}>
              로그인하기
            </button>
            <button className="googleBtn" type="button" onClick={auth}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
