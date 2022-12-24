import React, { useEffect, useState } from "react";
import "./SearchPlayerPage.css";
import StandingPageNavBar from "../StandingPage/StandingPageNavBar/StandingPageNavBar";
import PlayerTable from "../Table/PlayerTable/PlayerTable";
import { useNavigate } from "react-router-dom";

function SearchPlayerPage(props) {
  const searchNavigate = useNavigate();
  const [keySearch, setkeySearch] = useState("");
  function searching(e) {
    e.preventDefault();
    // let params = serializeFormQuery(e.target);
    // setSearchParams(params);
    const searchValue = e.target.value;
    searchNavigate(`./?search=${searchValue}`, {});
    setkeySearch(searchValue);
  }
  useEffect(() => {
    try {
      const fetchNewSearch = async function () {
        const fetchNewSearchData = await fetch(
          `http://localhost:5000/api/players/${
            keySearch ? `search/${keySearch}` : ""
          }`
        ).then((res) => res.json());
        console.log("newfetch");
        setlistOfPlayers([...fetchNewSearchData]);
        console.log(fetchNewSearchData);
      };
      fetchNewSearch();
    } catch (e) {}
  }, [keySearch]);
  const [listOfPlayers, setlistOfPlayers] = useState([]);
  // useEffect(() => {
  //   try {
  //     const fetchAllPlayers = async function () {
  //       const allPlayersData = await fetch(
  //         "http://localhost:5000/api/players"
  //       ).then((res) => res.json());
  //       console.log(allPlayersData);
  //       setlistOfPlayers([...allPlayersData]);
  //     };
  //     fetchAllPlayers();
  //   } catch (e) {}
  // }, []);
  return (
    <div className="SearchPlayerPage">
      <StandingPageNavBar Logo="Players" />
      <div className="SearchPlayerContent">
        <PlayerTable
          searching={searching}
          count={6}
          PlayersData={[...listOfPlayers]}
        />
      </div>
    </div>
  );
}

export default SearchPlayerPage;
