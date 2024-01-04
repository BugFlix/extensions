import React from "react";
import profileImg from "../images/profile.png";
const profile = () => {
  return (
    <div className="porfile-container">
      <circle className="profile-circle">
        <img src={profileImg} alt="profile" />
      </circle>
      <div className="username">Tkrhdrhkdduf</div>
    </div>
  );
};
export default profile;
