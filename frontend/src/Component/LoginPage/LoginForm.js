import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import va from "./variable.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
let switchLG = "Login"
function LoginForm(props) {
  const [FormType, setFormType] = useState(switchLG);
  let navigate = useNavigate();
  
  // const storeFormData = function () {
  //   const userLog = document.querySelector(".userLogin");
  //   const passLog = document.querySelector(".passLogin");
  //   const user = {
  //     Ten_User: userLog.value,
  //     Password: passLog.value,
  //   };
  //   axios
  //     .post("http://localhost:5000/api/users/login", user)
  //     .then((respone) => {
  //       if (
  //         respone.data === "Wrong password" ||
  //         respone.data === "Ivalid User"
  //       ) {
  //         localStorage.setItem("isLog", 0);
  //         console.log("NOT OK");
  //         va.abc = "NOT OK"
  //       } else {
  //         localStorage.setItem("user", respone.data[0].Ten_User);
  //         localStorage.setItem("pass", respone.data[0].Password);
  //         localStorage.setItem("isLog", 1);
  //         console.log("OK");
  //         va.abc = "OK"
  //       }
  //     });
  // };

  const storeFormDataReg = function () {
    const userReg = document.querySelector(".userReg");
    console.log(document.querySelector(".userReg"));
    const passReg = document.querySelector(".passReg");
    const emailReg = document.querySelector(".emailReg");
    const birthdayReg = document.querySelector(".birthdayReg");
    const phoneReg = document.querySelector(".phoneReg");

    localStorage.setItem("user", userReg.value);
    localStorage.setItem("pass", passReg.value);
    localStorage.setItem("email", emailReg.value);
    localStorage.setItem("birthday", birthdayReg.value);
    localStorage.setItem("phone", phoneReg.value);
    localStorage.setItem("isLog", 1);
    const user = {
      Ten_User: userReg.value,
      Password: passReg.value,
      Email: emailReg.value,
      Ngay_Sinh: birthdayReg.value,
      Phone: phoneReg.value,
    };

    axios
      .post("http://localhost:5000/api/users/register", user)
      .then((respone) => {
        if (respone.data === "Username or Email has exist.Choose another") {
          localStorage.setItem("isLog", 0);
          console.log("NOT OK");
          switchLG = "Register"
          Swal.fire("Username or Email has exist.Choose another")
          //return navigate("/LoginPage", { replace: true }), [navigate];
          return navigate("/LoginPage");
        } else if (respone.data === "Register success") {
          localStorage.setItem("isLog", 1);
          console.log("OK");
          switchLG = "Login"
          return navigate("/LoginPage");
        }
      });
      return navigate("/a");
      
  };
  function switchReg() {
    setFormType("Register");
    switchLG = "Register"
  }
  function switchLog() {
    setFormType("Login");
    switchLG = "Login"
  }

  return (
    <div className="form">
      <div
        className="regBlock"
        style={{ display: FormType === "Login" ? "none" : "" }}
      >
        <form className="register-form" onSubmit={storeFormDataReg}>
          <input
            required
            className="userReg"
            type="text"
            placeholder="username"
            name="username"
            //autoComplete="off"
          />
          <input
            required
            className="passReg"
            type="password"
            placeholder="password"
            name="password"
            //autoComplete="off"
          />
          <input
            required
            className="emailReg"
            type="text"
            placeholder="email address"
            name="email"
            id="em"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Invalid email"
            
            //autoComplete="off"
          />
          {/* <div id="message">
            <p id="letter" class="invalid">Email hợp lệ</p>
          </div> */}
          <input required className="birthdayReg" type="date" name="birthday" />
          <input
            required
            className="phoneReg"
            type="text"
            placeholder="phone number"
            name="phone"
            pattern="[10-11]{1}[0-9]{9}"
            title="Phone number with 10-11 and remaing 9 digit with 0-9"
            //autoComplete="off"
          />

          <button className="regBtn" >
            {/* <a className="createacc" href={"/"}>
              Create
            </a> */}
            Create
          </button>
          <p className="message">
            Already registered? <a onClick={switchLog}>Login here</a>
          </p>
        </form>
      </div>
      <div
        className="loginBlock"
        style={{ display: FormType === "Login" ? "block" : "none" }}
      >
        <form className="login-form" onSubmit={props.Homeback}>
          <input
            required
            name="username"
            className="userLogin"
            type="text"
            placeholder="username"
            autoComplete="off"
          />
          <input
            required
            name="password"
            className="passLogin"
            type="password"
            placeholder="password"
            autoComplete="off"
          />
          <button className="loginBtn">Login</button>
          <p className="message">
            Not registered?{" "}
            <a onClick={switchReg} className="createacc" href="#">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
