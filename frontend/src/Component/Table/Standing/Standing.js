import React, { useState } from "react";
import "./Standing.css";
import "../Table.css";
import TeamList from "../../Data/TeamListData";

function Standing(props) {
  let renderTeamList = props.Team;

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
        {renderTeamList.map((team) => {
          return (
            <div key={team.p} className="StandingTeam">
              <div className="StandingTag">{team.p}</div>
              <div className="StandingTag StandingTeamName">{team.name}</div>
              <div className="StandingTag">{team.wp}</div>
              <div className="StandingTag">{team.w}</div>
              <div className="StandingTag">{team.d}</div>
              <div className="StandingTag">{team.l}</div>
              <div className="StandingTag StandingPTS">
                {Number(team.w * 3) + Number(team.d)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Standing;
