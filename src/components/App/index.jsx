import React from "react";
import { AppProvider } from "./AppContext";
import Time from "./Time";
import Greeting from "./Greeting";
import Phrase from "./Phrase";

const App = () => {
  return (
    <AppProvider>
      <div>
        <Time />
        <Greeting />
        <Phrase />
      </div>
    </AppProvider>
  );
};

export default App;
