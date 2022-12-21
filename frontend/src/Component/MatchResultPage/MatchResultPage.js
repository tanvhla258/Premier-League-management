import React, { useState, useEffect } from "react";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import "./MatchResultPage.css";
import axios from "axios";

import add from "../../img/plus.png";
import MatchResult from "../Table/MatchResult/MatchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

function MatchResultPage(props) {
  const [listOfMatchResult, setListOfMatchResult] = useState([]);

  let resultData = [...listOfMatchResult];
  let [currentPage, setCurrentPage] = useState(0);
  const [PlayerPerPage] = useState(3);
  let maxPage = Math.floor((resultData?.length - 1) / PlayerPerPage);
  console.log(maxPage);
  let startItem = currentPage * PlayerPerPage;
  let endItem = startItem + PlayerPerPage;

  let renderResultList = resultData?.slice(startItem, endItem);
  useEffect(() => {
    const fetchMatchResult = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/matchResult").then(
          (res) => res.json()
        );
        console.log(data);
        setListOfMatchResult([...data]);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchMatchResult();
  }, []);
  function nextClick() {
    return currentPage < maxPage
      ? setCurrentPage(currentPage + 1)
      : currentPage;
  }
  function prevClick() {
    return currentPage > 0 ? setCurrentPage(currentPage - 1) : currentPage;
  }
  const renderResultListWithDate = renderResultList?.map((m) => {
    const date = new Date(m.Ngay_gio);
    const getHour = date.toTimeString().slice(0, 5);
    const getDate = date.toDateString().slice(4);

    return { ...m, time: getHour, date: getDate };
  });
  return (
    <div className="MatchResultPage">
      <StandingPageNavBar Logo="Match Result" />
      <div className="MatchResultTable">
        <div className="MatchResultHeader">
          <div className="Round">Round: {props.round}2</div>
        </div>
        <div className="MatchResultContent">
          <div className="MatchResultContent">
            {renderResultListWithDate?.map((r) => {
              return (
                <MatchResult
                  team1={r.Ten_Doi_Thang}
                  team2={r.Ten_Doi_Thua}
                  point1={r.Ti_So[0]}
                  point2={r.Ti_So[2]}
                  time={r.time}
                  day={r.date}
                />
              );
            })}
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
    </div>
  );
}

export default MatchResultPage;
