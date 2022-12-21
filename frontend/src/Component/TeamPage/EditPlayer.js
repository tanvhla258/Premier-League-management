import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
function EditPlayer(props) {
  function SubmitForm() {}
  function CancelForm() {}
  const state = useLocation();

  console.log("State", state);
  return (
    <div className="EditPlayer">
      <form
        id="addPlayerId"
        className="formModel"
        action="addPlayer"
        onSubmit={SubmitForm}
      >
        <div className="inputItem">
          <label required htmlFor="playername">
            name
          </label>

          <input required type="text" name="playername" id="playername" />
        </div>
        <div className="inputItem">
          <label htmlFor="birthday">Birhtday</label>

          <input
            required
            type="text"
            name="birthday"
            id="birthday"
            pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
            oninput={Date()}
          />
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
            <button type="submit" onClick={CancelForm}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditPlayer;
