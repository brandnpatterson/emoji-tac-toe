/**
 * Emoji Tac Toe Game
**/

import { forEach, sort, winningCombos } from './utils';

const render = (e) => {
  const { board, DOMcells, turn } = game;

  players.map((player) => {
    player.DOMwins.innerHTML = `${player.value} : ${player.wins.length}`;
  });
  
  forEach(DOMcells, (index, node) => {
    node.innerHTML = board[index];
    node.dataset['clicked'] = 'false';
  });

  if (checkForWinner()) {
    alert(`${turn.value} Wins!`);
    turn.wins.push('win');
    turn.DOMwins.innerHTML = `${turn.value} : ${turn.wins.length}`;
    game.newGame();
  } else if (board.every(isNotEmptyString)) {
    alert('😸 Wins!');
    game.newGame();
  }
}

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
    forEach(this.DOMcells, (index, node) => {
      this.board.push('');
    });
    render();
  }
};

game.DOMboard.addEventListener('click', (e) => {
  const { board } = game;
  const data = e.target.dataset;

  forEach (game.DOMcells, (index, node) => {

    board.map((boardItem, boardOrder) => {
      // if element matches a node in DOMcells & has dataset clicked of false
      if (e.target === node && data['clicked'] === 'false') {
        // if the boardIndex matches the index of the DOMcells
        if (boardOrder === index) {
          board.splice(boardOrder, 1, game.turn.value);
          e.target.innerHTML = board[index];
          data['clicked'] = 'true';
        }
      }
    });
  });
  switchTurn();
});

const isNotEmptyString = (el) => {
  return el != '';
}

const switchTurn = () => {
  game.turn = game.turn === players[1] ? players[0] : players[1];
};

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

game.newGame();
