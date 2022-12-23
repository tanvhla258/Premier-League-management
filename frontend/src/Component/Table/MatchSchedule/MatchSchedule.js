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

  const renderMatchScheduleListWithDate = renderMatchScheduleList?.map((m) => {
    const date = new Date(m.Lich_Thi_Dau);
    const getHour = date.toTimeString().slice(0, 5);
    const getDate = date.toDateString().slice(4);

    return { ...m, time: getHour, date: getDate };
  });
  console.log(renderMatchScheduleListWithDate);
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
        <div className="HeaderContent">
          <div className="round">{props?.round}</div>
          {props.headerContent}
        </div>

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
          {renderMatchScheduleListWithDate?.map((p) => {
            return (
              <Match
                matchId={p.ID_Tran_Dau}
                home={p.Ten_DB_1}
                away={p.Ten_DB_2}
                time={p.time}
                date={p.date}
                stadium={p.San}
                logo1={p.Logo_DB_1[0].Logo}
                logo2={p.Logo_DB_2[0].Logo}
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
