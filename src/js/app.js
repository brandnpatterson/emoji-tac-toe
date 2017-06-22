/**
 * Tic Tac Toe
**/

import { forEach, winningCombos } from './utils';

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
    const data = e.target.dataset;

    if (data['clicked'] === 'false') {
      data['clicked'] = 'true';
      game.board.splice(index, 1, game.turn.value);
      e.target.innerHTML = game.board[index];
      game.turn = game.turn === player1 ? player2 : player1;
      game.turn.selection.push(index);
      console.log(game.turn.selection);
    }
  });
});
game.start();

document.querySelector('.reset').addEventListener('click', () => game.start());
