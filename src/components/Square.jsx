import React, { useEffect, useState } from "react";
import "./styles.css";
import { filledSquare } from "./filledSquare";

function Square({ setPlayer1, player1, setPlayer2, player2, id }) {
  const [squareContent, setSquareContent] = useState("");
  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      if (player1.reset || player2.reset) {
        console.log("reset");
        setSquareContent(() => "");
      }
    }
    return () => {
      subscribed = false;
    };
  }, [player1.reset, player2.reset]);

  return (
    <div
      className={`square ${
        squareContent === player1.value ? "cross" : "circle"
      }`}
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
