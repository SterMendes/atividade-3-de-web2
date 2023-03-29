import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [phrase, setPhrase] = useState("");

  return (
    <AppContext.Provider
      value={{ time, greeting, phrase, setTime, setGreeting, setPhrase }}
    >
      {children}
    </AppContext.Provider>
  );
};
