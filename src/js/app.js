/**
 * Emoji Tac Toe Game
**/

import { forEach, isNotEmptyString, sort, winningCombos } from './utils';

const game = {
  DOMboard: document.querySelector('.board'),
  DOMcells: document.querySelectorAll('.cell'),
  board: ['!', '!'],
  newGame () {
    game.turn = players[1];

    for (var i = 0; i < this.DOMcells.length; i++) {
      if (this.board.length === 0) {
        this.board.push('');
      } else {
        this.board.splice(i, this.board.length, '');
      }
    }
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

const addWin = () => {
  game.turn.wins.push('win');
};

const addValueToBoard = (boardIndex) => {
  game.board.splice(boardIndex, 1, game.turn.value);
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

const switchTurn = () => {
  if (game.turn === players[1]) {
    game.turn = players[0];
  } else {
    game.turn = players[1];
  }
};

const render = (e) => {
  game.newGame();

  const { board, DOMboard, DOMcells } = game;

  const clearDOM = () => {
    const { board } = game;

    forEach(game.DOMcells, (index, cell) => {
      cell.innerHTML = board[index];
      cell.dataset['clicked'] = 'false';
    });
  };

  DOMboard.addEventListener('click', listenForEvent);

  function listenForEvent (e) {
    const data = e.target.dataset;
    forEach (game.DOMcells, (index, cell) => {
      if (e.target === cell && data['clicked'] === 'false') {
        board.map((boardItem, boardIndex) => {
          if (boardIndex === index) {
            switchTurn();
            addValueToBoard(boardIndex);
            e.target.innerHTML = board[index];
            data['clicked'] = 'true';
          }
        });
      }
    });

    if (checkForWinner()) {
      setTimeout(() =>{
        alert(`${game.turn.value} Wins!`);
        addWin();
        game.turn.DOMwins.innerHTML = `${game.turn.value} : ${game.turn.wins.length}`;
        game.newGame();
        clearDOM();
      }, 450);
    } else if (board.every(isNotEmptyString)) {
      setTimeout(() => {
        alert('😸 Wins!');
        game.newGame();
        clearDOM();
      }, 100);
    }
  }

  players.map((player) => {
    player.DOMwins.innerHTML = `${player.value} : ${player.wins.length}`;
  });
}

render();
