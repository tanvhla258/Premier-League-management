import React, { useState } from "react";
import Match from "../Match/Match";
import "./MatchSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
function MatchSchedule(props) {
  let [currentPage, setCurrentPage] = useState(0);
  const [MatchPerPage] = useState(4);
  let maxPage = Math.floor((props.MatchSchedule?.length - 1) / MatchPerPage);
  let startItem = currentPage * MatchPerPage;
  let endItem = startItem + MatchPerPage;

  let renderMatchScheduleList = props.MatchSchedule?.slice(startItem, endItem);

  function nextClick() {
    return currentPage < maxPage
      ? setCurrentPage(currentPage + 1)
      : currentPage;
  }
  function prevClick() {
    return currentPage > 0 ? setCurrentPage(currentPage - 1) : currentPage;
  }
  return (
    <div className="MatchSchedule">
      <div
        className="MatchScheduleHeader TableHeader"
        style={{
          justifyContent: props.disableBtn ? "center" : "space-between",
        }}
      >
        <div className="HeaderRound">{props?.round}</div>
        <div className="HeaderContent">{props.headerContent}</div>
        <div
          className="add"
          style={{ display: props.disableBtn ? "none" : "block" }}
        >
          <FontAwesomeIcon
            className="addIcon"
            icon={faAdd}
            onClick={props.popUp}
          />
        </div>
      </div>
      <div className="MatchScheduleContent">
        <div className="MatchScheduleContentMain">
          {renderMatchScheduleList?.map((p) => {
            return (
              <Match
                home={p.home}
                away={p.away}
                time={p.time}
                date={p.date}
                stadium={p.stadium}
              />
            );
          })}
        </div>
        <div
          className="ControlBtn"
          style={{
            display: props.disableBtn ? "none" : "block",
            marginTop: "40px",
          }}
        >
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

export default MatchSchedule;
