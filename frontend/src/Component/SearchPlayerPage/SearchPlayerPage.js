import React, { useEffect, useState } from "react";
import "./SearchPlayerPage.css";
import StandingPageNavBar from "../StandingPage/StandingPageNavBar/StandingPageNavBar";
import PlayerTable from "../Table/PlayerTable/PlayerTable";

function SearchPlayerPage(props) {
  const [listOfPlayers, setlistOfPlayers] = useState([]);
  useEffect(() => {
    try {
      const fetchAllPlayers = async function () {
        const allPlayersData = await fetch(
          "http://localhost:5000/api/players"
        ).then((res) => res.json());
        console.log(allPlayersData);
        setlistOfPlayers([...allPlayersData]);
      };
      fetchAllPlayers();
    } catch (e) {}
  }, []);
  return (
    <div className="SearchPlayerPage">
      <StandingPageNavBar Logo="Players" />
      <div className="SearchPlayerContent">
        <PlayerTable count={6} PlayersData={[...listOfPlayers]} />
      </div>
    </div>
  );
}

export default SearchPlayerPage;
