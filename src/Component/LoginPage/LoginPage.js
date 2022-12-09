import React from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";

import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
function LoginPage(props) {
  return (
    <div className="LoginPage">
      <LoginForm />
      <div style={{ margin: "10px" }}>
        <Button>
          <NavLink href="./">Back</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
