import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";

import { Link } from "react-router-dom";
function LoginForm(props) {
  const [FormType, setFormType] = useState("Login");

  const storeFormData = function () {
    const user = document.querySelector(".userLogin");
    const pass = document.querySelector(".passLogin");

    localStorage.setItem("user", user.value);
    localStorage.setItem("pass", pass.value);
    localStorage.setItem("isLog", 1);
  };
  const storeFormDataReg = function (data) {
    const userReg = document.querySelector(".userReg");
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
    //console.log(user);
    console.log(user);
    axios.post("http://localhost:3123/api/users", user).then((respone) => {
      // setListOfUsers(respone.data);
      console.log("IT WORKED");
    });
  };
  function switchReg() {
    setFormType("Register");
  }
  function switchLog() {
    setFormType("Login");
  }
  return (
    <div className="form">
      <div
        className="regBlock"
        style={{ display: FormType === "Login" ? "none" : "block" }}
      >
        <form className="register-form">
          <input
            className="userReg"
            type="text"
            placeholder="name"
            name="username"
          />
          <input
            className="passReg"
            type="password"
            placeholder="password"
            name="password"
          />
          <input
            className="emailReg"
            type="text"
            placeholder="email address"
            name="email"
          />
          <input
            className="birthdayReg"
            type="date"
            id="birthday"
            name="birthday"
          />
          <input
            className="phoneReg"
            type="text"
            placeholder="number phone"
            name="phone"
          />
          <button className="regBtn" onClick={storeFormDataReg}>
            {/* <a className="createacc" href={"/"}>
              Create
            </a> */}
            Create
          </button>
          <p onClick={switchLog} className="message">
            Already registered?{" "}
          </p>
        </form>
      </div>
      <div
        className="loginBlock"
        style={{ display: FormType === "Login" ? "block" : "none" }}
      >
        <form className="login-form" onSubmit={props.Homeback}>
          <input className="userLogin" type="text" placeholder="username" />
          <input className="passLogin" type="password" placeholder="password" />
          <button onClick={storeFormData} className="loginBtn">
            <a className="createacc" href={"/"}>
              login
            </a>
          </button>
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
