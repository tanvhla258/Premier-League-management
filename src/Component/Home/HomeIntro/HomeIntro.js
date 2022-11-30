import React from "react";
import Button from "../../Button/Button";
import "./HomeIntro.css";
function HomeIntro() {
  return (
    <div className="HomeIntro">
      <div className="title">Premier Leaguage</div>
      <div className="subtitle">Tournament mangement</div>
      <div className="HomeIntro_button">
        <Button>My tournament</Button>
      </div>
    </div>
  );
}

export default HomeIntro;
