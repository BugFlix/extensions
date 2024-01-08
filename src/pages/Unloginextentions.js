import React, { useState } from "react";
import "../App.css";
import closeBtnImg from "../../src/images/closeBtn.png";
import openBtnImg from "../../src/images/profile.png";
import Header from "../components/header";
import Account from "./Account";
import UnloginMenu from "../components/unloginmenu";
const Extensions = ({ onLoginSuccess }) => {
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  const [btnClass, setBtnClass] = useState("openBtn");

  //보이기 숨기기 버튼
  const toggleContainerVisibility = () => {
    setIsContainerVisible((prev) => !prev);
    setBtnClass((prevClass) =>
      prevClass === "openBtn" ? "closeBtn" : "openBtn"
    );
  };

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
          <UnloginMenu />
          <Account onLoginSuccess={onLoginSuccess} />
          <Header />
        </div>
      )}
    </div>
  );
};
export default Extensions;
