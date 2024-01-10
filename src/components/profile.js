import React from "react";
import profileImg from "../images/profile.png";
const profile = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
    alert("로그아웃 되었습니다.");
  };
  return (
    <div className="porfile-container">
      <button className="logoutBtn" onClick={handleLogout}>
        로그아웃
      </button>
      <circle className="profile-circle">
        <img src={profileImg} alt="profile" />
      </circle>
      <div className="extension-username">Tkrhdrhkdduf</div>
    </div>
  );
};
export default profile;
