import React from "react";
import Match from "../Match/Match";
import "./MatchSchedule.css";
function MatchSchedule(props) {
  return (
    <div className="MatchSchedule">
      <div className="MatchScheduleHeader TableHeader">Today match</div>
      <div className="MatchScheduleContent">
        <Match />
        <Match />
      </div>
    </div>
  );
}

export default MatchSchedule;
