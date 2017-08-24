/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utils = __webpack_require__(3);
	
	var setUpGame = {
	  preGame: document.querySelector('.pre-game'),
	  playerOne: document.querySelector('.select-player-one'),
	  playerTwo: document.querySelector('.select-player-two'),
	  startGame: document.querySelector('.start-game')
	}; /**
	    * Emoji Tac Toe Game
	   **/
	
	var game = {
	  DOMboard: document.querySelector('.board'),
	  DOMcells: document.querySelectorAll('.cell'),
	  resetGame: document.querySelector('.reset-game'),
	  board: [],
	  newGame: function newGame() {
	    game.turn = players[0];
	    for (var i = 0; i < this.DOMcells.length; i++) {
	      if (this.board.length === 0) {
	        this.board.push('');
	      } else {
	        this.board.splice(i, this.board.length, '');
	      }
	    }
	  },
	  reset: function reset() {
	    players.map(function (player) {
	      player.wins = [];
	    });
	  }
	};
	
	var players = [{
	  value: setUpGame.playerOne.value,
	  DOMwins: document.querySelector('.player-one-wins'),
	  wins: []
	}, {
	  value: setUpGame.playerTwo.value,
	  DOMwins: document.querySelector('.player-two-wins'),
	  wins: []
	}];
	
	var addWin = function addWin() {
	  game.turn.wins.push('win');
	};
	
	var addValueToBoard = function addValueToBoard(boardIndex) {
	  game.board.splice(boardIndex, 1, game.turn.value);
	};
	
	var checkForWinner = function checkForWinner() {
	  var board = game.board;
	
	
	  return _utils.winningCombos.find(function (combo) {
	    if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
	      return board[combo[0]];
	    } else {
	      return false;
	    }
	  });
	};
	
	var switchTurn = function switchTurn() {
	  if (game.turn === players[0]) {
	    game.turn = players[1];
	  } else {
	    game.turn = players[0];
	  }
	};
	
	var view = function view(e) {
	  var preGame = setUpGame.preGame,
	      playerOne = setUpGame.playerOne,
	      playerTwo = setUpGame.playerTwo,
	      startGame = setUpGame.startGame;
	  var board = game.board,
	      DOMboard = game.DOMboard,
	      DOMcells = game.DOMcells,
	      resetGame = game.resetGame;
	
	
	  var attachListener = function attachListener() {
	    DOMboard.addEventListener('click', render);
	  };
	
	  var detachListener = function detachListener() {
	    DOMboard.removeEventListener('click', render);
	  };
	
	  var clearDOM = function clearDOM() {
	    (0, _utils.forEach)(game.DOMcells, function (index, cell) {
	      cell.innerHTML = board[index];
	      cell.dataset['clicked'] = 'false';
	    });
	  };
	
	  startGame.addEventListener('click', function () {
	    players[0].value = playerOne.value;
	    players[1].value = playerTwo.value;
	
	    players.map(function (player) {
	      player.DOMwins.innerHTML = player.value + ' : ' + player.wins.length;
	    });
	
	    preGame.classList.add('fade-out');
	  });
	
	  resetGame.addEventListener('click', function () {
	    preGame.classList.remove('fade-out');
	    game.newGame();
	    game.reset();
	  });
	
	  function render(e) {
	    var data = e.target.dataset;
	    (0, _utils.forEach)(game.DOMcells, function (index, cell) {
	      if (e.target === cell && data['clicked'] === 'false') {
	        board.map(function (boardItem, boardIndex) {
	          if (boardIndex === index) {
	            addValueToBoard(boardIndex);
	            e.target.innerHTML = board[index];
	            if (data.clicked === 'false') {
	              setTimeout(function () {
	                data.clicked = 'true';
	              }, 0);
	            }
	          }
	        });
	      }
	    });
	    if (checkForWinner()) {
	      detachListener();
	      setTimeout(function () {
	        alert(game.turn.value + ' Wins!');
	        addWin();
	        game.turn.DOMwins.innerHTML = game.turn.value + ' : ' + game.turn.wins.length;
	        game.newGame();
	        clearDOM();
	        attachListener();
	      }, 450);
	    } else if (board.every(_utils.isNotEmptyString)) {
	      setTimeout(function () {
	        alert('😸 Wins!');
	        game.newGame();
	        clearDOM();
	      }, 100);
	    } else if (data.clicked === 'true') {
	      return;
	    } else if (data.clicked === 'false') {
	      switchTurn();
	    }
	  }
	  game.newGame();
	  attachListener();
	};
	
	view();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * General Utils
	**/
	
	var utils = module.exports = {
	  forEach: function forEach(array, callback, scope) {
	    for (var i = 0; i < array.length; i++) {
	      callback.call(scope, i, array[i]);
	    }
	  },
	  isNotEmptyString: function isNotEmptyString(el) {
	    return el != '';
	  },
	  sort: function sort(a, b) {
	    return a - b;
	  },
	
	  winningCombos: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjUxOWEyOGI0Nzc4ZjFmZGVmOTgiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInNldFVwR2FtZSIsInByZUdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJzdGFydEdhbWUiLCJnYW1lIiwiRE9NYm9hcmQiLCJET01jZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXNldEdhbWUiLCJib2FyZCIsIm5ld0dhbWUiLCJ0dXJuIiwicGxheWVycyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic3BsaWNlIiwicmVzZXQiLCJtYXAiLCJwbGF5ZXIiLCJ3aW5zIiwidmFsdWUiLCJET013aW5zIiwiYWRkV2luIiwiYWRkVmFsdWVUb0JvYXJkIiwiYm9hcmRJbmRleCIsImNoZWNrRm9yV2lubmVyIiwiZmluZCIsImNvbWJvIiwic3dpdGNoVHVybiIsInZpZXciLCJlIiwiYXR0YWNoTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiZGV0YWNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJET00iLCJpbmRleCIsImNlbGwiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZGF0YSIsInRhcmdldCIsImJvYXJkSXRlbSIsImNsaWNrZWQiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJldmVyeSIsInV0aWxzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJjYWxsIiwiaXNOb3RFbXB0eVN0cmluZyIsImVsIiwic29ydCIsImEiLCJiIiwid2lubmluZ0NvbWJvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7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RUFBcUI3QyxDQUFyQixFQUF3QjJDLE1BQU0zQyxDQUFOLENBQXhCO0FBQ0Q7QUFDRixJQUw0QjtBQU03QitDLG1CQU42Qiw0QkFNWEMsRUFOVyxFQU1QO0FBQ3BCLFlBQU9BLE1BQU0sRUFBYjtBQUNELElBUjRCO0FBUzdCQyxPQVQ2QixnQkFTdkJDLENBVHVCLEVBU3BCQyxDQVRvQixFQVNqQjtBQUNWLFlBQU9ELElBQUlDLENBQVg7QUFDRCxJQVg0Qjs7QUFZN0JDLGtCQUFlLENBQ2IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEYSxFQUNGLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREUsRUFDUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURULEVBQ29CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHBCLEVBQytCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRC9CLEVBQzBDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRDFDLEVBQ3FELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHJELEVBQ2dFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGhFO0FBWmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNTE5YTI4YjQ3NzhmMWZkZWY5OCIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogRW1vamkgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgaXNOb3RFbXB0eVN0cmluZywgc29ydCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBzZXRVcEdhbWUgPSB7XG4gIHByZUdhbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmUtZ2FtZScpLFxuICBwbGF5ZXJPbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcGxheWVyLW9uZScpLFxuICBwbGF5ZXJUd286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcGxheWVyLXR3bycpLFxuICBzdGFydEdhbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJylcbn1cblxuY29uc3QgZ2FtZSA9IHtcbiAgRE9NYm9hcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLFxuICBET01jZWxsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSxcbiAgcmVzZXRHYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtZ2FtZScpLFxuICBib2FyZDogW10sXG4gIG5ld0dhbWUgKCkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkRPTWNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5ib2FyZC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYm9hcmQuc3BsaWNlKGksIHRoaXMuYm9hcmQubGVuZ3RoLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXNldCAoKSB7XG4gICAgcGxheWVycy5tYXAocGxheWVyID0+IHtcbiAgICAgIHBsYXllci53aW5zID0gW107XG4gICAgfSlcbiAgfVxufTtcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIHZhbHVlOiBzZXRVcEdhbWUucGxheWVyT25lLnZhbHVlLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9LFxuICB7XG4gICAgdmFsdWU6IHNldFVwR2FtZS5wbGF5ZXJUd28udmFsdWUsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28td2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH1cbl07XG5cbmNvbnN0IGFkZFdpbiA9ICgpID0+IHtcbiAgZ2FtZS50dXJuLndpbnMucHVzaCgnd2luJyk7XG59O1xuXG5jb25zdCBhZGRWYWx1ZVRvQm9hcmQgPSAoYm9hcmRJbmRleCkgPT4ge1xuICBnYW1lLmJvYXJkLnNwbGljZShib2FyZEluZGV4LCAxLCBnYW1lLnR1cm4udmFsdWUpO1xufTtcblxuY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG5cbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgaWYgKGdhbWUudHVybiA9PT0gcGxheWVyc1swXSkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMV07XG4gIH0gZWxzZSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1swXTtcbiAgfVxufTtcblxuY29uc3QgdmlldyA9IChlKSA9PiB7XG4gIGNvbnN0IHsgcHJlR2FtZSwgcGxheWVyT25lLCBwbGF5ZXJUd28sIHN0YXJ0R2FtZSB9ID0gc2V0VXBHYW1lO1xuICBjb25zdCB7IGJvYXJkLCBET01ib2FyZCwgRE9NY2VsbHMsIHJlc2V0R2FtZSB9ID0gZ2FtZTtcblxuICBjb25zdCBhdHRhY2hMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XG4gIH07XG5cbiAgY29uc3QgZGV0YWNoTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRE9NYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRE9NID0gKCkgPT4ge1xuICAgIGZvckVhY2goZ2FtZS5ET01jZWxscywgKGluZGV4LCBjZWxsKSA9PiB7XG4gICAgICBjZWxsLmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgIGNlbGwuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgfTtcblxuICBzdGFydEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGxheWVyc1swXS52YWx1ZSA9IHBsYXllck9uZS52YWx1ZTtcbiAgICBwbGF5ZXJzWzFdLnZhbHVlID0gcGxheWVyVHdvLnZhbHVlO1xuXG4gICAgcGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7cGxheWVyLnZhbHVlfSA6ICR7cGxheWVyLndpbnMubGVuZ3RofWA7XG4gICAgfSk7XG5cbiAgICBwcmVHYW1lLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gIH0pO1xuXG4gIHJlc2V0R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcmVHYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gICAgZ2FtZS5uZXdHYW1lKCk7XG4gICAgZ2FtZS5yZXNldCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiByZW5kZXIgKGUpIHtcbiAgICBjb25zdCBkYXRhID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBmb3JFYWNoIChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIGNlbGwpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gY2VsbCAmJiBkYXRhWydjbGlja2VkJ10gPT09ICdmYWxzZScpIHtcbiAgICAgICAgYm9hcmQubWFwKChib2FyZEl0ZW0sIGJvYXJkSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoYm9hcmRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGFkZFZhbHVlVG9Cb2FyZChib2FyZEluZGV4KTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChkYXRhLmNsaWNrZWQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5jbGlja2VkID0gJ3RydWUnO1xuICAgICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgIGRldGFjaExpc3RlbmVyKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICAgIGFkZFdpbigpO1xuICAgICAgICBnYW1lLnR1cm4uRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtnYW1lLnR1cm4udmFsdWV9IDogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICAgICAgZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGF0dGFjaExpc3RlbmVyKCk7XG4gICAgICB9LCA0NTApO1xuICAgIH0gZWxzZSBpZiAoYm9hcmQuZXZlcnkoaXNOb3RFbXB0eVN0cmluZykpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhbGVydCgn8J+YuCBXaW5zIScpO1xuICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIGlmIChkYXRhLmNsaWNrZWQgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChkYXRhLmNsaWNrZWQgPT09ICdmYWxzZScpIHtcbiAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICB9XG4gIH1cbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIGF0dGFjaExpc3RlbmVyKCk7XG59XG5cbnZpZXcoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5cbmNvbnN0IHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZvckVhY2ggKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gICAgfVxuICB9LFxuICBpc05vdEVtcHR5U3RyaW5nIChlbCkge1xuICAgIHJldHVybiBlbCAhPSAnJztcbiAgfSxcbiAgc29ydCAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==