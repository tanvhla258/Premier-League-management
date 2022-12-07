import React, { useState } from "react";
import "./TopScorePage.css";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import PlayerTable from "../Table/PlayerTable/PlayerTable";
import Player from "../Table/Player/Player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { TopScoreData } from "../Data/TopScoreData";
function TopScorePage(props) {
  let [currentPage, setCurrentPage] = useState(0);
  const [PlayerPerPage] = useState(3);
  let maxPage = Math.floor((TopScoreData.length - 1) / PlayerPerPage);
  console.log(maxPage);
  let startItem = currentPage * PlayerPerPage;
  let endItem = startItem + PlayerPerPage;

  let renderPlayerList = TopScoreData?.slice(startItem, endItem);

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
            {renderPlayerList?.map((p) => {
              return (
                <div className="TopScoreItem">
                  <div className="TopScoreRank">{p.rank}</div>
                  <Player
                    type="TopScorePlayer"
                    name={p.name}
                    teamName="ManUnited"
                  />

                  <div className="TopScorePoint">{p.score}</div>
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
