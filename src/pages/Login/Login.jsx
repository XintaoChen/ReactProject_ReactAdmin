import React from "react";
import "./Login.less";
import logo from "./img/logo.png";

import LoginTable from "../../components/LoginTable/LoginTable";

function Login() {

  // get login infomation from 
  const getLoginInfo = (user) => {
    console.log(user.username)
    console.log(user.password)
  }

  return (
    <div className="login">
      <header className="login-header">
        <img src={logo} alt="logo" />
        <h1>React Project: Backstage Management System</h1>
      </header>
      <section className="login-content">
        <h2>User Login</h2>
        <LoginTable getLoginInfo={getLoginInfo}></LoginTable>
      </section>
    </div>
  );
}

export default Login;
