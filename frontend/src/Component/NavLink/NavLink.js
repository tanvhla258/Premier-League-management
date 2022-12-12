import React from "react";
import "./NavLink.css";
import { Link } from "react-router-dom";
import "../../App";
function NavLink(props) {
  return (
    <Link
      to={`/${props.href}`}
      style={{ color: "white", textDecoration: "none" }}
    >
      {props.children}
    </Link>
  );
}

export default NavLink;
