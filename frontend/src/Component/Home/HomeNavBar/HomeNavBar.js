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
  const Navnavigate = useNavigate();
  const LogOutSucessfully = useCallback(
    () => Navnavigate("/", { replace: true }),
    [Navnavigate]
  );
  const logOut = () => {
    localStorage.setItem("isLog", 0);
    localStorage.setItem("user", undefined);
    localStorage.setItem("pass", undefined);

    LogOutSucessfully();
    props.displayWelcome();
  };

  return (
    <div className="HomeNavbar">
      <Logo value="Home" />
      <div className="menu">
        <NavLink href="./LeaguePage">League</NavLink>
        <NavLink href="./TeamPage">Team management</NavLink>
        <NavLink href="./TopScorePage">Top Goal</NavLink>
        <NavLink href="./StandingPage">Standing</NavLink>
        <NavLink href="./SearchPlayerPage">Players</NavLink>

        <div>
          <div
            style={{
              display: localStorage.getItem("isLog") == 0 ? "block" : "none",
            }}
          >
            <Button>
              <NavLink href="./LoginPage">Log in</NavLink>
            </Button>
          </div>
          <div
            style={{
              display: localStorage.getItem("isLog") == 0 ? "none" : "block",
            }}
            onClick={logOut}
          >
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
