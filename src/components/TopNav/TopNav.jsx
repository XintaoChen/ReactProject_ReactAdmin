import React from "react";
import { useNavigate } from "react-router-dom";

import memory from "../../utils/memoryUtils";
import storage from "../../utils/storageUtils";

import "./TopNav.less";
import cloudy from "./img/cloudy.png";

function TopNav() {
  const navigator = useNavigate();

  const handleClick = () => {
    memory.user = {};
    storage.deleteUser();
    navigator("/login");
  };
  return (
    <div className="top-nav">
      <div className="top-nav-top">
        <span>Welcome, {memory.user.username}</span>
        <button onClick={handleClick}>Exit</button>
      </div>
      <div className="top-nav-bottom">
        <div className="top-nav-bottom-left">Home Page</div>
        <div className="top-nav-bottom-right">
          <span>xxxx:xxxxx:Xxxxxxxx xx xxx</span>
          <img src={cloudy} alt="cloudy" />
          <span>Cloudy</span>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
