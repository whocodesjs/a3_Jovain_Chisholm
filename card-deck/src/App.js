/* StAuth10244: I Jovain Chisholm, 000905188 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
 */
import React, { useState, useEffect } from "react";
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const dealCards = (count) => {
    const newDeck = [...deck, ...drawnCards];
    setDrawnCards([]);
    setSelectedCard(null);
    const newDrawnCards = [];
    for (let i = 0; i < count && newDeck.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * newDeck.length);
      newDrawnCards.push(newDeck[randomIndex]);
      newDeck.splice(randomIndex, 1);
    }
    setDeck(newDeck);
    setDrawnCards(newDrawnCards);
  };

  const reset = () => {
    setDeck(createDeck());
    setDrawnCards([]);
    setSelectedCard(null);
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

  const tossCard = () => {
    if (selectedCard === null) return;
    const newCards = drawnCards.filter((_, i) => i !== selectedCard);
    setDrawnCards(newCards);
    setSelectedCard(null);
  };

  const regroup = () => {
    const shuffled = [...drawnCards].sort(() => Math.random() - 0.5);
    setDrawnCards(shuffled);
  };

  const addWildCard = () => {
    const newCard = {
      suit: suits[Math.floor(Math.random() * suits.length)],
      value: values[Math.floor(Math.random() * values.length)],
    };
    setDrawnCards([...drawnCards, newCard]);
  };

  const getButtonLabel = (text) => {
    if (screenWidth <= 480) {
      const shortLabels = {
        "Deal 5": "D5",
        "Deal 7": "D7",
        Reset: "Rst",
        Toss: "Tss",
        Wildcard: "Wild",
        Regroup: "Rgp",
      };
      return shortLabels[text] || text;
    }
    return text;
  };

  return (
    <div className="App">
      <h1>Card Deck</h1>
      <div className="controls">
        <button onClick={() => dealCards(5)} aria-label="Deal 5 cards">
          {getButtonLabel("Deal 5")}
        </button>
        <button onClick={() => dealCards(7)} aria-label="Deal 7 cards">
          {getButtonLabel("Deal 7")}
        </button>
        <button onClick={reset} aria-label="Reset deck">
          {getButtonLabel("Reset")}
        </button>
        <button
          onClick={tossCard}
          disabled={selectedCard === null}
          aria-label="Toss selected card"
          aria-disabled={selectedCard === null}>
          {getButtonLabel("Toss")}
        </button>
        <button onClick={addWildCard} aria-label="Add wildcard">
          {getButtonLabel("Wildcard")}
        </button>
        <button onClick={regroup} aria-label="Regroup cards">
          {getButtonLabel("Regroup")}
        </button>
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
