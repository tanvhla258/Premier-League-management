import React from "react";
import logo1 from "../../../img/newCastle.png";
import "./Match.css";
function eleOver(e) {
  e.target.closest(".Match").style.boxShadow = "0 0 1px 1px #777";
  e.target.closest(".Match").style.cursor = "pointer";
}
function eleLeave(e) {
  e.target.closest(".Match").style.boxShadow = "none";
}
function Match(props) {
  return (
    <div onMouseOver={eleOver} onMouseLeave={eleLeave} className="Match">
      <div className="TeamLogo">
        <img className="TeamLogoImg" src={logo1}></img>
      </div>
      <div className="MatchInfo">
        <div className="MatchInfoHeader">
          <span className="MatchInfoTeam">{props.home}</span>
          <span className="VS">VS</span>
          <span className="MatchInfoTeam">{props.away}</span>
        </div>
        <div className="MatchTime">{`${props.time} ${props.date}`}</div>
        <div className="MatchStadium">{props.stadium}</div>
      </div>

      <div className="TeamLogo">
        <img className="TeamLogoImg" src={logo1}></img>
      </div>
    </div>
  );
}

export default Match;
