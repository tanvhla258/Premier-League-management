import React from "react";
import "./Button.css";
import Home from "../Home/Home";
function Button(props) {
  return (
    <button onClick={props.Onclick} className="mainButton">
      {props.children}
    </button>
  );
}

export default Button;
