import React, { useState } from "react";
import "./account.css";
import Login from "./Login";

const Account = ({ onLoginSuccess }) => {
  const [showLogin, setShowLogin] = useState(false);

  const onHandleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="unLogginedBar">
      <button onClick={onHandleLogin}>로그인</button>
      <button>회원가입</button>
      {showLogin && (
        <Login onClose={onHandleLogin} onLoginSuccess={onLoginSuccess} />
      )}
    </div>
  );
};

export default Account;
