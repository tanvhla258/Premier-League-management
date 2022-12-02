import React from "react";
import "./Standing.css";
import "../Table.css";
function Standing(props) {
  return (
    <div className="Standing">
      <div className="StandingHeader TableHeader">
        <div className="StandingTag ">P</div>
        <div className="StandingTag StandingTeamName">Team</div>
        <div className="StandingTag">Wp</div>
        <div className="StandingTag">W</div>
        <div className="StandingTag">D</div>
        <div className="StandingTag">L</div>
        <div className="StandingTag">PTS</div>
      </div>
      <div className="StandingContent">
        <div className="StandingTeam">
          <div className="StandingTag">1</div>
          <div className="StandingTag StandingTeamName">Arsenal</div>
          <div className="StandingTag">15</div>
          <div className="StandingTag">14</div>
          <div className="StandingTag">0</div>
          <div className="StandingTag">1</div>
          <div className="StandingTag">43</div>
        </div>
        {props.Team?.map((team) => {
          <div className="StandingTeam">
            <div>{team.p}</div>
            <div>{team.name}</div>
            <div>{team.w}</div>
            <div>{team.wp}</div>
            <div>{team.d}</div>
            <div>{team.l}</div>
            <div>{team.pts}</div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Standing;
