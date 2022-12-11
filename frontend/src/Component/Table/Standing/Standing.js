import React, { useState } from "react";
import "./Standing.css";
import "../Table.css";
import TeamList from "../../Data/TeamListData";

function Standing(props) {
  let [currentPage, setCurrentPage] = useState(0);
  const [TeamPerPage] = useState(9);
  const maxPage = Math.floor(props.Team.length / TeamPerPage);

  let startItem = currentPage * TeamPerPage;
  let endItem = startItem + TeamPerPage;

  let renderTeamList = props.Team.slice(startItem, endItem);

  console.log(renderTeamList);
  function nextClick() {
    return currentPage < maxPage
      ? setCurrentPage(currentPage + 1)
      : currentPage;
  }
  function prevClick() {
    return currentPage > 0 ? setCurrentPage(currentPage - 1) : currentPage;
  }

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
      <div className="StandingContent">
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
