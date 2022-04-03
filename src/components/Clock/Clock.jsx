import React, { useState, useEffect } from "react";

import cloudy from "./img/cloudy.png";

import { formateDate } from "../../utils/dateUtils";

function Clock() {
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    let timer = setInterval(() => {
      setDateTime(formateDate(Date.now()));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <span>{dateTime}</span>
      <img src={cloudy} alt="cloudy" />
      <span>Cloudy</span>
    </div>
  );
}

export default Clock;
