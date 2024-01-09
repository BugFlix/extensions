import React, { useState } from "react";
import "./account.css";
import Login from "./Login";
import Signup from "./Signup";

const Account = ({ onLoginSuccess }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const onHandleLogin = () => {
    setShowLogin(!showLogin);
  };
  const onHandleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="unLogginedBar">
      <button onClick={onHandleLogin}>로그인</button>
      <button onClick={onHandleSignup}>회원가입</button>
      {showLogin && (
        <Login onClose={onHandleLogin} onLoginSuccess={onLoginSuccess} />
      )}
      {showSignup && <Signup onClose={onHandleSignup} />}
    </div>
  );
};

export default Account;
