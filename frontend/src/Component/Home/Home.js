//rgba(122, 58, 187, 1)
//linear-gradient(90deg, rgba(122, 58, 187, 0.7) 0%,rgba(122, 58, 187, 0.1) 100%"
//rgba(122, 58, 187, 1)
//#BABFF0
import React, { useRef, useState, useParams, useEffect } from "react";
import "./Home.css";
import HomeNavBar from "./HomeNavBar/HomeNavBar";
import HomeSection from "./HomeSection/HomeSection.js";
import Logo from "../Logo/Logo";
import HomeIntro from "./HomeIntro/HomeIntro";
import AccGreeting from "../AccGreeting/AccGreeting";
import Button from "../Button/Button";
import ReactPaginate from "react-paginate";
import { Route, useLocation, useNavigate } from "react-router-dom";

function Home(props) {
  const HomeSectionRef = useRef();
  function handleScrollClick() {
    HomeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    console.log("scroll");
  }
  const displayWelcome = () => {
    document.querySelector(".HomeMain_right").style.display = "none";
  };
  const [Homelog, setHomelog] = useState(false);

  return (
    <div className="Home">
      <div className="HomeBG">
        <HomeNavBar displayWelcome={displayWelcome} />
        <div className="HomeMain">
          <div className="HomeMain_left">
            <HomeIntro />
            <button className="HomeIntro_button" onClick={handleScrollClick}>
              My tournament
            </button>
          </div>
          <div
            style={{
              display: localStorage.getItem("isLog") == 0 ? "none" : "block",
            }}
            className="HomeMain_right"
          >
            <AccGreeting
              greet="Welcome back"
              acc={`${localStorage.getItem("user")}`}
            />
          </div>
        </div>
      </div>
      <div className="HomeMain2" ref={HomeSectionRef}>
        <HomeSection />
      </div>

      <footer className="HomeFooter">
        <div className="AboutUs">
          <span>Đội ngũ team CNPM</span>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa
            est quod perferendis iusto rem voluptatem quas nulla porro error
          </p>
        </div>
        <div className="Contact">
          <span>Đội ngũ team CNPM</span>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa
            est quod perferendis iusto rem voluptatem quas nulla porro error
          </p>
        </div>
        <div className="QuickLinks"></div>
      </footer>
    </div>
  );
}
export default Home;
