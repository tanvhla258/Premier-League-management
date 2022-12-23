import React, { useEffect, useState } from "react";
import "./TeamPage.css";
import Button from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import StandingPageNavBar from "../StandingPage/StandingPageNavBar/StandingPageNavBar";
import Player from "../Table/Player/Player";
import PlayerTable from "../Table/PlayerTable/PlayerTable";
import teamLogo from "../../img/mulogo.png";
import axios from "axios";
import Swal from "sweetalert2";

function TeamPage(props) {
  const PlayerNavigate = useNavigate();
  const gotoEditPlayer = (info) =>
    PlayerNavigate(`./EditPlayer/?id=${info.id}`, {
      state: { teamid: teamId },
    });
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
  // function SubmitForm(e) {
  const SubmitForm = function (e) {
    e.preventDefault();

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

    try {
      axios.post(
        `http://localhost:5000/api/clubs/${newPlayer.club}/players`,
        newPlayer
      );
      //Thong bao update thanh cong
      Swal.fire("Create successfully!", "OK").then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/TeamPage";
        }
      });
    } catch (e) {
      console.log(e);
    }

    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    setDisplayPopUp(0);
  };
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
  function handlePlayerClick() {
    const teamContainer = document.querySelector(".PlayerTableContentMain");
    teamContainer.addEventListener("click", function (e) {
      const player = e.target.closest(".Player");
      gotoEditPlayer({
        id: player.getAttribute("playerId"),
        name: player.getAttribute("name"),
      });
    });
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
                <label required htmlFor="playername">
                  Name
                </label>

                <input required type="text" name="playername" id="playername" />
              </div>
              <div className="inputItem">
                <label htmlFor="birthday">Birhtday</label>

                <input required type="date" name="birthday" id="birthday" />
              </div>

              <div className="inputItem">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" id="country" />
              </div>
              <div className="inputItem">
                <label htmlFor="PlayerImg">PlayerImg</label>
                <input type="file" name="PlayerImg" id="PlayerImg" />
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
                  <button type="submit" onClick={CancelForm}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <StandingPageNavBar Logo="Team Management" />
      <div className="TeamPageContent" onClick={handlePlayerClick}>
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
