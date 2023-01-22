import "./App.css";
import Square from "./components/Square";
import Choices from "./components/Choices";
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
    const wonCombinations = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];
    if (subscribed) {
      wonCombinations.forEach((array) => {
        let count = 0;
        array.forEach((number) => {
          if (player1.position.includes(number)) {
            count += 1;
            if (count === 3) {
              console.log("nice");
            }
          }
        });
      });
    }
    return () => {
      subscribed = false;
    };
  }, [player1.position, player2.position]);

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
