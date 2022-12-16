import React from "react";
import logo from "../../../img/bruno.png";
import "./Player.css";
function Player(props) {
  if (props.type == "TeamPlayer")
    return (
      <div className="Player" style={{ width: "450px" }}>
        <div className="PlayerAva">
          <img className="PlayerAvaImg" src={logo}></img>
        </div>
        <div className="PlayerInfo">
          <span className="PlayerInfoName">
            <span className="PlayerTag">Name</span>
            {props.name}
          </span>

          <span className="PlayerInfoCountry">
            <span className="PlayerTag">Type</span>
            {props.country === "TN" ? "Domestic" : "Foreign "}
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
