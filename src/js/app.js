/**
 * Tic Tac Toe Game
**/

import { forEach, winningCombos } from './utils';

const game = {
  init () {
    this.cacheDOM(),
    this.newGame()
  },
  cacheDOM () {
    this.DOMcells = document.querySelectorAll('.cell');
    this.DOMboard = document.querySelector('.board');
  },
  players: [
    {
      value: 'X',
      selection: [],
      DOMwins: document.querySelector('.x-wins'),
      wins: []
    },
    {
      value: 'O',
      selection: [],
      DOMwins: document.querySelector('.o-wins'),
      wins: []
    }
  ],
  newGame () {
    this.players.map((player) => {
      player.selection = [];
    });
    this.board = [];
    this.turn = this.players[0];
    // custom forEach used for elements selected with querySelectorAll
    forEach(this.DOMcells, (index, value) => {
      this.board.push('');
      value.innerHTML = this.board[index];
      value.dataset['clicked'] = 'false';
    });
  }
};
game.init();

game.DOMboard.addEventListener('click', (e) => {
  const { board, players } = game;
  const selection = game.turn.selection;
  const data = e.target.dataset;

  forEach (game.DOMcells, (index, node) => {
    board.map((cell, boardIndex) => {

      // if node === e.target
      // if the index of the node ===
      const matchExactly = () => {
        if (node === e.target && index === boardIndex && data['clicked'] === 'false') {
          return true;
        }
      };

      if (matchExactly()) {
        data['clicked'] = 'true';
        board.splice(boardIndex, 1, game.turn.value);
        selection.push(index);
        selection.sort((a, b) => a - b);
        e.target.innerHTML = board[index];
        game.turn = game.turn === players[1] ? players[0] : players[1];

        if (checkForWinner()) {
          game.turn = game.turn === players[1] ? players[0] : players[1];
          alert(`${game.turn.value} Wins!`);
          game.turn.wins.push('win');
          game.turn.DOMwins.innerHTML = `${game.turn.value} Wins: ${game.turn.wins.length}`;
          game.newGame();
        }
      }
    });
  });
});

const checkForWinner = () => {
  const { board } = game;
  return winningCombos.find((combo) => {
    if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      return board[combo[0]];
    } else {
      return false;
    }
  });
};
