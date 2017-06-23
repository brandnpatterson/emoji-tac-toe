/**
 * Tic Tac Toe Game
**/

import _ from 'underscore';
import { forEach, winningCombos } from './utils';

const game = {
  cells: document.querySelectorAll('.cell'),
  DOMboard: document.querySelectorAll('.board'),
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
  start () {
    this.players.map((player) => {
      player.selection = [];
    });
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
    const selection = game.turn.selection;
    const data = e.target.dataset;

    if (data['clicked'] === 'false') {
      data['clicked'] = 'true';
      board.splice(index, 1, game.turn.value);
      e.target.innerHTML = board[index];
      game.turn = game.turn === players[1] ? players[0] : players[1];
      selection.push(index);
      selection.sort((a, b) => a - b);
    }
    if (checkForWinner()) {
      game.turn = game.turn === players[1] ? players[0] : players[1];
      alert(`${game.turn.value} Wins!`);
      game.turn.wins.push('win');
      game.turn.DOMwins.innerHTML = `${game.turn.value} Wins: ${game.turn.wins.length}`;
      game.start();
    }
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

game.start();
