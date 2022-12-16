import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";

function LoginForm(props) {
  const [FormType, setFormType] = useState("Login");

  const storeFormData = function () {
    const userLog = document.querySelector(".userLogin");
    const passLog = document.querySelector(".passLogin");

    localStorage.setItem("user", userLog.value);
    localStorage.setItem("pass", passLog.value);
    localStorage.setItem("isLog", 1);
    const user = {
      Ten_User: userLog.value,
      Password: passLog.value,
    };

    axios
      .post("http://localhost:3123/api/users/login", user)
      .then((respone) => {
        console.log(respone.data);
      });
  };
  const storeFormDataReg = function () {
    const userReg = document.querySelector(".userReg");
    const passReg = document.querySelector(".passReg");
    const emailReg = document.querySelector(".emailReg");
    const birthdayReg = document.querySelector(".birthdayReg");
    const phoneReg = document.querySelector(".phoneReg");
    const roleReg = document.querySelector("#role");

    localStorage.setItem("user", userReg.value);
    localStorage.setItem("pass", passReg.value);
    localStorage.setItem("email", emailReg.value);
    localStorage.setItem("birthday", birthdayReg.value);
    localStorage.setItem("phone", phoneReg.value);
    localStorage.setItem("role", roleReg.value);

    localStorage.setItem("isLog", 1);
    const user = {
      Ten_User: userReg.value,
      Password: passReg.value,
      Email: emailReg.value,
      Ngay_Sinh: birthdayReg.value,
      Phone: phoneReg.value,
      Role: roleReg.value,
    };

    //console.log(user);

    axios.post("http://localhost:3123/api/users/register", user);
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
          <input className="birthdayReg" type="date" name="birthday" />
          <input
            className="phoneReg"
            type="text"
            placeholder="number phone"
            name="phone"
          />
          <div className="roleReg">
            <label for="role">Role:</label>
            <select name="role" id="role">
              <option value="guest" selected>
                guest
              </option>
              <option value="admin">admin</option>
            </select>
          </div>
          <button className="regBtn" onClick={storeFormDataReg}>
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
            name="username"
            className="userLogin"
            type="text"
            placeholder="username"
          />
          <input
            name="password"
            className="passLogin"
            type="password"
            placeholder="password"
          />
          <button onClick={storeFormData} className="loginBtn">
            Login
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
