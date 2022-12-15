import React, { useCallback } from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
import Swal from "sweetalert2";
function LoginPage(props) {
  let navigate = useNavigate();

  const LogInSucessfully = useCallback(() => {
    localStorage.setItem("isLog", 1);

    Swal.fire(
      "Sign up successfully!",
      "Return back to signin page!",
      "Success"
    ).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
    return navigate("/", { replace: true }), [navigate];
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
