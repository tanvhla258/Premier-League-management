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
    // const userReg = document.querySelector(".userReg");
    // const passReg = document.querySelector(".passReg");
    // const emailReg = document.querySelector(".emailReg");

    // localStorage.setItem("user", userReg.value);
    // localStorage.setItem("pass", passReg.value);
    // localStorage.setItem("email", emailReg.value);
    // localStorage.setItem("isLog", 1);
    // console.log(emailReg.value);
    axios.post("http://localhost:3123/api/users", data).then((respone) => {
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
        style={{ display: FormType == "Login" ? "none" : "block" }}
      >
        <form className="register-form">
          <input
            autocomplete="off"
            className="userReg"
            type="text"
            placeholder="name"
            name="name"
          />
          <input
            autocomplete="off"
            className="passReg"
            type="password"
            placeholder="password"
            name="password"
          />
          <input
            autocomplete="off"
            className="emailReg"
            type="text"
            placeholder="email address"
            name="email"
          />
          <button type="submit" className="regBtn" onSubmit={storeFormDataReg}>
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
        style={{ display: FormType == "Login" ? "block" : "none" }}
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
