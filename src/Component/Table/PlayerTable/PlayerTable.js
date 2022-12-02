import React from "react";
import add from "../../../img/plus.png";
import Player from "../Player/Player";
import "./PlayerTable.css";
function PlayerTable(props) {
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
          <img src={add}></img>
        </div>
      </div>
      <div className="PlayerTableContent">
        <div className="PlayerItem">
          <Player name="Bruno Fernandes" age="80" country="Portugal" />
        </div>
        <div className="PlayerItem">
          <Player name="Bruno Fernandes" age="80" country="Portugal" />
        </div>
        <div className="PlayerItem">
          <Player name="Bruno Fernandes" age="80" country="Portugal" />
        </div>
      </div>
    </div>
  );
}

export default PlayerTable;
