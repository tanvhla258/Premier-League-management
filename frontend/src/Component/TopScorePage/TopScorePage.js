import React, { useEffect, useState } from "react";
import "./TopScorePage.css";
import StandingPageNavBar from "../StandingPage/StandingPageNavBar/StandingPageNavBar";
import Player from "../Table/Player/Player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
function TopScorePage(props) {
  const [listOfTopScore, setListOfTopScore] = useState([]);
  let TopScoreData = listOfTopScore?.map((ts, i) => {
    return { rank: i + 1, ...ts };
  });
  console.log(TopScoreData);
  let [currentPage, setCurrentPage] = useState(0);
  const [PlayerPerPage] = useState(3);
  let maxPage = Math.floor((TopScoreData.length - 1) / PlayerPerPage);
  console.log(maxPage);
  let startItem = currentPage * PlayerPerPage;
  let endItem = startItem + PlayerPerPage;

  let renderPlayerList = TopScoreData?.slice(startItem, endItem);
  useEffect(() => {
    const fetchTopScore = async () => {
      try {
        const data = await fetch(
          "http://52.64.166.62:443/api/topScore/topGoal"
        ).then((res) => res.json());
        setListOfTopScore([...data]);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchTopScore();
  }, []);
  function nextClick() {
    return currentPage < maxPage
      ? setCurrentPage(currentPage + 1)
      : currentPage;
  }
  function prevClick() {
    return currentPage > 0 ? setCurrentPage(currentPage - 1) : currentPage;
  }
  return (
    <div className="TopScorePage">
      <StandingPageNavBar Logo="Top Score" />
      <div className="TopScoreTable">
        <div className="TopScoreHeader">
          <span>Player</span>
          <span>Point</span>
        </div>
        <div className="TopScoreContent">
          <div className="TopScoreContentMain">
            {renderPlayerList?.map((p, index) => {
              return (
                <div className="TopScoreItem">
                  <div className="TopScoreRank">{p.rank}</div>
                  <Player
                    type="TopScorePlayer"
                    name={p.Ten_CT}
                    teamName={p.Ten_DB}
                    logo={p.Image}
                  />

                  <div className="TopScorePoint">{p.So_Ban_Thang}</div>
                </div>
              );
            })}
          </div>
          <div className="ControlBtn">
            <FontAwesomeIcon
              className="fai"
              icon={faCaretLeft}
              size="2x"
              onClick={prevClick}
            />
            <FontAwesomeIcon
              className="fai"
              icon={faCaretRight}
              size="2x"
              onClick={nextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopScorePage;
