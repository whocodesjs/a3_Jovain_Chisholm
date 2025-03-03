import React from "react";
import "./Deck.css";

const Deck = ({ cardsRemaining, onclick }) => {
  return (
    <div className="deck-container">
      {cardsRemaining > 0 ? (
        <div className="deck" onClick={onclick}>
          <div className="deck-back">Deck ({cardsRemaining})</div>
        </div>
      ) : (
        <div className="deck-empty">No cards remaining.</div>
      )}
    </div>
  );
};

export default Deck;
