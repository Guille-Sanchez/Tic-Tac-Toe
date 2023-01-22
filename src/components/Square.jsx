import React, { useState } from "react";
import "./styles.css";

function filledSquare(
  setSquareContent,
  squareContent,
  setPlayer1,
  player1,
  setPlayer2,
  player2,
  e
) {
  if (squareContent === "") {
    if (player1.turn === true) {
      setSquareContent(() => player1.value);
      setPlayer1((prev) => ({
        ...prev,
        turn: false,
        position: [...prev.position, e.target.id].sort(),
      }));
      setPlayer2((prev) => ({ ...prev, turn: true }));
    } else {
      setSquareContent(() => player2.value);
      setPlayer1((prev) => ({ ...prev, turn: true }));
      setPlayer2((prev) => ({
        ...prev,
        turn: false,
        position: [...player2.position, e.target.id].sort(),
      }));
    }
  }
}

function Square({ setPlayer1, player1, setPlayer2, player2, id }) {
  const [squareContent, setSquareContent] = useState("");

  return (
    <div
      className="square"
      onClick={(e) => {
        filledSquare(
          setSquareContent,
          squareContent,
          setPlayer1,
          player1,
          setPlayer2,
          player2,
          e
        );
      }}
      id={id}
    >
      {squareContent}
    </div>
  );
}

export default Square;
