import React from "react";
import logo from "../../../img/bruno.png";
import "./Player.css";

function Player(props) {
  function eleOver(e) {
    e.target.closest(".Player").style.boxShadow = "0 0 1px 1px #777";
    e.target.closest(".Player").style.cursor = "pointer";
  }
  function eleLeave(e) {
    e.target.closest(".Player").style.boxShadow = "none";
  }
  if (props.type == "TeamPlayer")
    return (
      <div
        onMouseOver={eleOver}
        onMouseLeave={eleLeave}
        playerId={props.playerId}
        className="Player"
        style={{ width: "450px" }}
      >
        <div className="PlayerAva">
          <img className="PlayerAvaImg" src={props.logo}></img>
        </div>
        <div className="PlayerInfo">
          <span className="PlayerInfoName">
            <span className="PlayerTag">Name</span>
            <span className="PlayerTagName">{props.name}</span>
          </span>

          <span className="PlayerInfoCountry">
            <span className="PlayerTag">Type</span>
            <span className="PlayerTagType">
              {props.country === "TN" ? "Domestic" : "Foreign "}
            </span>
          </span>
        </div>
      </div>
    );
  else
    return (
      <div
        playerId={props.playerId}
        className="Player"
        style={{ maxWidth: "450px", height: "130px" }}
      >
        <div
          style={{ width: "120px", height: "100px", marginRight: "10px" }}
          className="PlayerAva"
        >
          <img className="PlayerAvaImg" src={props.logo}></img>
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
