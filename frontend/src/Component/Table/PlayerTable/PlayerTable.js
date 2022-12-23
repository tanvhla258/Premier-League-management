import React, { useState } from "react";
import add from "../../../img/plus.png";
import Player from "../Player/Player";
import "./PlayerTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
  faAdd,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
function PlayerTable(props) {
  let [currentPage, setCurrentPage] = useState(0);
  const [TeamPerPage] = useState(4);
  let maxPage = Math.floor((props.PlayersData?.length - 1) / TeamPerPage);
  let startItem = currentPage * TeamPerPage;
  let endItem = startItem + TeamPerPage;

  let renderPlayerList = props.PlayersData?.slice(startItem, endItem);

  function nextClick() {
    return currentPage < maxPage
      ? setCurrentPage(currentPage + 1)
      : currentPage;
  }
  function prevClick() {
    return currentPage > 0 ? setCurrentPage(currentPage - 1) : currentPage;
  }
  function chooseTeam(e) {
    props.handlingId(e.target.value);
  }

  return (
    <div className="PlayerTable">
      <div className="PlayerTableHeader">
        <div className="TeamName">
          <span className="btn down">
            <select
              onChange={(e) => {
                return chooseTeam(e);
              }}
              name="selectTeam"
              id="selectTeam"
            >
              {props.TeamList?.map((team) => {
                return <option value={team.ID_Doi_Bong}>{team.Ten_DB}</option>;
              })}
            </select>
          </span>
        </div>
        <div className="TeamPlayers">Players: {props.PlayersData.length}</div>
        <div className="TeamForeignPlayers">
          Foreign Players:
          {props.PlayersData?.filter((p) => p.Loai_CT !== "TN").length}
        </div>
        <div className="headerBtn">
          <div className="add">
            <FontAwesomeIcon
              className="addIcon"
              icon={faAdd}
              onClick={props.popUp}
            />
          </div>
        </div>
      </div>
      <div className="PlayerTableContent">
        <div className="PlayerTableContentMain">
          {renderPlayerList?.map((p) => {
            return (
              <div key={p.ID_Cau_Thu} className="PlayerItem">
                <Player
                  key={p.ID_Cau_Thu}
                  playerId={p.ID_Cau_Thu}
                  type="TeamPlayer"
                  name={p.Ten_CT}
                  country={p.Loai_CT}
                  logo={p.ImagePlayer?.Picture}
                />
              </div>
            );
          })}

          {/* <div className="PlayerItem">
          <Player
            type="TeamPlayer"
            name="Bruno Fernandes"
            age="80"
            country="Portugal"
          />
        </div> */}
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
  );
}

export default PlayerTable;
