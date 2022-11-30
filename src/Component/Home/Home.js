//rgba(122, 58, 187, 1)
//linear-gradient(90deg, rgba(122, 58, 187, 0.7) 0%,rgba(122, 58, 187, 0.1) 100%"
//rgba(122, 58, 187, 1)
//#BABFF0
import "./Home.css";
import HomeNavBar from "./HomeNavBar/HomeNavBar";
import HomeSection from "./HomeSection/HomeSection.js";
import Logo from "../Logo/Logo";
import HomeIntro from "./HomeIntro/HomeIntro";
import AccGreeting from "../AccGreeting/AccGreeting";
function Home() {
  return (
    <div className="Home">
      <div className="HomeBG">
        <HomeNavBar />
        <div className="HomeMain">
          <div className="HomeMain_left">
            <HomeIntro />
          </div>
          <div className="HomeMain_right">
            <AccGreeting greet="Welcome back" acc="name" />
          </div>
        </div>
      </div>
      <HomeSection />

      <footer>CNPM</footer>
    </div>
  );
}
export default Home;
