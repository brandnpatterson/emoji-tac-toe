/**
 * Emoji Tac Toe Game
**/

import { forEach, isNotEmptyString, sort, winningCombos } from './utils';

const setUpGame = {
  preGame: document.querySelector('.pre-game'),
  playerOne: document.querySelector('.select-player-one'),
  playerTwo: document.querySelector('.select-player-two'),
  startGame: document.querySelector('.start-game')
}

const game = {
  DOMboard: document.querySelector('.board'),
  DOMcells: document.querySelectorAll('.cell'),
  resetGame: document.querySelector('.reset-game'),
  board: [],
  newGame () {
    game.turn = players[0];
    for (var i = 0; i < this.DOMcells.length; i++) {
      if (this.board.length === 0) {
        this.board.push('');
      } else {
        this.board.splice(i, this.board.length, '');
      }
    }
    players.map(player => {
      player.wins = [];
    });
  }
};

const players = [
  {
    value: setUpGame.playerOne.value,
    DOMwins: document.querySelector('.player-one-wins'),
    wins: []
  },
  {
    value: setUpGame.playerTwo.value,
    DOMwins: document.querySelector('.player-two-wins'),
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
  if (game.turn === players[0]) {
    game.turn = players[1];
  } else {
    game.turn = players[0];
  }
};

const view = (e) => {
  const { preGame, playerOne, playerTwo, startGame } = setUpGame;
  const { board, DOMboard, DOMcells, resetGame } = game;

  const attachListener = () => {
    DOMboard.addEventListener('click', render);
  };

  const detachListener = () => {
    DOMboard.removeEventListener('click', render);
  };

  const clearDOM = () => {
    forEach(game.DOMcells, (index, cell) => {
      cell.innerHTML = board[index];
      cell.dataset['clicked'] = 'false';
    });
  };

  startGame.addEventListener('click', () => {
    players[0].value = playerOne.value;
    players[1].value = playerTwo.value;

    players.map((player) => {
      player.DOMwins.innerHTML = `${player.value} : ${player.wins.length}`;
    });

    preGame.classList.add('fade-out');
  });

  resetGame.addEventListener('click', () => {
    preGame.classList.remove('fade-out');
    game.newGame();
  });

  function render (e) {
    const data = e.target.dataset;
    forEach (game.DOMcells, (index, cell) => {
      if (e.target === cell && data['clicked'] === 'false') {
        board.map((boardItem, boardIndex) => {
          if (boardIndex === index) {
            addValueToBoard(boardIndex);
            e.target.innerHTML = board[index];
            data['clicked'] = 'true';
          }
        });
      }
    });
    if (checkForWinner()) {
      detachListener();
      setTimeout(() =>{
        alert(`${game.turn.value} Wins!`);
        addWin();
        game.turn.DOMwins.innerHTML = `${game.turn.value} : ${game.turn.wins.length}`;
        game.newGame();
        clearDOM();
        attachListener();
      }, 450);
    } else if (board.every(isNotEmptyString)) {
      setTimeout(() => {
        alert('😸 Wins!');
        game.newGame();
        clearDOM();
      }, 100);
    } else {
      switchTurn();
    }
  }
  game.newGame();
  attachListener();
}

view();
