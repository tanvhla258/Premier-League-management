import React, { useState } from "react";
import "./TeamPage.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import add from "../../img/plus.png";
import Player from "../Table/Player/Player";
import PlayerTable from "../Table/PlayerTable/PlayerTable";
import teamLogo from "../../img/mulogo.png";
import TeamData from "../Data/TeamData";

function TeamPage(props) {
  const [DisplayPopUp, setDisplayPopUp] = useState(0);
  function popUp() {
    setDisplayPopUp(1);
  }

  return (
    <div className="TeamPage">
      <div
        className="Modal"
        style={{ display: DisplayPopUp ? "block" : "none" }}
      ></div>
      <div
        className="ModalForm"
        style={{ display: DisplayPopUp ? "block" : "none" }}
      ></div>

      <StandingPageNavBar Logo="Team Management" />
      <div className="TeamPageContent">
        <div className="TeamPageLogo">
          <img onClick={popUp} className="TeamLogoImg" src={teamLogo}></img>
        </div>
        <div className="TeamPageList">
          <PlayerTable name="Manchester United" TeamData={TeamData} />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
