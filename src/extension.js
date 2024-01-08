import React, { useState } from "react";
import Extensions from "./pages/Loginextentions";
import UnloginExtentions from "./pages/Unloginextentions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //로그인 된 페이지
  const handLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  //로그아웃 페이지
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      {isLoggedIn ? (
        <Extensions onLogout={handleLogout} />
      ) : (
        <>
          <UnloginExtentions onLoginSuccess={handLoginSuccess} />
        </>
      )}
    </div>
  );
}

export default App;
