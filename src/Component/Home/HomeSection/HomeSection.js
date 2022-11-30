import React from "react";
import "./HomeSection.css";
import Logo from "../../Logo/Logo";
import Stading from "../../Table/Stading/Stading";
import MatchSchedule from "../../Table/MatchSchedule/MatchSchedule";
function HomeSection() {
  return (
    <div className="HomeSection">
      <div className="HomeSectionHeader">
        <Logo value="Premier Leaguage"></Logo>

        <div className="HomeSectionWrapper">
          <Stading></Stading>
          <MatchSchedule></MatchSchedule>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
