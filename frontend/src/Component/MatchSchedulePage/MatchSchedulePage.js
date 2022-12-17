import React, { useEffect, useState } from "react";
import "./MatchSchedulePage.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

import NavLink from "../NavLink/NavLink";
import MatchSchedule from "../Table/MatchSchedule/MatchSchedule";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import add from "../../img/plus.png";
import { MatchScheduleData } from "../Data/MatchScheduleData";

function MatchSchedulePage(props) {
  const [listOfMatches, setListOfMatches] = useState([]);

  const [DisplayPopUp, setDisplayPopUp] = useState(0);
  let [MatchScheduleDataRender, setMatchScheduleDataRender] =
    useState(MatchScheduleData);
  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/matches").then(
          (res) => res.json()
        );
        console.log(data);
        setListOfMatches([...data]);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchMatch();
  }, []);
  function popUp() {
    setDisplayPopUp(1);
  }
  function SubmitForm(e) {
    e.preventDefault();

    const formHtml = document.querySelector("#addSchedule");
    const data = new FormData(formHtml);
    const dataObject = Object.fromEntries(data);
    console.log(dataObject);
    const newMatch = {
      home: dataObject.HomeTeam,
      away: dataObject.AwayTeam,
      time: dataObject.MatchTime,
      date: dataObject.MatchDay,
      stadium: dataObject.Stadium,
    };
    axios.post("http://localhost:5000/api/matches/", newMatch).then((respone) => {
      console.log(respone.data);
    });
    MatchScheduleDataRender = [...MatchScheduleDataRender, newMatch];
    setMatchScheduleDataRender(MatchScheduleDataRender);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    // MatchScheduleData = [...MatchScheduleDataRender];
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
              action="addSchedule"
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
          MatchSchedule={MatchScheduleDataRender}
          disableBtn={false}
          round={`Round ${props.roundNum}`}
        />
      </div>
    </div>
  );
}

export default MatchSchedulePage;
