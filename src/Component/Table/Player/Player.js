import React from "react";
import logo from "../../../img/bruno.png";
import "./Player.css";
function Player(props) {
  if (props.type == "TeamPlayer")
    return (
      <div className="Player">
        {/* <div className="HomeLogo TeamLogo">
        <img src={logo1}></img>
      </div>
      <div className="PlayerInfo">
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

        <div className="PlayerAva">
          <img className="PlayerAvaImg" src={logo}></img>
        </div>
        <div className="PlayerInfo">
          <span className="PlayerInfoName">
            <span className="PlayerTag">Name</span>
            {props.name}
          </span>
          <span className="PlayerInfoAge">
            <span className="PlayerTag">Age</span>
            {props.age}
          </span>
          <span className="PlayerInfoCountry">
            <span className="PlayerTag">Country</span>
            {props.country}
          </span>
        </div>
      </div>
    );
  else
    return (
      <div className="Player" style={{ maxWidth: "450px", height: "130px" }}>
        <div className="PlayerAva">
          <img className="PlayerAvaImg" src={logo}></img>
        </div>
        <div className="PlayerInfo">
          <span className="PlayerInfoName">
            <span className="PlayerTag">Name</span>
            {props.name}
          </span>
          <span className="PlayerInfoTeam">
            <span className="PlayerTag">Team</span>
            {props.teamName}
          </span>
        </div>
      </div>
    );
}

export default Player;