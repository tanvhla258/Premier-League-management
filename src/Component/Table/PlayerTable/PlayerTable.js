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
} from "@fortawesome/free-solid-svg-icons";
import TeamPage from "../../TeamPage/TeamPage";
function PlayerTable(props) {
  let [currentPage, setCurrentPage] = useState(0);
  const [TeamPerPage] = useState(4);
  let maxPage = Math.floor((props.TeamData.players?.length - 1) / TeamPerPage);
  let startItem = currentPage * TeamPerPage;
  let endItem = startItem + TeamPerPage;

  let renderPlayerList = props.TeamData.players?.slice(startItem, endItem);

  function nextClick() {
    return currentPage < maxPage
      ? setCurrentPage(currentPage + 1)
      : currentPage;
  }
  function prevClick() {
    return currentPage > 0 ? setCurrentPage(currentPage - 1) : currentPage;
  }
  function addPLayer(f) {
    f();
  }
  return (
    <div className="PlayerTable">
      <div className="PlayerTableHeader">
        <div className="TeamName">
          <span className="btn down"></span>
          {props.name}
        </div>
        <div className="TeamPlayers">Players: {props.players}</div>
        <div className="TeamForeignPlayers">
          Foreign Players:{props.foreignPlayers}
        </div>
        <div className="add">
          <FontAwesomeIcon
            className="addIcon"
            icon={faAdd}
            onClick={props.popUp}
          />
        </div>
      </div>
      <div className="PlayerTableContent">
        <div className="PlayerTableContentMain">
          {renderPlayerList?.map((p) => {
            return (
              <div className="PlayerItem">
                <Player
                  type="TeamPlayer"
                  name={p.name}
                  age={p.age}
                  country={p.country}
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
