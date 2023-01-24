import { filledSquare } from "./components/filledSquare";

function resetGame(setPlayer1, setPlayer2) {
  setPlayer1((prev) => ({
    ...prev,
    turn: true,
    position: [],
    winner: false,
  }));
  setPlayer2((prev) => ({
    ...prev,
    turn: false,
    position: [],
    winner: false,
  }));
}

export default resetGame;
