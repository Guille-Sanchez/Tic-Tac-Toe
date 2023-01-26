function resetGame(setPlayer1, setPlayer2) {
  setPlayer1((prev) => ({
    ...prev,
    turn: true,
    position: [],
    winner: false,
    draw: false,
    reset: false,
  }));
  setPlayer2((prev) => ({
    ...prev,
    turn: false,
    position: [],
    winner: false,
    draw: false,
    reset: false,
  }));
}

export default resetGame;
