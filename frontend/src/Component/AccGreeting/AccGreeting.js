import React from "react";
import "./AccGreeting.css";
function AccGreeting(props) {
  return <span className="AccGreeting">{`${props.greet}, ${props.acc}`}</span>;
}

export default AccGreeting;
