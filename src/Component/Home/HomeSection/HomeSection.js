import React from "react";
import "./HomeSection.css";
import Logo from "../../Logo/Logo";
import Standing from "../../Table/Standing/Standing";
import MatchSchedule from "../../Table/MatchSchedule/MatchSchedule";
import Button from "../../Button/Button";
import NavLink from "../../NavLink/NavLink.js";
function HomeSection() {
  return (
    <div className="HomeSection">
      <div className="HomeSectionHeader">
        <Logo value="Premier Leaguage"></Logo>
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
            <Button>Match Result</Button>
          </div>
        </div>
        <div className="HomeSectionItem">
          <Standing></Standing>
        </div>
        <div className="HomeSectionItem">
          <MatchSchedule headerContent="Today match"></MatchSchedule>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
