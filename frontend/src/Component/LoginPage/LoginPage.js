import React, { useCallback } from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
function LoginPage(props) {
  let navigate = useNavigate();

  const LogInSucessfully = useCallback(
    () => navigate("/", { replace: true, state: { isLog: true } }),
    [navigate]
  );

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
