/**
 * Emoji Tac Toe Game
**/

import { forEach, match, sort, winningCombos } from './utils';

const players = [
  {
    value: '🦄',
    DOMwins: document.querySelector('.x-wins'),
    wins: []
  },
  {
    value: '💩',
    DOMwins: document.querySelector('.o-wins'),
    wins: []
  }
];

const game = {
  DOMboard: document.querySelector('.board'),
  DOMcells: document.querySelectorAll('.cell'),
  newGame () {
    this.board = [];
    this.turn = players[0];
    // custom forEach used for elements selected with querySelectorAll
    forEach(this.DOMcells, (index, value) => {
      this.board.push('');
      value.innerHTML = this.board[index];
      value.dataset['clicked'] = 'false';
    });
    players.map((player) => {
      player.DOMwins.innerHTML = `${player.value} : ${player.wins.length}`;
    });
  }
};
game.newGame();

game.DOMboard.addEventListener('click', (e) => {
  const { board } = game;
  const data = e.target.dataset;
  const switchTurn = () => {
    game.turn = game.turn === players[1] ? players[0] : players[1];
  };
  forEach (game.DOMcells, (index, node) => {
    board.map((boardItem, boardOrder) => {
      // if element matches a node in DOMcells & has dataset clicked of false
      if (match(e.target, node) && match(data['clicked'], 'false')) {
        // if the boardIndex matches the index of the DOMcells
        if (match(boardOrder, index)) {
          board.splice(boardOrder, 1, game.turn.value);
          e.target.innerHTML = board[index];
          data['clicked'] = 'true';
          switchTurn();
        }
      }
    });
  });
  if (checkForWinner()) {
    switchTurn();
    alert(`${game.turn.value} Wins!`);
    game.turn.wins.push('win');
    game.turn.DOMwins.innerHTML = `${game.turn.value} : ${game.turn.wins.length}`;
    game.newGame();
  } else if (board.every(isNotEmptyString)) {
    switchTurn();
    alert('😸 Wins!');
    game.newGame();
  }
});

const checkForWinner = () => {
  const { board } = game;
  return winningCombos.find((combo) => {
    if (match(board[combo[0]], board[combo[1]]) && match(board[combo[1]], board[combo[2]])) {
      return board[combo[0]];
    } else {
      return false;
    }
  });
};

const isNotEmptyString = (el) => {
  return el != '';
}
