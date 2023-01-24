import React from "react";
import Square from "./Square";

function CreateTicTacToe({ setPlayer1, player1, setPlayer2, player2 }) {
  return [...Array(9)].map((x, index) => {
    return (
      <Square
        key={index}
        id={index}
        setPlayer1={setPlayer1}
        player1={player1}
        setPlayer2={setPlayer2}
        player2={player2}
      />
    );
  });
}

export default CreateTicTacToe;
