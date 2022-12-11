import React, { useCallback } from "react";
import Logo from "../../Logo/Logo";
import "./HomeNavBar.css";
import Button from "../../Button/Button";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "../Home";
import NavLink from "../../NavLink/NavLink";

function HomeNavBar(props) {
  // const Navnavigate = useNavigate();
  // const LogOutSucessfully = useCallback(
  //   () => Navnavigate("/", { replace: true, state: { isLog: false } }),
  //   [Navnavigate]
  // );

  return (
    <div className="HomeNavbar">
      <Logo value="Home" />
      <div className="menu">
        <NavLink href="./TeamPage">Team management</NavLink>
        <NavLink href="./TopScorePage">Top Score</NavLink>
        <NavLink href="./StandingPage">Standing</NavLink>
        <div>
          <div style={{ display: props.isLog ? "none" : "block" }}>
            <Button>
              <NavLink href="./LoginPage">Log in</NavLink>
            </Button>
          </div>
          <div style={{ display: props.isLog ? "block" : "none" }}>
            <Button>
              <NavLink href="./">Log out</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavBar;
