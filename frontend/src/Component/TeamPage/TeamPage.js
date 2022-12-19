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
        console.log(setTeamInfo)
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
  // function SubmitForm(e) {
  const SubmitForm = function (e) {

    

    //e.preventDefault();

    // lấy dữ liệu từ form trả về cho backend
    const formHtml = document.querySelector("#addPlayerId");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);
    const newPlayer = {
      type: props.type,
      name: props.playername,
      country: props.country,
      birthday: props.birthday,
      club: teamId,
    };

    axios.post(`http://localhost:5000/api/clubs/${newPlayer.club}/players`, newPlayer);

    // const inputs = document.querySelectorAll("input");
    // inputs.forEach((element) => {
    //   element.value = "";
    // });
    //setDisplayPopUp(0);
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
  
  // function Date() {
  //   var birthday = document.getElementById("birthday").value; // Don't get Date yet...
  //     var regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; // add anchors; use literal
  //     var regexVarTest = regexVar.test(birthday); // pass the string, not the Date
  //     var userBirthDate = new Date(birthday.replace(regexVar, "$3-$2-$1")); // Use YYYY-MM-DD format
  //     var todayYear = (new Date()).getFullYear(); // Always use FullYear!!
  //     var cutOff19 = new Date(); // should be a Date
  //     cutOff19.setFullYear(todayYear - 16); // ...
  //     var cutOff95 = new Date();
  //     cutOff95.setFullYear(todayYear - 40);
  //     if (!regexVarTest) { // Test this before the other tests
  //       alert("enter date of birth as dd/mm/yyyy")
  //     } else if (isNaN(userBirthDate)) {
  //       alert("date of birth is invalid")
  //     } else if (userBirthDate > cutOff19) {
  //       alert("you have to be older than 16")
  //     } else if (userBirthDate < cutOff95) {
  //       alert("you have to be younger than 40")
  //     } else {
  //       alert("")
  //     }
  // }
  return (
    <div className="">
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
                <label required htmlFor="playername">Name</label>

                <input required  type="text" name="playername" id="playername"  />
              </div>
              <div className="inputItem">
                <label htmlFor="birthday">Birhtday</label>

                <input required type="text" name="birthday" id="birthday"  pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$" oninput={Date()}/>
              </div>

              <div className="inputItem">
                <label htmlFor="country">Country</label>

                <input required type="text" name="country" id="country" />
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
                  <button onClick={SubmitForm} >Submit</button>
                </div>
                <div className="cancel">
                  <button type="submit" onClick={CancelForm}>Cancel</button>
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
