import React from "react";

function Choices({ turn1, turn2 }) {
  return (
    <div className="choices">
      <div className={`cross ${turn1 === true ? "turn1" : ""}`}>&#215;</div>
      <div className={`circle ${turn2 === true ? "turn2" : ""}`}>&#x2B24;</div>
    </div>
  );
}

export default Choices;
