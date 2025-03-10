/* StAuth10244: I Jovain Chisholm, 000905188 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
 */
import React from "react";
import "./Card.css";

const Card = ({ suit, value, isPicked, onClick }) => {
  const suitColor = suit === "♥" || suit === "♦" ? "red" : "black";
  const isSmallScreen = window.innerWidth <= 480;

  return (
    <div
      className={`card ${isPicked ? "picked" : ""}`}
      onClick={onClick}
      aria-label={`${value} of ${suit}`}>
      <div className="card-content" style={{ color: suitColor }}>
        <div className="card-top">
          {value}
          {suit}
        </div>
        <div className="card-center">{suit}</div>
        <div className="card-bottom">
          {value}
          {suit}
        </div>
      </div>
    </div>
  );
};

export default Card;
