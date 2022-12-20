import React, { useCallback, useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

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
    localStorage.setItem("isLog", 1);

    const userLog = document.querySelector(".userLogin");
    const passLog = document.querySelector(".passLogin");
    const user = {
      Ten_User: userLog.value,
      Password: passLog.value,
    };
    axios
      .post("http://localhost:5000/api/users/login", user)
      .then((respone) => {
        if (
          respone.data === "Wrong password" ||
          respone.data === "Ivalid User"
        ) {
          localStorage.setItem("isLog", 0);
          console.log("NOT OK");
          va.abc = "NOT OK"
            Swal.fire("Wrong password or username!!!", "", "Success").then((result) => {

              if (result.isConfirmed) {
                window.alert('Succesfully Updated');
                window.location.href = "/LoginPage";
                
              }
            });

            //return navigate("/LoginPage", { replace: true }), [navigate];
        } else {
          localStorage.setItem("user", respone.data[0].Ten_User);
          localStorage.setItem("pass", respone.data[0].Password);
          localStorage.setItem("isLog", 1);
          console.log("OK");
          va.abc = "OK"
          Swal.fire("Sign in successfully!", "", "Success").then((result) => {

            if (result.isConfirmed) {
              window.location.href = "/";

            }
          });

          return navigate("/", { replace: true }), [navigate];
        }
      });


    console.log(va.abc);


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

