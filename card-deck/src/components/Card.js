import React from "react";
import "./Card.css";

const Card = ({ suit, value, isPicked, onClick }) => {
  const suitColor = suit === "♥" || suit === "♦" ? "red" : "black";

  return (
    <div className={`card ${isPicked ? "picked" : ""}`} onClick={onClick}>
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
