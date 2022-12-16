import React, { useEffect, useState } from "react";
import "./TeamPage.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import Player from "../Table/Player/Player";
import PlayerTable from "../Table/PlayerTable/PlayerTable";
import teamLogo from "../../img/mulogo.png";
import axios from "axios";

function TeamPage(props) {
  const [DisplayPopUp, setDisplayPopUp] = useState(0);
  const [listOfPlayers, setListOfPlayers] = useState([]);
  const [TeamInfo, setTeamInfo] = useState([]);
  const [TeamListData, setTeamList] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const [teamId, setteamId] = useState(102);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const PlayerData = await fetch(
          `http://localhost:5000/api/clubs/${teamId}/players`
        ).then((res) => res.json());
        const TeamData = await fetch(
          `http://localhost:5000/api/clubs/${teamId}`
        ).then((res) => res.json());
        const TeamListData = await fetch(
          `http://localhost:5000/api/clubs/`
        ).then((res) => res.json());
        setListOfPlayers([...PlayerData]);
        setTeamInfo([...TeamData]);
        setTeamList([...TeamListData]);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchTeam();
  }, [teamId]);

  function popUp() {
    setDisplayPopUp(1);
  }
  function SubmitForm(e) {
    e.preventDefault();

    // const formHtml = document.querySelector("#addPlayerId");

    // const data = new FormData(formHtml);
    // const props = Object.fromEntries(data);

    // const newPlayer = {
    //   type: props.type,
    //   name: props.playername,
    //   country: props.country,
    //   age: props.age,
    //   club: 101,
    // };
    // axios.post("http://localhost:3123/api/clubs/101/players", newPlayer);

    // const inputs = document.querySelectorAll("input");
    // inputs.forEach((element) => {
    //   element.value = "";
    // });
    setDisplayPopUp(0);
  }
  function CancelForm(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    setDisplayPopUp(0);
  }
  function handlingId(id) {
    setteamId(id);
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
              className="formModel"
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
              <div className="inputItem">
                <label htmlFor="type">Type:</label>
                <select name="type" id="type">
                  <option value="domestic" selected>
                    domestic
                  </option>
                  <option value="foreign">foreign</option>
                </select>
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
          {isLoading ? (
            "Loading..."
          ) : (
            <PlayerTable
              popUp={popUp}
              TeamData={[...TeamInfo]}
              PlayersData={[...listOfPlayers]}
              TeamList={[...TeamListData]}
              handlingId={handlingId}
              //TeamData={listOfPlayers}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
