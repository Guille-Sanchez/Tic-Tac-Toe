import "./App.css";
import Square from "./components/Square";
import Choices from "./components/Choices";
import { checkIfWinner } from "./checkIfWinner";
import { useEffect, useState } from "react";

function App() {
  const [player1, setPlayer1] = useState({
    value: "\u00D7",
    turn: true,
    position: [],
  });
  const [player2, setPlayer2] = useState({
    value: "\u2B24",
    turn: false,
    position: [],
  });
  const [addClass, setAddClass] = useState("");

  useEffect(() => {
    let subscribed = true;
    checkIfWinner(subscribed, player1, player2);
    return () => {
      subscribed = false;
    };
  }, [player1, player2]);

  return (
    <div className="App">
      <div className="container">
        {[...Array(9)].map((x, index) => {
          return (
            <Square
              key={index}
              id={index}
              setPlayer1={setPlayer1}
              player1={player1}
              setPlayer2={setPlayer2}
              player2={player2}
              addClass={addClass}
              setAddClass={setAddClass}
            />
          );
        })}
      </div>
      <Choices />
    </div>
  );
}

export default App;
