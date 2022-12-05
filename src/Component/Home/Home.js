//rgba(122, 58, 187, 1)
//linear-gradient(90deg, rgba(122, 58, 187, 0.7) 0%,rgba(122, 58, 187, 0.1) 100%"
//rgba(122, 58, 187, 1)
//#BABFF0
import React, { useRef } from "react";
import "./Home.css";
import HomeNavBar from "./HomeNavBar/HomeNavBar";
import HomeSection from "./HomeSection/HomeSection.js";
import Logo from "../Logo/Logo";
import HomeIntro from "./HomeIntro/HomeIntro";
import AccGreeting from "../AccGreeting/AccGreeting";
import Button from "../Button/Button";
function Home() {
  const HomeSectionRef = useRef();

  function handleScrollClick() {
    HomeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    console.log("scroll");
  }
  return (
    <div className="Home">
      <div className="HomeBG">
        <HomeNavBar />
        <div className="HomeMain">
          <div className="HomeMain_left">
            <HomeIntro />
            <button className="HomeIntro_button" onClick={handleScrollClick}>
              My tournament
            </button>
          </div>
          <div className="HomeMain_right">
            <AccGreeting greet="Welcome back" acc="name" />
          </div>
        </div>
      </div>
      <div className="HomeMain2" ref={HomeSectionRef}>
        <HomeSection />
      </div>

      <footer>CNPM</footer>
    </div>
  );
}
export default Home;
