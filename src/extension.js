import React, { useState } from "react";
import Extensions from "./pages/Loginextentions";
import UnloginExtentions from "./pages/Unloginextentions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState("");

  //로그인 된 페이지
  const handLoginSuccess = (nickname) => {
    setIsLoggedIn(true);
    setNickname(nickname);
    console.log(nickname);
  };
  //로그아웃 페이지
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      {isLoggedIn ? (
        <Extensions nickname={nickname} onLogout={handleLogout} />
      ) : (
        <>
          <UnloginExtentions onLoginSuccess={handLoginSuccess} />
        </>
      )}
    </div>
  );
}

export default App;
