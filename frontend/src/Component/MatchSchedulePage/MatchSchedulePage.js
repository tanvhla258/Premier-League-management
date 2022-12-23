import React, { useEffect, useState } from "react";
import "./MatchSchedulePage.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import MatchSchedule from "../Table/MatchSchedule/MatchSchedule";
import StandingPageNavBar from "../StandingPage/StandingPageNavBar/StandingPageNavBar";
import Swal from "sweetalert2";

function MatchSchedulePage(props) {
  const [listOfMatches, setListOfMatches] = useState([]);

  const [DisplayPopUp, setDisplayPopUp] = useState(0);
  const [TeamListData, setTeamList] = useState([]);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/matches").then(
          (res) => res.json()
        );
        const TeamListDataFetch = await fetch(
          `http://localhost:5000/api/clubs/`
        ).then((res) => res.json());
        console.log(data);
        setListOfMatches([...data]);
        setTeamList([...TeamListDataFetch]);
        console.log(TeamListData);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchMatch();
  }, []);

  const MatchNavigate = useNavigate();
  const gotoEditMatch = (info) =>
    MatchNavigate(`./EditMatch/?id=${info.ID_Tran_Dau}`, {
      state: { info },
    });

  function popUp() {
    setDisplayPopUp(1);
  }
  function SubmitForm(e) {
    e.preventDefault();

    const formHtml = document.querySelector("#addSchedule");
    const data = new FormData(formHtml);
    const dataObject = Object.fromEntries(data);
    let HomeSta;
    TeamListData.forEach((team) => {
      if (team.ID_Doi_Bong == dataObject.selectHomeTeam) HomeSta = team.San_Nha;
    });

    const newMatch = {
      home: dataObject.selectHomeTeam,
      away: dataObject.selectAwayTeam,
      time: dataObject.MatchTime,
      date: dataObject.MatchDay,
      stadium: HomeSta,
    };
    console.log(newMatch);

    axios
      .post("http://localhost:5000/api/matches/", newMatch)
      .then((respone) => {
        console.log(respone.data);
        Swal.fire("Create successfully!", "OK").then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/MatchSchedulePage";
          }
        });
      });
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
  function handleMatchClick() {
    const teamContainer = document.querySelector(".MatchScheduleTable");
    teamContainer.addEventListener("click", function (e) {
      const match = e.target.closest(".Match");
      const couple = match.querySelectorAll(".MatchInfoTeam");
      const team1 = couple[0].innerText;
      const team2 = couple[1].innerText;
      const matchChoose = listOfMatches.filter(
        (m) => m.Ten_DB_1 === team1 && m.Ten_DB_2 === team2
      );
      gotoEditMatch(matchChoose[0]);
    });
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
                <label htmlFor="selectHomeTeam">Home Team</label>

                <select name="selectHomeTeam" id="selectHomeTeam">
                  {TeamListData.map((team) => {
                    return (
                      <option value={team.ID_Doi_Bong}>{team.Ten_DB}</option>
                    );
                  })}
                </select>
              </div>
              <div className="inputItem">
                <label htmlFor="selectAwayTeam">Away Team</label>

                <select name="selectAwayTeam" id="selectAwayTeam">
                  {TeamListData.map((team) => {
                    return (
                      <option value={team.ID_Doi_Bong}>{team.Ten_DB}</option>
                    );
                  })}
                </select>
              </div>

              <div className="inputItem ">
                <label htmlFor="MatchTime">Match Time</label>

                <input type="time" name="MatchTime" id="MatchTime" />
                <label class="inputItemDate" htmlFor="MatchDay">
                  Day
                </label>
                <input
                  style={{ display: "none" }}
                  type="text"
                  name="Stadium"
                  id="Stadium"
                />
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

      <div onClick={handleMatchClick} className="MatchScheduleTable">
        <MatchSchedule
          popUp={popUp}
          MatchSchedule={[...listOfMatches]}
          disableBtn={false}
          round={`Round ${listOfMatches[0]?.Vong_Dau}`}
          TeamData={[...TeamListData]}
        />
      </div>
    </div>
  );
}

export default MatchSchedulePage;
