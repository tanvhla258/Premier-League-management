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
        {/* <div className="AboutUs">
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
        <div className="QuickLinks"></div> */}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <footer class="footer-distributed">

          <div class="footer-left">

            <h3>Nhóm<span> 8</span></h3>
            <h2>ĐỀ TÀI QUẢN LÝ GIẢI VÔ ĐỊCH BÓNG ĐÁ QUỐC GIA</h2>
            <p class="footer-links">
              <a href="#" class="link-1">Home</a>

              <a href="#">Blog</a>

              <a href="#">Pricing</a>

              <a href="#">About</a>

              <a href="#">Faq</a>

              <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">Company Name © 2022</p>
          </div>

          <div class="footer-center">

            <div>
              <i class="fa fa-map-marker"></i>
              <p><span>Đại học Khoa Học Tự Nhiên</span> Thành phố Hồ Chí Minh</p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>0999988887</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">support@football.com</a></p>
            </div>

          </div>

          <div class="footer-right">

            <p class="footer-company-about">
              <span>Thành viên</span>
              20120133 - Phạm Lê Hoài Minh <br/>
              20120134 - Trần Nguyễn Khải Minh <br/>
              20120155 - Biện Viết Phẩm <br/>
              20120184 - Phạm Quang Tân <br/>
            </p>

            <div class="footer-icons">

              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-github"></i></a>

            </div>

          </div>

        </footer>
      </footer>
    </div>
  );
}
export default Home;
