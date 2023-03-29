import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "./AppContext";

const Phrase = () => {
  const { setPhrase } = useContext(AppContext);

  useEffect(() => {
    const fetchPhrase = async () => {
      try {
        const response = await axios.get("https://type.fit/api/quotes");
        const quotes = response.data;
        const randomQuote =
          quotes[Math.floor(Math.random() * quotes.length)];
        setPhrase(randomQuote.text);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhrase();
  }, [setPhrase]);

  return <div>{phrase}</div>;
};

export default Phrase;
