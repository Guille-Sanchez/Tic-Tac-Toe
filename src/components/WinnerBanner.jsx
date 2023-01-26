import React from "react";
import resetGame from "../resetGame";

function WinnerBanner({ player1, player2, setPlayer1, setPlayer2 }) {
  return (
    <>
      <div className="opacity"></div>
      <div className="winner">
        <div className="container-winner">
          {(player1.winner || player2.winner) && (
            <p>{`Player ${player1 ? 1 : 2} won`}</p>
          )}
          {player1.draw && <p>It is a draw</p>}
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
