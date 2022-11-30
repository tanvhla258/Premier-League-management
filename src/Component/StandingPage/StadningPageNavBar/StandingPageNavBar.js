import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import NavLink from "../../NavLink/NavLink";
import Logo from "../../Logo/Logo";
import AccGreeting from "../../AccGreeting/AccGreeting";
import "./StandingPageNavBar.css";
function StandingPageNavBar(props) {
  return (
    <div className="StandingPageNavBar">
      <Logo value="Standing" />
      <div className="menu">
        <Button>{<NavLink href="./">Home</NavLink>}</Button>
        <AccGreeting greet="Hi" acc="Tan"></AccGreeting>
        <Button>Log out</Button>
      </div>
    </div>
  );
}

export default StandingPageNavBar;
