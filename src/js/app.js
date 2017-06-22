/**
 * Tic Tac Toe
**/

import { forEach, winningCombos } from './utils';

Array.prototype.compare = function(testArr) {
  if (this.length != testArr.length) return false;
  for (var i = 0; i < testArr.length; i++) {
    if (this[i].compare) {
      if (!this[i].compare(testArr[i])) return false;
    }
    else if (this[i] !== testArr[i]) return false;
  }
  return true;
}


const game = {
  cells: document.querySelectorAll('.cell'),
  players: [
    {
      value: 'X',
      selection: []
    },
    {
      value: 'O',
      selection: []
    }
  ],
  start () {
    this.board = [];
    this.turn = this.players[0];
    forEach(game.cells, (index, value) => {
      this.board.push('');
      value.innerHTML = game.board[index];
      value.dataset['clicked'] = 'false';
    });
  }
};

forEach(game.cells, (index, value) => {
  value.addEventListener('click', (e) => {
    const player1 = game.players[0];
    const player2 = game.players[1];
    const selection = game.turn.selection;
    const data = e.target.dataset;

    if (data['clicked'] === 'false') {
      data['clicked'] = 'true';
      game.board.splice(index, 1, game.turn.value);
      e.target.innerHTML = game.board[index];
      selection.push(index);
      selection.sort((a, b) => a - b);
      if (selection.compare([0, 3, 6]) === true) {
        alert(`${game.turn.value} Wins!`);
        game.start();
      };
      game.turn = game.turn === player1 ? player2 : player1;
    }
  });
});
game.start();

document.querySelector('.reset').addEventListener('click', () => game.start());
