import React, { useState } from "react";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import "./MatchResultPage.css";
import add from "../../img/plus.png";
import MatchResult from "../Table/MatchResult/MatchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

function MatchResultPage(props) {
  // let [currentPage, setCurrentPage] = useState(0);
  // const [PlayerPerPage] = useState(3);
  // let maxPage = Math.floor((TopScoreData?.length - 1) / PlayerPerPage);
  // console.log(maxPage);
  // let startItem = currentPage * PlayerPerPage;
  // let endItem = startItem + PlayerPerPage;

  // let renderPlayerList = TopScoreData?.slice(startItem, endItem);

  function nextClick() {
    // return currentPage < maxPage
    //   ? setCurrentPage(currentPage + 1)
    //   : currentPage;
  }
  function prevClick() {
    // return currentPage > 0 ? setCurrentPage(currentPage - 1) : currentPage;
  }
  return (
    <div className="MatchResultPage">
      <StandingPageNavBar Logo="Match Result" />
      <div className="MatchResultTable">
        <div className="MatchResultHeader">
          <div className="Round">Round: {props.round}2</div>

          <div className="add">
            <img src={add}></img>
          </div>
        </div>
        <div className="MatchResultContent">
          <div className="MatchResultContent">
            <MatchResult
              team1="Man United"
              team2="New Castle"
              point1="3"
              point2="2"
              time="19:00"
              day="Nov 9"
            />
            <MatchResult
              team1="Man United"
              team2="New Castle"
              point1="3"
              point2="2"
              time="19:00"
              day="Nov 9"
            />
            <MatchResult
              team1="Man United"
              team2="New Castle"
              point1="3"
              point2="2"
              time="19:00"
              day="Nov 9"
            />
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

export default MatchResultPage;
