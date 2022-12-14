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
          <input className="userReg" type="text" placeholder="name" />
          <input className="passReg" type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button className="regBtn" onClick={storeFormDataReg}>
            <a className="createacc" href={"/"}>
              Create
            </a>{" "}
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
        <form className="register-form">
          <input className="userReg" type="text" placeholder="name" />
          <input className="passReg" type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <input type="date" id="birthday" name="birthday" />
          <input className="phoneReg" type="text" placeholder="number phone" />
          <button className="regBtn" onClick={storeFormDataReg}>
            <a className="createacc" href={"/"}>
              Create
            </a>
          </button>
          <p onClick={switchLog} className="message">
            Already registered?{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
