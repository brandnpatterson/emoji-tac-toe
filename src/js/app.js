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
    this.turn = this.players[0].value;
    forEach(game.cells, (index, value) => {
      this.board.push('');
      value.innerHTML = game.board[index];
      value.dataset['clicked'] = 'false';
    });
  }
};

forEach(game.cells, (index, value) => {
  value.addEventListener('click', (e) => {
    const data = e.target.dataset;

    if (data['clicked'] === 'false') {
      data['clicked'] = 'true';
      game.board.splice(index, 1, game.turn);
      e.target.innerHTML = game.board[index];
      game.turn = game.turn === game.players[0].value ? game.players[1].value : game.players[0].value;
      console.log(game.turn);
    }
  });
});
game.start();

const results = () => {
}
results();

document.querySelector('.reset').addEventListener('click', () => game.start());
