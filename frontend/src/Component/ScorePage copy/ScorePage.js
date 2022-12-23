import React, { useEffect, useState } from "react";
import "./ScorePage.css";
import StandingPageNavBar from "../StandingPage/StandingPageNavBar/StandingPageNavBar";
import Player from "../Table/Player/Player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
function ScorePage(props) {
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
          "http://localhost:5000/api/topScore/typeofscore"
        ).then((res) => res.json());
        console.log(data);
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
    <div className="ScorePage">
      <StandingPageNavBar Logo=" Score" />
      <div className="ScoreTable">
        <div className="ScoreHeader">
          <span>Player</span>
          <span className="ScoreGroup">
            <span className="ScoreGroupItem">Score Time</span>
            <span className="ScoreGroupItem">Score Type</span>
          </span>
        </div>
        <div className="ScoreContent">
          <div className="ScoreContentMain">
            {renderPlayerList?.map((p, index) => {
              return (
                <div className="ScoreItem">
                  {/* <div className="ScoreRank">{p.rank}</div> */}
                  <Player
                    type="ScorePlayer"
                    name={p.Ten_CT}
                    teamName={p.Ten_DB}
                  />

                  <div className="ScoreType">{p.Ten_LBT}</div>
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

export default ScorePage;
