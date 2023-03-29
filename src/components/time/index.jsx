import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

const Time = () => {
  const { setTime } = useContext(AppContext);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTime(currentTime.toLocaleTimeString());
  }, [currentTime, setTime]);

  return <div>{currentTime.toLocaleTimeString()}</div>;
};

export default Time;
