import React from "react";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
import "./StandingPage.css";
import StandingPageNavBar from "./StadningPageNavBar/StandingPageNavBar";
function StandingPage(props) {
  return (
    <div className="StandingPage">
      <StandingPageNavBar />
    </div>
  );
}
export default StandingPage;
