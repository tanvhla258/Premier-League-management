import React, { useState } from "react";
import "./MatchSchedulePage.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import MatchSchedule from "../Table/MatchSchedule/MatchSchedule";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import add from "../../img/plus.png";

function MatchSchedulePage(props) {
  const [DisplayPopUp, setDisplayPopUp] = useState(0);
  const [TeamDataRender, setTeamDataRender] = useState("");
  function popUp() {
    setDisplayPopUp(1);
  }
  function SubmitForm(e) {
    e.preventDefault();

    const formHtml = document.querySelector("#addPlayerId");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);

    // const newPlayer = (
    //   <Player
    //     type="TeamPlayer"
    //     name={props.playername}
    //     country={props.country}
    //     age={props.age}
    //   />
    // );
    // TeamDataRender.players.push(newPlayer);
    // setTeamDataRender(TeamDataRender);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    //TeamData.players.push(newPlayer);
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
    <div className="MatchSchedulePage">
      <div
        className="Modal"
        style={{ display: DisplayPopUp ? "block" : "none" }}
      >
        <div
          className="ModalForm"
          style={{ display: DisplayPopUp ? "block" : "none" }}
        >
          <div className="ModalFormHeader">Match infomation</div>
          <div className="ModalFormContent">
            <form
              id="addSchedule"
              className="formModel"
              action="addPlayer"
              onSubmit={SubmitForm}
            >
              <div className="inputItem">
                <label htmlFor="HomeTeam">Home Team</label>

                <input type="text" name="HomeTeam" id="HomeTeam" />
              </div>
              <div className="inputItem">
                <label htmlFor="AwayTeam">Away Team</label>

                <input type="text" name="AwayTeam" id="AwayTeam" />
              </div>
              <div className="inputItem">
                <label htmlFor="Stadium">Stadium</label>

                <input type="text" name="Stadium" id="Stadium" />
              </div>

              <div className="inputItem ">
                <label htmlFor="MatchTime">Match Time</label>

                <input type="time" name="MatchTime" id="MatchTime" />
                <label class="inputItemDate" htmlFor="MatchDay">
                  Day
                </label>

                <input type="Date" name="MatchDay" id="MatchDay" />
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
      <StandingPageNavBar Logo="Schedule" />

      <div className="MatchScheduleTable">
        <MatchSchedule
          popUp={popUp}
          disableBtn={false}
          round={`Round ${props.roundNum}`}
          addImg={
            <img style={{ width: "30px", height: "30px" }} src={add}></img>
          }
        />
      </div>
    </div>
  );
}

export default MatchSchedulePage;
