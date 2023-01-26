import "./App.css";
import Choices from "./components/Choices";
import { checkIfWinner } from "./checkIfWinner";
import { useEffect, useState } from "react";
import WinnerBanner from "./components/WinnerBanner";
import CreateTicTacToe from "./components/CreateTicTacToe";

function App() {
  const [player1, setPlayer1] = useState({
    value: "\u00D7",
    turn: true,
    position: [],
    winner: false,
    draw: false,
    reset: false,
  });
  const [player2, setPlayer2] = useState({
    value: "\u2B24",
    turn: false,
    position: [],
    winner: false,
    draw: false,
    reset: false,
  });

  useEffect(() => {
    let subscribed = true;
    if (
      player1.winner === false &&
      player2.winner === false &&
      player1.draw === false &&
      subscribed
    ) {
      checkIfWinner(player1, player2, setPlayer1, setPlayer2);
    }
    return () => {
      subscribed = false;
    };
  }, [player1, player2]);

  return (
    <div className="App">
      <h1 style={{ color: "#F9FEFF" }}>Tic-Tac-Toe</h1>
      <div className="container">
        <CreateTicTacToe
          setPlayer1={setPlayer1}
          player1={player1}
          setPlayer2={setPlayer2}
          player2={player2}
        />
      </div>
      <Choices turn1={player1.turn} turn2={player2.turn} />
      {(player1.winner || player2.winner || player1.draw) && (
        <WinnerBanner
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
        />
      )}
    </div>
  );
}

export default App;
