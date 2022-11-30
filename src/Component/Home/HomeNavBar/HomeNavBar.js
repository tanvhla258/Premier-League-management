import React from "react";
import Logo from "../../Logo/Logo";
import "./HomeNavBar.css";
import Button from "../../Button/Button";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import NavLink from "../../NavLink/NavLink";

function HomeNavBar() {
  return (
    <div className="HomeNavbar">
      <Logo value="Home" />
      <div className="menu">
        <NavLink href="./TeamManagement">Team management</NavLink>
        <NavLink href="./TopScore">Top Score</NavLink>
        <NavLink href="./StandingPage">Standing</NavLink>
        <Button>Log in</Button>
      </div>
    </div>
  );
}

export default HomeNavBar;
