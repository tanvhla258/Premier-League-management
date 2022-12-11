import React from "react";
import logo from "../../img/logo.png";
import "./Logo.css";
function Logo(props) {
  return (
    <div className="logo">
      <span className="LogoWrap">
        <img className="LogoImg" src={logo}></img>
      </span>
      <div className="LogoTitle gradient1">{props.value}</div>
    </div>
  );
}

export default Logo;
