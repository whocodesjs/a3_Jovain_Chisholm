import React from "react";
import "./Deck.css";

const Deck = ({ cardsRemaining, onClick }) => {
  return (
    <div className="deck-container">
      {cardsRemaining > 0 ? (
        <div className="deck" onClick={onClick}>
          <div className="deck-back">Deck ({cardsRemaining})</div>
        </div>
      ) : (
        <div className="empty-deck">No cards remaining.</div>
      )}
    </div>
  );
};

export default Deck;
