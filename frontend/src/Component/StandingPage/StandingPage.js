import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const [listOfRank, setListOfRank] = useState([]);
  useEffect(() => {
    const fetchRank = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/rank").then(
          (res) => res.json()
        );
        console.log(data);
        setListOfRank([...data]);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchRank();
  }, []);
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
