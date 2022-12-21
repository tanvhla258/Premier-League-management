import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
function EditPlayer(props) {
  function SubmitForm() {}
  function CancelForm() {}
  const TeamPageData = useLocation();
  let playerid = TeamPageData.search.slice(-4);
  console.log(TeamPageData);
  const [Player, setPlayer] = useState({});
  useEffect(() => {
    try {
      const fetchPlayer = async function () {
        const data = await fetch(
          `http://localhost:5000/api/players/${playerid}`
        ).then((res) => res.json());
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
      type: props.type,
      name: props.playername,
      country: props.country,
      birthday: props.birthday,
      club: TeamPageData.state.teamid,
    };
    axios.put(
      `http://localhost:5000/api/${TeamPageData.state.teamid}/players/${playerid}`,
      updatePlayer
    );
  }
  function DeletePlayer() {}
  function BackForm(e) {
    e.preventDefault();
    window.location.href = "/";
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
            <label htmlFor="birthday">Birhtday</label>
            <input
              required
              type="date"
              name="birthday"
              id="birthday"
              pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
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
