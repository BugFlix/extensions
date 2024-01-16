import "./signup.css";
import CloseBtn from "../images/closeBtn.png";
import React, { useState } from "react";
import Extensions from "./Loginextentions";
import axios from "axios";
const Signup = ({ onClose }) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [nickname, setNickName] = useState();
  const [birth, setBirth] = useState();
  const requestData = {
    data: [
      {
        email: email,
        password: password,
        nickname: nickname,
        phoneNumber: phone,
        birthDate: birth,
      },
    ],
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const response = axios.post("/api/v1/users", requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeNickname = (e) => {
    setNickName(e.target.value);
  };
  const handleChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  return (
    <div className="RegisterBackground">
      <div className="RegisterModal">
        <div className="RegisterHeader">
          <img
            src={CloseBtn}
            className="RegistercloseBtn"
            onClick={onClose}
          ></img>
          <div>회원가입</div>
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
            <div className="inputDiv">
              <label className="inputLabel" htmlFor="nickname">
                닉네임
              </label>
              <input
                id="nickname"
                className="input"
                value={nickname}
                onChange={handleChangeNickname}
                type="text"
                placeholder=""
              />
            </div>
            <div className="inputDiv">
              <label className="inputLabel" htmlFor="phone">
                전화번호
              </label>
              <input
                id="phone"
                className="input"
                value={phone}
                onChange={handleChangePhone}
                type="text"
                placeholder=""
              />
            </div>
            <div className="inputDiv">
              <label className="inputLabel" htmlFor="birth">
                생년월일
              </label>
              <input
                id="birth"
                className="input"
                value={birth}
                onChange={handleChangeBirth}
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="modalFooter">
            <button
              className="registerActionBtn"
              disabled={!email && !password}
            >
              회원가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
