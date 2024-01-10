import React from "react";
import Logo from "../images/logo.png";
import Setting from "../images/setting.png";
const Header = () => {
  return (
    <div className="header-container">
      <img className="logo-header" src={Logo} />
      <img className="setting-header" src={Setting} />
    </div>
  );
};
export default Header;
