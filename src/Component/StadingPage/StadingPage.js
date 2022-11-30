import React from "react";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
import "./StadingPage.css";
function StadingPage(props) {
  return (
    <div className="StadingPage">
      <Logo value="Home" />
      <NavLink href="/TeamManagement">Team management</NavLink>
      <Button>Log out</Button>
    </div>
  );
}
export default StadingPage;
