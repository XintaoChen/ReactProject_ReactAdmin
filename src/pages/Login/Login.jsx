import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./Login.less";
import logo from "../../assets/img/pikachu.png";

import LoginTable from "../../components/LoginTable/LoginTable";
import { reqLogin } from "../../api/index";
import { message } from "antd";
import memory from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

function Login() {
  const navigator = useNavigate();

  // if already login, navigate to home page
  const user = memory.user;
  if (user._id) {
    return <Navigate to={"/home"}></Navigate>;
  }

  // get login infomation from
  const getLoginInfo = async (user) => {
    const { username, password } = user;
    const value = await reqLogin(username, password);
    if (value.status === 0) {
      message.success("login successfully");
      memory.user = value.data;
      storageUtils.saveUser(value.data);
      navigator("/home");
    } else if (value.status === 1) {
      message.error(value.msg);
    }
  };

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
