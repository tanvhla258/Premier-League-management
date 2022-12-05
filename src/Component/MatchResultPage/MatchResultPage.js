import React from "react";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import "./MatchResultPage.css";
import add from "../../img/plus.png";
import MatchResult from "../Table/MatchResult/MatchResult";
function MatchResultPage(props) {
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
      </div>
    </div>
  );
}

export default MatchResultPage;
