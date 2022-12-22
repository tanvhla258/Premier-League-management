import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function EditTeam() {
  const LeaguePageData = useLocation();
  let teamid = LeaguePageData.search.slice(-3);
  console.log(LeaguePageData);
  const [Team, setTeam] = useState({});
  useEffect(() => {
    try {
      const fetchTeam = async function () {
        const data = await fetch(
          `http://localhost:5000/api/clubs/${teamid}`
        ).then((res) => res.json());
        setTeam(data[0]);
      };
      fetchTeam();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  function UpdateTeam(e) {
    e.preventDefault();
    const formHtml = document.querySelector("#editTeamid");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);
    console.log(props);
    if (props.playername === "" || props.birthday === "") return;

    const updateTeam = {
      id: teamid,
      name: props.teamname,
      stadium: props.stadium,
    };
    console.log(updateTeam);
    try {
      axios.put(`http://localhost:5000/api/clubs/${teamid}`, updateTeam);

      //Thong bao update thanh cong
      Swal.fire("Update successfully!", "OK").then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/LeaguePage";
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  function DeleteTeam(e) {
    e.preventDefault();
    const formHtml = document.querySelector("#editTeamid");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);
    console.log(props);

    const deleteTeam = {
      id: teamid,
      // type: props.type,
      // name: props.playername,
      // country: props.country,
      // birthday: props.birthday,
      // club: TeamPageData.state.teamid,
    };
    try {
      axios.post(`http://localhost:5000/api/clubs/${teamid}`, deleteTeam);
      //Thong bao update thanh cong
      Swal.fire(`Player ${teamid} has deleted`, "OK").then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/LeaguePage";
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  function BackForm(e) {
    e.preventDefault();
    window.location.href = "/LeaguePage";
  }
  return (
    <div className="EditTeam">
      <div className="editForm">
        <div className="editHeader">ID Team: {Team.ID_Doi_Bong}</div>
        <form id="editTeamid" className="formModel">
          <div className="inputItem">
            <label htmlFor="teamname">Name</label>

            <input
              defaultValue={Team.Ten_DB}
              type="text"
              name="teamname"
              id="teamname"
            />
          </div>
          <div className="inputItem">
            <label htmlFor="stadium">Stadium</label>

            <input
              defaultValue={Team.San_Nha}
              type="text"
              name="stadium"
              id="stadium"
            />
          </div>

          <div className="formBtn">
            <div className="Update">
              <button onClick={UpdateTeam}>Update</button>
            </div>
            <div className="Delete">
              <button onClick={DeleteTeam}>Delete</button>
            </div>
            <div className="Back">
              <button onClick={BackForm}>Back</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTeam;
