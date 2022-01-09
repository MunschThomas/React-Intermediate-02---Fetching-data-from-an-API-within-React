import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner";
import QuoteCard from "./components/QuoteCard";
import { useState, useEffect } from "react";

import "./components/QuoteCard.css";

const App = () => {
  const [simpsonQuote, setSimpsonQuote] = useState(initialQuote);
  const [isLoading, setIsLoading] = useState(false);

  const changeQuote = () => {
    setIsLoading(true);
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.data)
      .then((data) => {
        setSimpsonQuote(data[0]);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <button type="button" onClick={changeQuote}>
        Change Quote
      </button>
      {isLoading ? <LoadingSpinner /> : <QuoteCard {...simpsonQuote} />}
    </div>
  );
};

export default App;

const initialQuote = {
  quote: "Eat my shorts",
  character: "Bart Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
  characterDirection: "Right",
};
