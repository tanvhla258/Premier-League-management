import React from "react";
import Match from "../Match/Match";
import "./MatchSchedule.css";
function MatchSchedule(props) {
  return (
    <div className="MatchSchedule">
      <div className="MatchScheduleHeader TableHeader">
        <div className="HeaderRound">{props?.round}</div>
        <div className="HeaderContent">{props.headerContent}</div>
        <div className="HeaderAdd">{props?.addImg}</div>
      </div>
      <div className="MatchScheduleContent">
        <Match />
        <Match />
      </div>
    </div>
  );
}

export default MatchSchedule;
