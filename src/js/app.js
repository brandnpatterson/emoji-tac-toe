/**
 * Tic Tac Toe Game
**/

import { forEach, winningCombos } from './utils';

const game = {
  cells: document.querySelectorAll('.cell'),
  start () {
    this.players = [
      {
        value: 'X',
        selection: [],
        secondArray: []
      },
      {
        value: 'O',
        selection: [],
        secondArray: []
      }
    ];
    this.board = [];
    this.turn = this.players[0];
    // custom forEach used for elements selected with querySelectorAll
    forEach(this.cells, (index, value) => {
      this.board.push('');
      value.innerHTML = this.board[index];
      value.dataset['clicked'] = 'false';
    });
  }
};

forEach (game.cells, (index, value) => {
  value.addEventListener('click', (e) => {
    const { board, players } = game;
    const player1 = players[0];
    const player2 = players[1];
    const selection = game.turn.selection;
    const secondArray = game.turn.secondArray;
    const data = e.target.dataset;

    if (data['clicked'] === 'false') {
      data['clicked'] = 'true';
      board.splice(index, 1, game.turn.value);
      e.target.innerHTML = board[index];
      game.turn = game.turn === player2 ? player1 : player2;
      selection.push(index);
      selection.sort((a, b) => a - b);

      // winningCombos.map((combo) => {

      // if selection includes any combos
      // end game declare winner

      //   if (contains(combo, selection) === true) {
      //     alert(`${game.turn.value} Wins!`);
      //     game.start();
      //   }
      //   game.turn = game.turn === player2 ? player1 : player2;
      // });
    }
  });
});
game.start();
