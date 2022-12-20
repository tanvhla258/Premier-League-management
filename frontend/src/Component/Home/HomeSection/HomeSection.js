import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSection.css";
import Logo from "../../Logo/Logo";
import Standing from "../../Table/Standing/Standing";
import MatchSchedule from "../../Table/MatchSchedule/MatchSchedule";
import Button from "../../Button/Button";
import NavLink from "../../NavLink/NavLink.js";
import TeamList from "../../Data/TeamListData";

import { MatchScheduleData } from "../../Data/MatchScheduleData";
function HomeSection() {
  const [listOfRank, setListOfRank] = useState([]);
  const [listOfMatch, setListOfMatch] = useState([]);

  const [isLoading, setisLoading] = useState(true);
  let navigate = useNavigate();

  const ScheduleClick = useCallback(
    () => navigate("/MatchSchedulePage", { replace: true }),
    [navigate]
  );
  const StandingClick = useCallback(
    () => navigate("/StandingPage", { replace: true }),
    [navigate]
  );

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/rank").then((res) =>
          res.json()
        );
        data.sort(function (rankA, rankB) {
          return rankA.Hang - rankB.Hang;
        });

        const data2 = await fetch("http://localhost:5000/api/matches").then(
          (res) => res.json()
        );

        const teamData = await fetch("http://localhost:5000/api/clubs").then(
          (res) => res.json()
        );
        teamData.sort(function (A, B) {
          return A.ID_Doi_Bong - B.ID_Doi_Bong;
        });
        data.sort(function (A, B) {
          return A.DOI_BONG_ID_Doi_Bong - B.DOI_BONG_ID_Doi_Bong;
        });
        const newData = data.map((element, i) => {
          return { ...data[i], ...teamData[i] };
        });
        newData.sort(function (rankA, rankB) {
          return rankA.Hang - rankB.Hang;
        });
        setListOfRank([...newData]);
        setListOfMatch([...data2]);
        setisLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchSectionData();
  }, []);

  return (
    <div className="HomeSection">
      <div className="HomeSectionHeader">
        <Logo value="Premier League"></Logo>
      </div>

      <div className="HomeSectionWrapper">
        <div
          className="HomeSectionItem HomeSectionNav"
          style={{ marginLeft: 0 }}
        >
          <div className="HomeSectionNavWrapper">
            <Button>
              <NavLink href={"./MatchSchedulePage"}>Match Schedule</NavLink>
            </Button>
            <Button>
              <NavLink href={"./MatchResultPage"}>Match Result</NavLink>
            </Button>
          </div>
        </div>
        {isLoading ? (
          "Loading.."
        ) : (
          <div className="HomeSectionTable">
            <div
              className="HomeSectionItem HomeSectionStanding
        "
              onClick={StandingClick}
            >
              <Standing rankData={[...listOfRank]} Team={TeamList}></Standing>
            </div>
            <div
              className="HomeSectionItem HomeSectionSchedule"
              onClick={ScheduleClick}
            >
              <MatchSchedule
                MatchSchedule={[...listOfMatch]}
                disableBtn={true}
                headerContent="Today match"
              ></MatchSchedule>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeSection;
