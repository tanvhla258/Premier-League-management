import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import axios from "axios";
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
import LeaguePage from "./Component/LeaguePage/LeaguePage";

function App() {
  // const [listOfUsers, setListOfUsers] = useState([]);
  // useEffect(() => {
  //   async function fectchListOfUsers() {
  //     const url = "http://localhost:3123/api/users";
  //     const respone = await fetch(url);
  //     const responeJSON = await respone.json();
  //     console.log({ responeJSON });
  //     const { data } = responeJSON;
  //     setListOfUsers(data);
  //   }
  //   // axios.get("http://localhost:3123/api/users").then((respone) => {
  //   //   setListOfUsers(respone.data);
  //   // },[]);
  //   fectchListOfUsers();
  // }, []);
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
