import React, { useState } from "react";
import Match from "../Match/Match";
import "./MatchSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
function MatchSchedule(props) {
  function nextClick() {}
  function prevClick() {}
  if (props.disableBtn == 0) {
    return (
      <div className="MatchSchedule">
        <div className="MatchScheduleHeader TableHeader">
          <div className="HeaderRound">{props?.round}</div>
          <div className="HeaderContent">{props.headerContent}</div>
          <div className="HeaderAdd">{props?.addImg}</div>
        </div>
        <div className="MatchScheduleContent">
          <div className="MatchScheduleContentMain">
            <Match />
            <Match />
            <Match />
          </div>
          <div className="ControlBtn">
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
  } else
    return (
      <div className="MatchSchedule">
        <div className="MatchScheduleHeader TableHeader">
          <div className="HeaderRound">{props?.round}</div>
          <div className="HeaderContent">{props.headerContent}</div>
          <div className="HeaderAdd">{props?.addImg}</div>
        </div>
        <div className="MatchScheduleContent">
          <div className="MatchScheduleContentMain">
            <Match />
            <Match />
            <Match />
          </div>
        </div>
      </div>
    );
}

export default MatchSchedule;
