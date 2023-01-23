export const checkIfWinner = (subscribed, player1, player2) => {
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
        if (player2.turn) {
          if (player1.position.includes(number)) {
            count += 1;
            if (count === 3) {
              console.log("nice 1");
            }
          }
        } else {
          if (player2.position.includes(number)) {
            count += 1;
            if (count === 3) {
              console.log("nice 2");
            }
          }
        }
      });
    });
  }
};
