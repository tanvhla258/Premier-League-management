import React from "react";
import "./NavLink.css";
import { Link } from "react-router-dom";
import "../../App";
function NavLink(props) {
  function hoverLink(e) {
    e.target.style.textShadow = "0 0px 3px white";
  }
  function leaveLink(e) {
    e.target.style.textShadow = "none";
  }
  return (
    <Link
      to={`/${props.href}`}
      style={{ color: "white", textDecoration: "none" }}
      onMouseOver={hoverLink}
      onMouseLeave={leaveLink}
    >
      {props.children}
    </Link>
  );
}

export default NavLink;
