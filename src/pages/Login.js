import "./login.css";
import CloseBtn from "../images/closeBtn.png";
import React, { useState } from "react";
import Extensions from "./Loginextentions";
import axios from "axios";
const Login = ({ onClose, onLoginSuccess }) => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (id === "sgky0511" && password === "ky4400") {
      onLoginSuccess();
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
    axios
      .get("/api/users/login", {
        params: {
          loginId: id,
          password: password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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
              <label className="inputLabel" htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                className="input"
                value={id}
                onChange={handleChangeId}
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
            <button className="loginActionBtn" disabled={!id && !password}>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
