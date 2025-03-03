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
  const [deck, setDeck] = useState(createDeck());
  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  function createDeck() {
    return suits.flatMap((suit) => {
      return values.map((value) => {
        return { suit, value };
      });
    });
  }

  const drawCard = () => {
    if (deck.length === 0) return;
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    setDeck(deck.filter((_, i) => i !== randomIndex));
    setDrawnCards([...drawnCards, card]);
  };

  const handleCardClick = (i) => {
    if (selectedCard === null) {
      setSelectedCard(i);
    } else if (selectedCard === i) {
      setSelectedCard(null);
    } else {
      const newCards = [...drawnCards];
      [newCards[selectedCard], newCards[i]] = [
        newCards[i],
        newCards[selectedCard],
      ];
      setDrawnCards(newCards);
      setSelectedCard(null);
    }
  };

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
      <Deck cardsRemaining={deck.length} onClick={drawCard} />
      <div className="drawn-cards">
        {drawnCards.map((card, i) => (
          <Card
            key={i}
            suit={card.suit}
            value={card.value}
            isPicked={i === selectedCard}
            onClick={() => handleCardClick(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
