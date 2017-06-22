/**
 * Tic Tac Toe
**/

const playerOne = 'X';
const playerTwo = 'O';
const cellNumbers = 9;
const forEach = (array, callback, scope) => {
  for (let i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

const state = {
  emptyBoard () {
    this.board = [];
    for (let i = 0; i < cellNumbers; i++) {
      this.board.push('');
    }
  },
  currentTurnValue: playerOne,
  board: []
};
state.emptyBoard();

const cells = document.querySelectorAll('.cell');

forEach(cells, (index, value) => {
  value.addEventListener('click', (e) => {
    if (e.target.dataset['clicked'] === 'false') {
      e.target.dataset['clicked'] = 'true';
      state.board.splice(index, 1, state.currentTurnValue);
      e.target.innerHTML = state.board[index];
      state.currentTurnValue = state.currentTurnValue === playerOne ? playerTwo : playerOne;
    }
  });
});

const reset = () => {
  state.emptyBoard();
  forEach(cells, (index, value) => {
    value.innerHTML = state.board[index];
    value.dataset['clicked'] = 'false';
  });
}

document.querySelector('.reset').addEventListener('click', reset);

// 1. Reset game
// 2. Check for winner and report to view





















// function checkForWinner () {
//   const winningCombos = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
//   ];
//   return winningCombos.find(function (combo) {
//     const cells = state.board;
//     if (cells[combo[0]] === cells[combo[1]] && cells[combo[1]] === cells[combo[2]]) {
//       return cells[combo[0]];
//       console.log(cells);
//     } else {
//       return false;
//     }
//   });
// }
// checkForWinner();
