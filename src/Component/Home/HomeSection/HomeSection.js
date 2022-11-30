import React from "react";
import "./HomeSection.css";
import Logo from "../../Logo/Logo";
import Stading from "../../Table/Stading/Stading";
import MatchSchedule from "../../Table/MatchSchedule/MatchSchedule";
import Button from "../../Button/Button";
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
            <Button>Match List</Button>
            <Button>Match Result</Button>
          </div>
        </div>
        <div className="HomeSectionItem">
          <Stading></Stading>
        </div>
        <div className="HomeSectionItem">
          <MatchSchedule></MatchSchedule>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
