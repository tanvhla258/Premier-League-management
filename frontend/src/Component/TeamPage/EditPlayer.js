import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function EditPlayer(props) {
  const TeamPageData = useLocation();
  let playerid = TeamPageData.search.slice(-4);
  console.log(TeamPageData);
  const [Player, setPlayer] = useState({});
  useEffect(() => {
    try {
      const fetchPlayer = async function () {
        const data = await fetch(
          `http://52.64.166.62:443/api/players/${playerid}`
        ).then((res) => res.json());
        console.log(data[0]);
        let birthday = new Date(data[0].Ngay_Sinh_CT);
        data[0].Ngay_Sinh_CT = birthday.toLocaleDateString("en-CA");
        setPlayer(data[0]);
      };
      fetchPlayer();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  function UpdatePlayer(e) {
    e.preventDefault();
    const formHtml = document.querySelector("#editPlayerid");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);
    console.log(props);
    if (props.playername === "" || props.birthday === "") return;

    const updatePlayer = {
      id: playerid,
      type: props.type,
      name: props.playername,
      country: props.country,
      birthday: props.birthday,
      club: TeamPageData.state.teamid,
    };
    console.log(updatePlayer);
    try {
      axios.put(
        `http://52.64.166.62:443/api/clubs/${TeamPageData.state.teamid}/players/${playerid}`,
        updatePlayer
      );

      //Thong bao update thanh cong
      Swal.fire("Update successfully!", "OK").then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/TeamPage";
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  function DeletePlayer(e) {
    e.preventDefault();
    const formHtml = document.querySelector("#editPlayerid");
    const data = new FormData(formHtml);
    const props = Object.fromEntries(data);
    console.log(props);

    const deletePlayer = {
      id: playerid,
      // type: props.type,
      // name: props.playername,
      // country: props.country,
      // birthday: props.birthday,
      // club: TeamPageData.state.teamid,
    };

    try {
      axios.post(
        `http://52.64.166.62:443/api/clubs/${TeamPageData.state.teamid}/players/${playerid}`,
        deletePlayer
      );
      //Thong bao update thanh cong
      Swal.fire(`Player ${playerid} has deleted`, "OK").then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/TeamPage";
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  function BackForm(e) {
    e.preventDefault();
    window.location.href = "/TeamPage";
  }
  return (
    <div className="EditPlayer">
      <div className="editForm">
        <div className="editHeader">ID Player: {Player.ID_Cau_Thu}</div>

        <form id="editPlayerid" className="formModel" action="editPlayer">
          <div className="inputItem">
            <label required htmlFor="playername">
              Name
            </label>

            <input
              required
              type="text"
              defaultValue={Player.Ten_CT}
              name="playername"
              id="playername"
            />
          </div>
          <div className="inputItem">
            <label htmlFor="birthday">Birthday</label>
            <input
              required
              type="date"
              name="birthday"
              id="birthday"
              defaultValue={Player.Ngay_Sinh_CT}
            />
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
            <div className="Update">
              <button onClick={UpdatePlayer}>Update</button>
            </div>
            <div className="Delete">
              <button type="submit" onClick={DeletePlayer}>
                Delete
              </button>
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

export default EditPlayer;
