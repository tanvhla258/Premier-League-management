import React from "react";
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
  return (
    <div className="TeamPage">
      <div className="Modal"></div>
      <div className="ModalForm"></div>

      <StandingPageNavBar Logo="Team Management" />
      <div className="TeamPageContent">
        <div className="TeamPageLogo">
          <img className="TeamLogoImg" src={teamLogo}></img>
        </div>
        <div className="TeamPageList">
          <PlayerTable name="Manchester United" TeamData={TeamData} />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
