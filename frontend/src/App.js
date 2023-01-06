import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import axios from "axios";
import "./App.css";
import "./index.css";
import "../src/Component/Home/Home.js";
import Home from "../src/Component/Home/Home.js";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import HomeNavbar from "./Component/Home/HomeNavBar/HomeNavBar";
import StandingPage from "./Component/StandingPage/StandingPage";
import MatchSchedulePage from "./Component/MatchSchedulePage/MatchSchedulePage";
import TeamPage from "./Component/TeamPage/TeamPage";
import TopScorePage from "./Component/TopScorePage/TopScorePage";
import MatchResultPage from "./Component/MatchResultPage/MatchResultPage";
import LoginPage from "./Component/LoginPage/LoginPage";
import LeaguePage from "./Component/LeaguePage/LeaguePage";
import EditPlayer from "./Component/TeamPage/EditPlayer";
import EditTeam from "./Component/LeaguePage/EditTeam";
import ScorePage from "./Component/ScorePage/ScorePage";
import EditMatch from "./Component/MatchSchedulePage/EditMatch";
import SearchPlayerPage from "./Component/SearchPlayerPage/SearchPlayerPage";

function App() {
  let { id } = useParams();
  return (
    //Rounting app
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StandingPage" element={<StandingPage />} />
        <Route path="/MatchSchedulePage" element={<MatchSchedulePage />} />
        <Route path="/TeamPage" element={<TeamPage />} />
        <Route path="/TopScorePage" element={<TopScorePage />} />
        <Route path="/MatchResultPage" element={<MatchResultPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LeaguePage" element={<LeaguePage />} />
        <Route path="/SearchPlayerPage" element={<SearchPlayerPage />} />

        <Route path="/TeamPage/EditPlayer" element={<EditPlayer />} />
        <Route path="/LeaguePage/EditTeam" element={<EditTeam />} />
        <Route path="/MatchSchedulePage/EditMatch" element={<EditMatch />} />
        <Route path="/MatchResultPage/ScorePage" element={<ScorePage />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {listOfUsers.map((value, key) => {
    //     return (
    //       <div className="user">
    //         <div className="title">{value.id}</div>
    //         <div className="body">{value.firstName}</div>
    //         <div className="footer">{value.lastName}</div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}

export default App;
