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
import { useLocation } from "react-router-dom";
function ScorePage(props) {
  const [ListScore, setListScore] = useState([]);
  const matchResultInfo = useLocation();
  console.log(matchResultInfo.state);
  let ListScoreData = ListScore?.map((ts, i) => {
    return { rank: i + 1, ...ts };
  });
  let [currentPage, setCurrentPage] = useState(0);
  const [PlayerPerPage] = useState(3);
  let maxPage = Math.floor((ListScoreData.length - 1) / PlayerPerPage);
  console.log(maxPage);
  let startItem = currentPage * PlayerPerPage;
  let endItem = startItem + PlayerPerPage;

  let renderPlayerList = ListScoreData?.slice(startItem, endItem);
  useEffect(() => {
    const fetchResult = async () => {
      try {
        setListScore([...matchResultInfo.state.playerScore]);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchResult();
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
          <div className="MatchResultInfo">
            <div className="MatchResultInfoLogo">
              <img src={matchResultInfo.state.logo1} alt="" />
            </div>
            {`${matchResultInfo.state.team1}  - ${matchResultInfo.state.team2}`}
            <div className="MatchResultInfoLogo">
              <img src={matchResultInfo.state.logo2} alt="" />
            </div>
          </div>
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
                    name={p.ten_cau_thu}
                    teamName={p.doi_bong}
                    logo={p.image}
                  />
                  <div className="ScoreInfo">
                    <div className="ScoreTime">
                      {p.Thong_tin_ban_thang.Thoi_Diem}'
                    </div>
                    <div className="ScoreType">
                      {p.Thong_tin_ban_thang.Ten_LBT}
                    </div>
                  </div>
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
