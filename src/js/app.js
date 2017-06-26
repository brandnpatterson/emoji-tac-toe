/**
 * Emoji Tac Toe Game
**/

import { forEach, isNotEmptyString, sort, winningCombos } from './utils';

const game = {
  DOMboard: document.querySelector('.board'),
  DOMcells: document.querySelectorAll('.cell'),
  newGame () {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.turn = players[0];
  }
};

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

const switchTurn = () => {
  game.turn = game.turn === players[0] ? players[1] : players[0];
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

const clearBoard = () => {
  const { board } = game;
  forEach(game.DOMcells, (index, cell) => {
    board.splice(index, board.length, '');
    cell.innerHTML = board[index];
    cell.dataset['clicked'] = 'false';
  });
};

const render = (e) => {
  game.newGame();
  const { board, DOMboard, DOMcells } = game;

  DOMboard.addEventListener('click', (e) => {
    const data = e.target.dataset;
    forEach (game.DOMcells, (index, cell) => {
      board.map((boardItem, boardOrder) => {
        if (e.target === cell && data['clicked'] === 'false') {
          if (boardOrder === index) {
            board.splice(boardOrder, 1, game.turn.value);
            e.target.innerHTML = board[index];
            data['clicked'] = 'true';
            switchTurn();
          }
        }
      });
    });
    if (checkForWinner()) {
      setTimeout(() =>{
        clearBoard();
        alert(`${game.turn.value} Wins!`);
      }, 450);
      switchTurn();
      game.turn.wins.push('win');
      game.turn.DOMwins.innerHTML = `${game.turn.value} : ${game.turn.wins.length}`;
    } else if (board.every(isNotEmptyString)) {
      clearBoard();
      setTimeout(() => {
        clearBoard();
        alert('😸 Wins!');
      }, 450);
    }
  });
  players.map((player) => {
    player.DOMwins.innerHTML = `${player.value} : ${player.wins.length}`;
  });
}

render();
