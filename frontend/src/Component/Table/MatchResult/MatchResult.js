import React from "react";
import "./MatchResult.css";

function MatchResult(props) {
  function eleOver(e) {
    e.target.closest(".MatchResult").style.boxShadow = "0 0 1px 1px #777";
    e.target.closest(".MatchResult").style.cursor = "pointer";
  }
  function eleLeave(e) {
    e.target.closest(".MatchResult").style.boxShadow = "none";
  }
  return (
    <div onMouseOver={eleOver} onMouseLeave={eleLeave} className="MatchResult">
      <div className="Result">
        <div className="Team1">
          <div className="MatchResultTeamInfo">
            <div className="TeamLogo">
              <img className="TeamLogoImg" src={props.logo1} />
            </div>

            <div>{props.team1}</div>
          </div>
          <div className="point">{props.point1}</div>
        </div>
        <div className="Team2">
          <div className="MatchResultTeamInfo">
            <div className="TeamLogo">
              <img className="TeamLogoImg" src={props.logo2} />
            </div>
            <div>{props.team2}</div>
          </div>
          <div className="point">{props.point2}</div>
        </div>
      </div>
      <div className="MatchResultTime">
        <div>{props.time}</div>
        <div>{props.day}</div>
      </div>
    </div>
  );
}

export default MatchResult;
