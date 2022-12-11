import React, { useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import NavLink from "../../NavLink/NavLink";
import Logo from "../../Logo/Logo";
import AccGreeting from "../../AccGreeting/AccGreeting";
import "./StandingPageNavBar.css";
function StandingPageNavBar(props) {
  const Navnavigate = useNavigate();
  const LogOutSucessfully = useCallback(
    () => Navnavigate("/", { replace: true, state: { isLog: false } }),
    [Navnavigate]
  );
  return (
    <div className="StandingPageNavBar">
      <Logo value={props.Logo} />
      <div className="menu">
        <Button>{<NavLink href="./">Home</NavLink>}</Button>
        <AccGreeting greet="Hi" acc="Tan"></AccGreeting>
        <div
          onClick={LogOutSucessfully}
          style={{ display: props.isLog ? "block" : "none" }}
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
