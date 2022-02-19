import React from "react";
import "./Login.less";
import logo from "./img/logo.png";

import LoginTable from "../../components/LoginTable/LoginTable";

function Login() {
  return (
    <div className="login">
      <header className="login-header">
        <img src={logo} alt="logo" />
        <h1>React Project: Backstage Management System</h1>
      </header>
      <section className="login-content">
        <h2>User Login</h2>
        <LoginTable></LoginTable>
      </section>
    </div>
  );
}

export default Login;
