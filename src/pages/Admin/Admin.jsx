import React from "react";
import axios from "axios";

function Admin() {
  const handleClick = () => {
    axios.get("http://localhost:5000/students").then(
      (value) => {
        console.log("success ", value);
      },
      (reason) => {
        console.log("error ", reason);
      }
    );
  };
  return (
    <div>
      Admin
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default Admin;
