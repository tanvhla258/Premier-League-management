import React, { useCallback, useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
import Swal from "sweetalert2";
import axios from "axios";
import va from "./variable"
//import s from './LoginForm';
function LoginPage(props) {
  let navigate = useNavigate();
  const [listOfUsers, setListOfUsers] = useState([]);
  // useEffect(() => {
  //   async function fectchListOfUsers() {
  //     const url = "http://localhost:5000/api/users";
  //     const respone = await fetch(url);
  //     const responeJSON = await respone.json();
  //     console.log({ responeJSON });
  //     const { data } = responeJSON;
  //     setListOfUsers(data);
  //   }
  //   axios.get("http://localhost:5000/api/users").then((respone) => {
  //     setListOfUsers(respone.data);
  //   }, []);
  //   fectchListOfUsers();
  // }, []);
  const LogInSucessfully = useCallback(() => {
    //localStorage.setItem("isLog", 1);

    const userLog = document.querySelector(".userLogin");
    const passLog = document.querySelector(".passLogin");
    const user = {
      Ten_User: userLog.value,
      Password: passLog.value,
    };
    console.log(user)

    axios
      .post("http://52.64.166.62:443/api/users/login", user)
      .then((respone) => {
        if (
          respone.data === "Wrong password" ||
          respone.data === "Ivalid User"
        ) {
          localStorage.setItem("isLog", 0);
          console.log("NOT OK");
          Swal.fire("Wrong password or username!!!", "", "Success").then((result) => {

            if (result.isConfirmed) {
              window.location.href = "/LoginPage";
              //window.alert = "/LoginPage";

            }
          });

          //return navigate("/LoginPage", { replace: true }), [navigate];
          return navigate("/LoginPage");

        } else {
          localStorage.setItem("user", respone.data[0].Ten_User);
          localStorage.setItem("pass", respone.data[0].Password);
          localStorage.setItem("isLog", 1);
          console.log("OK");
          Swal.fire("Sign in successfully!", "", "Success").then((result) => {

            if (result.isConfirmed) {
              window.location.href = "/";

            }
          });

          //return navigate("/", { replace: true }), [navigate];
          return navigate("/")

        }
      });

    return navigate("/a")


  });

  return (
    <div className="LoginPage">
      <LoginForm Homeback={LogInSucessfully} />
      <div style={{ margin: "10px" }}>
        <Button>
          <NavLink href="./">Back</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;

