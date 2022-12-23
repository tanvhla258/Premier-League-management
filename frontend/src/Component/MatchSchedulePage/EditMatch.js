import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function EditMatch(props) {
  const MatchScheduleData = useLocation().state.info;
  let MatchId = MatchScheduleData.ID_Tran_Dau;
  //let MatchId = MatchScheduleData.search.slice(-4);
  console.log(MatchScheduleData);
  const [Match, setMatch] = useState({});
  const [TeamListData, setTeamList] = useState([]);
  useEffect(() => {
    try {
      const fetchMatch = async function () {
        //     const data = await fetch(
        //       `http://localhost:5000/api/players/${playerid}`
        //     ).then((res) => res.json());
        //     console.log(data[0]);
        //     let birthday = new Date(data[0].Ngay_Sinh_CT);
        //     data[0].Ngay_Sinh_CT = birthday.toLocaleDateString("en-CA");
        const TeamListDataFetch = await fetch(
          `http://localhost:5000/api/clubs/`
        ).then((res) => res.json());
        console.log(TeamListDataFetch);
        setTeamList([...TeamListDataFetch]);
        setMatch(MatchScheduleData);
      };
      fetchMatch();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  function UpdateMatch(e) {
    e.preventDefault();
    const formHtml = document.querySelector("#EditMatchid");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);
    console.log(props);
    // if (props.Matchname === "" || props.birthday === "") return;

    const updateMatch = {
      ID_Tran_Dau: MatchScheduleData.ID_Tran_Dau,
      DOI_BONG_ID_Doi_Bong_1: props.selectHomeTeam,
      DOI_BONG_ID_Doi_Bong_2: props.selectAwayTeam,
      time: props.MatchTime,
      day: props.MatchDay,
    };
    console.log(updateMatch);
    try {
      axios.put(`http://localhost:5000/api/matches`, updateMatch);
      //Thong bao update thanh cong
      Swal.fire("Update successfully!", "OK").then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/MatchSchedule";
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  function deleteMatch(e) {
    e.preventDefault();
    const formHtml = document.querySelector("#editMatchid");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);
    console.log(props);

    const deleteMatch = {
      id: MatchId,
      // type: props.type,
      // name: props.playername,
      // country: props.country,
      // birthday: props.birthday,
      // club: TeamPageData.state.teamid,
    };

    try {
      //   axios.post(
      //     `http://localhost:5000/api/clubs/${TeamPageData.state.teamid}/players/${playerid}`,
      //     deletePlayer
      //   );
      //   //Thong bao update thanh cong
      //   Swal.fire(`Player ${playerid} has deleted`, "OK").then((result) => {
      //     if (result.isConfirmed) {
      //       window.location.href = "/MatchSchedule";
      //     }
      //   });
    } catch (e) {
      console.log(e.message);
    }
  }
  function BackForm(e) {
    e.preventDefault();
    window.location.href = "/MatchSchedulePages";
  }
  return (
    <div className="EditMatch">
      <div className="editForm">
        <div className="editHeader">ID Match: {Match.ID_Cau_Thu}</div>

        <form id="EditMatchid" className="formModel" action="editMatch">
          <div className="inputItem">
            <label htmlFor="selectHomeTeam">Home Team</label>

            <select name="selectHomeTeam" id="selectHomeTeam">
              {TeamListData?.map((team) => {
                return <option value={team.ID_Doi_Bong}>{team.Ten_DB}</option>;
              })}
            </select>
          </div>
          <div className="inputItem">
            <label htmlFor="selectAwayTeam">Away Team</label>

            <select name="selectAwayTeam" id="selectAwayTeam">
              {TeamListData?.map((team) => {
                return <option value={team.ID_Doi_Bong}>{team.Ten_DB}</option>;
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
            <div className="update">
              <button onClick={UpdateMatch}>Update</button>
            </div>
            <div className="delete">
              <button onClick={deleteMatch}>Delete</button>
            </div>
            <div className="back">
              <button onClick={BackForm}>Back</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditMatch;
