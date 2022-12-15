import React, { useRef, useCallback } from "react";
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
  let MatchScheduleDataRender = MatchScheduleData.filter((p) => {
    return p.date === "22/12/2023";
  });
  console.log("MatchData:", MatchScheduleDataRender);
  let navigate = useNavigate();

  const ScheduleClick = useCallback(
    () => navigate("/MatchSchedulePage", { replace: true }),
    [navigate]
  );
  const StandingClick = useCallback(
    () => navigate("/StandingPage", { replace: true }),
    [navigate]
  );
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
        <div className="HomeSectionTable">
          <div
            className="HomeSectionItem HomeSectionStanding
        "
            onClick={StandingClick}
          >
            <Standing Team={TeamList}></Standing>
          </div>
          <div
            className="HomeSectionItem HomeSectionSchedule"
            onClick={ScheduleClick}
          >
            <MatchSchedule
              MatchSchedule={MatchScheduleDataRender}
              disableBtn={true}
              headerContent="Today match"
            ></MatchSchedule>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
