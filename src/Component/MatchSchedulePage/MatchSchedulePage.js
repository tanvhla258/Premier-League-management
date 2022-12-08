import React from "react";
import "./MatchSchedulePage.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import MatchSchedule from "../Table/MatchSchedule/MatchSchedule";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import add from "../../img/plus.png";

function MatchSchedulePage(props) {
  return (
    <div className="MatchSchedulePage">
      <StandingPageNavBar Logo="Schedule" />

      <div className="MatchScheduleTable">
        <MatchSchedule
          disableBtn={false}
          round={`Round ${props.roundNum}`}
          addImg={
            <img style={{ width: "30px", height: "30px" }} src={add}></img>
          }
        />
      </div>
    </div>
  );
}

export default MatchSchedulePage;
