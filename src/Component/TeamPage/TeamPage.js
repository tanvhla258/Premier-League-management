import React, { useState } from "react";
import "./TeamPage.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import add from "../../img/plus.png";
import Player from "../Table/Player/Player";
import PlayerTable from "../Table/PlayerTable/PlayerTable";
import teamLogo from "../../img/mulogo.png";
import { TeamData, addPlayerFromUser } from "../Data/TeamData";

function TeamPage(props) {
  const [DisplayPopUp, setDisplayPopUp] = useState(0);
  const [TeamDataRender, setTeamDataRender] = useState(TeamData);
  function popUp() {
    setDisplayPopUp(1);
  }
  function SubmitForm(e) {
    e.preventDefault();

    const formHtml = document.querySelector("#addPlayerId");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);

    const newPlayer = (
      <Player
        type="TeamPlayer"
        name={props.playername}
        country={props.country}
        age={props.age}
      />
    );
    TeamDataRender.players.push(newPlayer);
    setTeamDataRender(TeamDataRender);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    TeamData.players.push(newPlayer);
    setDisplayPopUp(0);
  }
  function CancelForm(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    console.log(inputs);
    setDisplayPopUp(0);
  }

  return (
    <div className="TeamPage">
      <div
        className="Modal"
        style={{ display: DisplayPopUp ? "block" : "none" }}
      >
        <div
          className="ModalForm"
          style={{ display: DisplayPopUp ? "block" : "none" }}
        >
          <div className="ModalFormHeader">Player infomation</div>
          <div className="ModalFormContent">
            <form
              id="addPlayerId"
              className="addPlayerForm"
              action="addPlayer"
              onSubmit={SubmitForm}
            >
              <div className="inputItem">
                <label htmlFor="playername">Name</label>

                <input type="text" name="playername" id="playername" />
              </div>
              <div className="inputItem">
                <label htmlFor="age">Age</label>

                <input type="text" name="age" id="age" />
              </div>

              <div className="inputItem">
                <label htmlFor="country">Country</label>

                <input type="text" name="country" id="country" />
              </div>
              <div className="formBtn">
                <div className="submit">
                  <button onClick={SubmitForm}>Submit</button>
                </div>
                <div className="cancel">
                  <button onClick={CancelForm}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <StandingPageNavBar Logo="Team Management" />
      <div className="TeamPageContent">
        <div className="TeamPageLogo">
          <img className="TeamLogoImg" src={teamLogo}></img>
        </div>
        <div className="TeamPageList">
          <PlayerTable
            popUp={popUp}
            name="Manchester United"
            TeamData={TeamDataRender}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
