import React, { useState } from "react";
import "./Standing.css";
import "../Table.css";
import TeamList from "../../Data/TeamListData";

function Standing(props) {
  const renderRanking = props.rankData;

  return (
    <div className="Standing">
      <div className="StandingHeader TableHeader">
        <div className="StandingTag ">P</div>
        <div className="StandingTag StandingTeamName">Team</div>
        <div className="StandingTag">WP</div>
        <div className="StandingTag">W</div>
        <div className="StandingTag">D</div>
        <div className="StandingTag">L</div>
        <div className="StandingTag">PTS</div>
      </div>
      <div
        className="StandingContent"
        style={{
          maxHeight: "320px",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {renderRanking.map((team) => {
          return (
            <div key={team.p} className="StandingTeam">
              <div className="StandingTag">{team.Hang}</div>
              <div className="StandingTag StandingTeamName">{team.Ten_DB}</div>
              <div className="StandingTag">
                {team.Thang + team.Hoa + team.Thua}
              </div>
              <div className="StandingTag">{team.Thang}</div>
              <div className="StandingTag">{team.Hoa}</div>
              <div className="StandingTag">{team.Thua}</div>
              <div className="StandingTag StandingPTS">
                {Number(team.Thang * 3) + Number(team.Hoa)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Standing;
