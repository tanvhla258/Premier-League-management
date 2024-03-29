import React, { useCallback, useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import NavLink from "../../NavLink/NavLink";
import Logo from "../../Logo/Logo";
import AccGreeting from "../../AccGreeting/AccGreeting";
import "./StandingPageNavBar.css";
function StandingPageNavBar(props) {
  const Navnavigate2 = useNavigate();
  const [pagelog, setpagelog] = useState(false);
  let userLocal = localStorage.getItem("user");
  const LogOutSucessfully = useCallback(() => {
    localStorage.setItem("isLog", 0);
    localStorage.setItem("user", undefined);
    localStorage.setItem("pass", undefined);

    return Navnavigate2("/", { replace: true }), [Navnavigate2];
  });
  return (
    <div className="StandingPageNavBar">
      <Logo value={props.Logo} />
      <div className="menu">
        <Button>{<NavLink href="./">Home</NavLink>}</Button>
        <div
          style={{
            display: localStorage.getItem("isLog") == 0 ? "none" : "block",
          }}
        >
          <AccGreeting greet="Hi" acc={userLocal}></AccGreeting>
        </div>
        <div
          onClick={LogOutSucessfully}
          style={{
            display: localStorage.getItem("isLog") == 0 ? "none" : "block",
          }}
        >
          <Button>
            <NavLink href="./">Log out</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StandingPageNavBar;
