/* StAuth10244: I Jovain Chisholm, 000905188 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
 */
import React, { useEffect, useState } from "react";
import "./Deck.css";

const Deck = ({ cardsRemaining, onClick }) => {
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

  const displayText =
    screenWidth <= 480 ? `(${cardsRemaining})` : `Deck (${cardsRemaining})`;

  return (
    <div className="deck-container">
      {cardsRemaining > 0 ? (
        <div
          className="deck"
          onClick={onClick}
          aria-label={`Draw from deck with ${cardsRemaining} cards remaining`}>
          <div className="deck-back">{displayText}</div>
        </div>
      ) : (
        <div className="empty-deck" aria-label="No cards remaining">
          {screenWidth <= 480 ? "Empty" : "No cards remaining."}
        </div>
      )}
    </div>
  );
};

export default Deck;
