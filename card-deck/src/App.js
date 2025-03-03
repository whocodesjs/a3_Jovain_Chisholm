import React, { useState } from "react";
import Card from "./components/Card";
import Deck from "./components/Deck";
import "./App.css";

const suits = ["♥", "♦", "♣", "♠"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
function App() {
  const [deck, setDeck] = useState(generateDeck());
  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  function generateDeck() {
    return suits.flatMap((suit) => {
      return values.map((value) => {
        return { suit, value };
      });
    });
  }

  return (
    <div className="App">
      <h1>Card Deck</h1>
      <div className="controls">
        <button onClick={() => dealCards(5)}>Deal 5</button>
        <button onClick={() => dealCards(7)}>Deal 7</button>
        <button onClick={reset}>Reset</button>
        <button onClick={tossCard} disabled={selectedCard === null}>
          Toss
        </button>
        <button onClick={addWildCard}>Wildcard</button>
        <button onClick={regroup}>Regroup</button>
      </div>
    </div>
  );
}

export default App;
