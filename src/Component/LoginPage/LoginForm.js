import React, { useState } from "react";
import "./LoginForm.css";
function LoginForm(props) {
  const [FormType, setFormType] = useState("Login");
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
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p onClick={switchLog} className="message">
            Already registered?{" "}
            <a className="createacc" href="#">
              Sign In
            </a>
          </p>
        </form>
      </div>
      <div
        className="loginBlock"
        style={{ display: FormType == "Login" ? "block" : "none" }}
      >
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>login</button>
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
