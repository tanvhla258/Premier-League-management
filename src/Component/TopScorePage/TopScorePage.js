import React from "react";
import "./TopScorePage.css";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import PlayerTable from "../Table/PlayerTable/PlayerTable";
import Player from "../Table/Player/Player";

function TopScorePage(props) {
  return (
    <div className="TopScorePage">
      <StandingPageNavBar Logo="Top Score" />
      <div className="TopScoreTable">
        <div className="TopScoreHeader">
          <span>Player</span>
          <span>Point</span>
        </div>
        <div className="TopScoreContent">
          <div className="TopScoreItem">
            <div className="TopScoreRank">1</div>
            <Player
              type="TopScorePlayer"
              name="Cristiano Ronaldo"
              teamName="Chelsea"
            />

            <div className="TopScorePoint">19</div>
          </div>

          <div className="TopScoreItem">
            <div className="TopScoreRank">1</div>
            <Player
              type="TopScorePlayer"
              name="Cristiano Ronaldo"
              teamName="Chelsea"
            />

            <div className="TopScorePoint">19</div>
          </div>

          <div className="TopScoreItem">
            <div className="TopScoreRank">1</div>
            <Player
              type="TopScorePlayer"
              name="Cristiano Ronaldo"
              teamName="Chelsea"
            />

            <div className="TopScorePoint">19</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopScorePage;
