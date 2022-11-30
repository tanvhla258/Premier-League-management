import React from "react";
import "./NavLink.css";
function NavLink(props) {
  return (
    <a className="NavLink" href={props.href}>
      {props.children}
    </a>
  );
}

export default NavLink;
