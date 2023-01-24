import React from "react";
import resetGame from "../resetGame";

function WinnerBanner({ winner1, setPlayer1, setPlayer2 }) {
  return (
    <>
      <div className="opacity"></div>
      <div className="winner">
        <div className="container-winner">
          <p>{`Player ${winner1 ? 1 : 2} won`}</p>
          <div
            onClick={() => {
              resetGame(setPlayer1, setPlayer2);
            }}
          >
            Restart Game
          </div>
        </div>
      </div>
    </>
  );
}

export default WinnerBanner;
