import React from "react";
import logo1 from "../../../img/newCastle.png";
import "./Match.css";
function Match(props) {
  return (
    <div className="Match">
      {/* <div className="HomeLogo TeamLogo">
        <img src={logo1}></img>
      </div>
      <div className="MatchInfo">
        <div>
          <span>{props.home}</span>
          <span>VS</span>
          <span>{props.away}</span>
        </div>
        <div className="Time">{props.time}</div>
        <div className="stadium">{props.stadium}</div>
      </div>
      <div className="HomeLogo TeamLogo">
        <img src={logo1}></img>
      </div> */}

      <div className="TeamLogo">
        <img className="TeamLogoImg" src={logo1}></img>
      </div>
      <div className="MatchInfo">
        <div className="MatchInfoHeader">
          <span className="MatchInfoTeam">Tottenham</span>
          <span className="VS">VS</span>
          <span className="MatchInfoTeam">Manchester City</span>
        </div>
        <div className="Time">19:00 22/12/2023</div>
        <div className="Stadium">Tottenham Hostpur Stadium</div>
      </div>
      <div className="TeamLogo">
        <img className="TeamLogoImg" src={logo1}></img>
      </div>
    </div>
  );
}

export default Match;
