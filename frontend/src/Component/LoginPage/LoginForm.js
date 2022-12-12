import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
function LoginForm(props) {
  const [FormType, setFormType] = useState("Login");

  const storeFormData = function () {
    const user = document.querySelector(".userLogin");
    const pass = document.querySelector(".passLogin");

    localStorage.setItem("user", user.value);
    localStorage.setItem("pass", pass.value);
  };
  const storeFormDataReg = function () {
    const userReg = document.querySelector(".userReg");
    const passReg = document.querySelector(".passReg");

    localStorage.setItem("user", userReg.value);
    localStorage.setItem("pass", passReg.value);
    localStorage.setItem("isLog", 1);
  };
  function swtichReg() {
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
            </a>
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
          <input className="userReg" type="text" placeholder="username" />
          <input className="passReg" type="password" placeholder="password" />
          <button onClick={storeFormData} className="loginBtn">
            <a className="createacc" href={"/"}>
              login
            </a>
          </button>
          <p className="message">
            Not registered?{" "}
            <a onClick={swtichReg} className="createacc" href="#">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
