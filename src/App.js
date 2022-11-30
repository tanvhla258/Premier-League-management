import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import "./index.css";
import "../src/Component/Home/Home.js";
import Home from "../src/Component/Home/Home.js";
import { Routes, Route, Link } from "react-router-dom";
import HomeNavbar from "./Component/Home/HomeNavBar/HomeNavBar";
const mylink = "/Home";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
