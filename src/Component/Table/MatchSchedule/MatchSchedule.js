import React, { useState } from "react";
import Match from "../Match/Match";
import "./MatchSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
function MatchSchedule(props) {
  function nextClick() {}
  function prevClick() {}
  return (
    <div className="MatchSchedule">
      <div
        className="MatchScheduleHeader TableHeader"
        style={{
          justifyContent: props.disableBtn ? "center" : "space-between",
        }}
      >
        <div className="HeaderRound">{props?.round}</div>
        <div className="HeaderContent">{props.headerContent}</div>
        <div
          className="add"
          style={{ display: props.disableBtn ? "none" : "block" }}
        >
          <FontAwesomeIcon
            className="addIcon"
            icon={faAdd}
            onClick={props.popUp}
          />
        </div>
      </div>
      <div className="MatchScheduleContent">
        <div className="MatchScheduleContentMain">
          <Match />
          <Match />
          <Match />
        </div>
        <div
          className="ControlBtn"
          style={{ display: props.disableBtn ? "none" : "block" }}
        >
          <FontAwesomeIcon
            className="fai"
            icon={faCaretLeft}
            size="2x"
            onClick={prevClick}
          />
          <FontAwesomeIcon
            className="fai"
            icon={faCaretRight}
            size="2x"
            onClick={nextClick}
          />
        </div>
      </div>
    </div>
  );
}

export default MatchSchedule;
