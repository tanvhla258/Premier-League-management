import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import "./index.css";
import "../src/Component/Home/Home.js";
import Home from "../src/Component/Home/Home.js";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import HomeNavbar from "./Component/Home/HomeNavBar/HomeNavBar";
import StandingPage from "./Component/StandingPage/StandingPage";
import MatchSchedulePage from "./Component/MatchSchedulePage/MatchSchedulePage";
import TeamPage from "./Component/TeamPage/TeamPage";
import TopScorePage from "./Component/TopScorePage/TopScorePage";
import MatchResultPage from "./Component/MatchResultPage/MatchResultPage";
import LoginPage from "./Component/LoginPage/LoginPage";

function App() {
  return (
    // Rounting app
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StandingPage" element={<StandingPage />} />
        <Route path="/MatchSchedulePage" element={<MatchSchedulePage />} />
        <Route path="/TeamPage" element={<TeamPage />} />
        <Route path="/TopScorePage" element={<TopScorePage />} />
        <Route path="/MatchResultPage" element={<MatchResultPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
