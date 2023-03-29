import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

const Greeting = () => {
  const { time, setGreeting } = useContext(AppContext);

  useEffect(() => {
    if (time) {
      const hour = parseInt(time.split(":")[0]);
      if (hour >= 6 && hour < 12) {
        setGreeting("Bom dia");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("Boa tarde");
      } else {
        setGreeting("Boa noite");
      }
    }
  }, [time, setGreeting]);

  return <div>{time && <div>{`${time} ${greeting}`}</div>}</div>;
};

export default Greeting;