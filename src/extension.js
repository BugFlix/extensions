import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Profile from "./components/profile";
import closeBtnImg from "../src/images/closeBtn.png";
import openBtnImg from "../src/images/profile.png";
import Menu from "./components/menu";
import Header from "./components/header";
function App() {
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
          <Menu />
          <Profile />
          <Header />
        </div>
      )}
    </div>
  );
}

export default App;
