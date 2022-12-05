import React from "react";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
import Standing from "../Table/Standing/Standing";
import "./StandingPage.css";
import StandingPageNavBar from "./StadningPageNavBar/StandingPageNavBar";
import inkImg from "../../img/ink.png";
import PlayerBG1 from "../../img/kevin2.png";
import PlayerBG2 from "../../img/van dijk.png";
import TeamList from "../Data/TeamListData";

function StandingPage(props) {
  return (
    <div className="StandingPage">
      <StandingPageNavBar Logo="Standing" />
      <div className="StangdingPageContent">
        <div className="StadingLeft">
          <div className="ink">
            <img src={inkImg}></img>
          </div>

          <div className="StandingPlayerBG2">
            <img src={PlayerBG2}></img>
          </div>
          <div className="StandingPlayerBG1">
            <img src={PlayerBG1}></img>
          </div>
        </div>
        <div className="StandingRight">
          <Standing Team={TeamList}></Standing>
        </div>
      </div>
    </div>
  );
}
export default StandingPage;
