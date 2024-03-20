import React, { useState, useEffect } from "react";
import Extensions from "./pages/Loginextentions";
import UnloginExtentions from "./pages/Unloginextentions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedNickname && storedIsLoggedIn) {
      setNickname(storedNickname);
      setIsLoggedIn(storedIsLoggedIn === "true");
    }
  }, []);

  //로그인 된 페이지
  const handLoginSuccess = (nickname) => {
    setIsLoggedIn(true);
    setNickname(nickname);
    console.log(nickname);

    localStorage.setItem("nickname", nickname);
    localStorage.setItem("isLoggedIn", "true");
  };
  //로그아웃 페이지
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("nickname");
    localStorage.removeItem("isLoggedIn");
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
