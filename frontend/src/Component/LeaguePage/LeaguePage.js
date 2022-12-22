import React, { useEffect, useState } from "react";
import StandingPageNavBar from "../StandingPage/StadningPageNavBar/StandingPageNavBar";
import "./LeaguePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faCaretLeft,
  faCaretRight,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import logo from "../../img/mulogo.png";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function LeaguePage(props) {
  const TeamNavigate = useNavigate();

  const gotoEditTeam = (info) =>
    TeamNavigate(`./EditTeam/?id=${info.id}`, {
      state: {},
    });
  const [listOfClubs, setListOfClubs] = useState([]);
  let [currentPage, setCurrentPage] = useState(0);
  const [DisplayPopUp, setDisplayPopUp] = useState(0);

  useEffect(() => {
    const fetchLeague = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/clubs").then(
          (res) => res.json()
        );
        console.log(data);
        setListOfClubs([...data]);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchLeague();
  }, []);

  let LeagueDataRender = [...listOfClubs];
  const [TeamPerPage] = useState(4);
  let maxPage = Math.floor((LeagueDataRender?.length - 1) / TeamPerPage);
  let startItem = currentPage * TeamPerPage;
  let endItem = startItem + TeamPerPage;

  let renderTeamList = LeagueDataRender?.slice(startItem, endItem);
  console.log(renderTeamList);
  function nextClick() {
    return currentPage < maxPage
      ? setCurrentPage(currentPage + 1)
      : currentPage;
  }
  function prevClick() {
    return currentPage > 0 ? setCurrentPage(currentPage - 1) : currentPage;
  }
  function popUp() {
    setDisplayPopUp(1);
  }
  function SubmitForm(e) {
    e.preventDefault();

    const formHtml = document.querySelector("#addLeagueid");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);
    const newTeam = {
      Ten_DB: props.teamname,
      San_Nha: props.stadium,

      Logo: " ",
    };

    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    try {
      axios
        .post("http://localhost:5000/api/clubs/", newTeam)
        .then((respone) => {
          console.log(respone.data);
        });
      Swal.fire("Create successfully!", "OK").then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/LeaguePage";
        }
      });
    } catch (e) {}

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
  function handleTeamClick() {
    const teamContainer = document.querySelector(".TeamTableContentMain");
    teamContainer.addEventListener("click", function (e) {
      const team = e.target.closest(".Team");
      console.log(team);
      gotoEditTeam({
        id: team.getAttribute("teamid"),
      });
    });
  }
  function eleOver(e) {
    e.target.closest(".Team").style.boxShadow = "0 0 1px 1px #777";
    e.target.closest(".Team").style.cursor = "pointer";
  }
  function eleLeave(e) {
    e.target.closest(".Team").style.boxShadow = "none";
  }
  return (
    <div className="LeaguePage">
      <div
        className="Modal"
        style={{ display: DisplayPopUp ? "block" : "none" }}
      >
        <div
          className="ModalForm"
          style={{ display: DisplayPopUp ? "block" : "none" }}
        >
          <div className="ModalFormHeader">Team infomation</div>
          <div className="ModalFormContent">
            <form id="addLeagueid" className="formModel" onSubmit={SubmitForm}>
              {/* id của đội bóng tự tăng ko cần nhập */}
              {/* <div className="inputItem">
                <label htmlFor="TeamId">TeamId</label>

                <input type="text" name="TeamId" id="TeamId" />
              </div> */}
              <div className="inputItem">
                <label htmlFor="teamname">Name</label>

                <input type="text" name="teamname" id="teamname" />
              </div>
              <div className="inputItem">
                <label htmlFor="stadium">Stadium</label>

                <input type="text" name="stadium" id="stadium" />
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

      <StandingPageNavBar Logo="League" />
      <div className="LeaguePageTable">
        <div className="TeamTableHeader">
          <div className="TeamNums">Teams: {listOfClubs.length} </div>

          <div className="add">
            <FontAwesomeIcon className="addIcon" icon={faAdd} onClick={popUp} />
          </div>
        </div>
        <div onClick={handleTeamClick} className="TeamTableContent">
          <div className="TeamTableContentMain">
            {renderTeamList.map((t) => {
              return (
                <div
                  teamid={t.ID_Doi_Bong}
                  key={t.ID_Doi_Bong}
                  className="Team"
                  onMouseOver={eleOver}
                  onMouseLeave={eleLeave}
                >
                  <div className="TeamAva">
                    <img className="TeamAvaImg" src={logo}></img>
                  </div>
                  <div className="TeamInfo">
                    <span className="TeamInfoName">
                      <span className="TeamTag">Name:</span>
                      <span className="TeamTagName"> {t.Ten_DB}</span>
                    </span>
                    <span className="TeamInfoStadium">
                      <span className="TeamTag">Stadium: </span>
                      <span className="TeamTagStadium">{t.San_Nha}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="ControlBtn">
            <FontAwesomeIcon
              className="fai"
              icon={faCaretLeft}
              size="2x"
              onClick={prevClick}
            />
            <FontAwesomeIcon
              className="fai"
              icon={faCaretRight}
              size="2x"
              onClick={nextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaguePage;
