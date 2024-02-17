import React, { useState, useEffect } from "react";
import "../App.css";
import Profile from "../components/profile";
import closeBtnImg from "../../src/images/closeBtn.png";
import openBtnImg from "../../src/images/logo.png";
import Menu from "../components/menu";
import Header from "../components/header";
const Extensions = ({ nickname, onLogout }) => {
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  const [btnClass, setBtnClass] = useState("openBtn");

  useEffect(() => {
    const storedVisibility = localStorage.getItem("isContainerVisible");

    if (storedVisibility) {
      setIsContainerVisible(storedVisibility === "true");
      setBtnClass(storedVisibility === "true" ? "closeBtn" : "openBtn");
    }
  }, []);

  //보이기 숨기기 버튼
  const toggleContainerVisibility = () => {
    const newVisibility = !isContainerVisible;
    setIsContainerVisible(newVisibility);
    setBtnClass(newVisibility ? "closeBtn" : "openBtn");

    // Save to localStorage
    localStorage.setItem("isContainerVisible", newVisibility.toString());
  };
  const accessToken = localStorage.getItem("accesstoken");

  return (
    <div>
      <div className={btnClass} onClick={toggleContainerVisibility}>
        <img
          src={btnClass === "openBtn" ? openBtnImg : closeBtnImg}
          alt="Button"
        />
      </div>
      {isContainerVisible && (
        <div className="extension-content">
          <Menu />
          <Profile nickname={nickname} onLogout={onLogout} />
          <Header />
        </div>
      )}
    </div>
  );
};
export default Extensions;
