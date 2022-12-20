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
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/rank").then((res) =>
          res.json()
        );

        //find team name
        const teamData = await fetch("http://localhost:5000/api/clubs").then(
          (res) => res.json()
        );
        teamData.sort(function (A, B) {
          return A.ID_Doi_Bong - B.ID_Doi_Bong;
        });
        data.sort(function (A, B) {
          return A.DOI_BONG_ID_Doi_Bong - B.DOI_BONG_ID_Doi_Bong;
        });
        const newData = data.map((element, i) => {
          return { ...data[i], ...teamData[i] };
        });
        newData.sort(function (rankA, rankB) {
          return rankA.Hang - rankB.Hang;
        });

        console.log(newData);
        setListOfRank([...newData]);
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
          {isLoading ? (
            "Loading..."
          ) : (
            <Standing rankData={[...listOfRank]} Team={TeamList}></Standing>
          )}
        </div>
      </div>
    </div>
  );
}
export default StandingPage;
