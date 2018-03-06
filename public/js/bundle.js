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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * General Utils
	**/
	
	var utils = {
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
	
	exports.default = utils;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWEwOTVjZGI2Zjc0NjVkMmExYjIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInNldFVwR2FtZSIsInByZUdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJzdGFydEdhbWUiLCJnYW1lIiwiRE9NYm9hcmQiLCJET01jZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXNldEdhbWUiLCJib2FyZCIsIm5ld0dhbWUiLCJ0dXJuIiwicGxheWVycyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic3BsaWNlIiwicmVzZXQiLCJtYXAiLCJwbGF5ZXIiLCJ3aW5zIiwidmFsdWUiLCJET013aW5zIiwiYWRkV2luIiwiYWRkVmFsdWVUb0JvYXJkIiwiYm9hcmRJbmRleCIsImNoZWNrRm9yV2lubmVyIiwiZmluZCIsImNvbWJvIiwic3dpdGNoVHVybiIsInZpZXciLCJlIiwiYXR0YWNoTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiZGV0YWNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJET00iLCJpbmRleCIsImNlbGwiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZGF0YSIsInRhcmdldCIsImJvYXJkSXRlbSIsImNsaWNrZWQiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJldmVyeSIsInV0aWxzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImNhbGwiLCJpc05vdEVtcHR5U3RyaW5nIiwiZWwiLCJzb3J0IiwiYSIsImIiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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eEI7QUFDRDtBQUNGLElBTFc7QUFNWjZDLG1CQU5ZLDRCQU1NQyxFQU5OLEVBTVU7QUFDcEIsWUFBT0EsTUFBTSxFQUFiO0FBQ0QsSUFSVztBQVNaQyxPQVRZLGdCQVNOQyxDQVRNLEVBU0hDLENBVEcsRUFTQTtBQUNWLFlBQU9ELElBQUlDLENBQVg7QUFDRCxJQVhXOztBQVlaQyxrQkFBZSxDQUNiLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGEsRUFDRixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURFLEVBQ1MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEVCxFQUNvQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURwQixFQUMrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQvQixFQUMwQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQxQyxFQUNxRCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURyRCxFQUNnRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURoRTtBQVpILEVBQWQ7O21CQWlCZVgsSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YTA5NWNkYjZmNzQ2NWQyYTFiMiIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogRW1vamkgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgaXNOb3RFbXB0eVN0cmluZywgc29ydCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBzZXRVcEdhbWUgPSB7XG4gIHByZUdhbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmUtZ2FtZScpLFxuICBwbGF5ZXJPbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcGxheWVyLW9uZScpLFxuICBwbGF5ZXJUd286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcGxheWVyLXR3bycpLFxuICBzdGFydEdhbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJylcbn1cblxuY29uc3QgZ2FtZSA9IHtcbiAgRE9NYm9hcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLFxuICBET01jZWxsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSxcbiAgcmVzZXRHYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtZ2FtZScpLFxuICBib2FyZDogW10sXG4gIG5ld0dhbWUgKCkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkRPTWNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5ib2FyZC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYm9hcmQuc3BsaWNlKGksIHRoaXMuYm9hcmQubGVuZ3RoLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXNldCAoKSB7XG4gICAgcGxheWVycy5tYXAocGxheWVyID0+IHtcbiAgICAgIHBsYXllci53aW5zID0gW107XG4gICAgfSlcbiAgfVxufTtcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIHZhbHVlOiBzZXRVcEdhbWUucGxheWVyT25lLnZhbHVlLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9LFxuICB7XG4gICAgdmFsdWU6IHNldFVwR2FtZS5wbGF5ZXJUd28udmFsdWUsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28td2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH1cbl07XG5cbmNvbnN0IGFkZFdpbiA9ICgpID0+IHtcbiAgZ2FtZS50dXJuLndpbnMucHVzaCgnd2luJyk7XG59O1xuXG5jb25zdCBhZGRWYWx1ZVRvQm9hcmQgPSAoYm9hcmRJbmRleCkgPT4ge1xuICBnYW1lLmJvYXJkLnNwbGljZShib2FyZEluZGV4LCAxLCBnYW1lLnR1cm4udmFsdWUpO1xufTtcblxuY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG5cbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgaWYgKGdhbWUudHVybiA9PT0gcGxheWVyc1swXSkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMV07XG4gIH0gZWxzZSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1swXTtcbiAgfVxufTtcblxuY29uc3QgdmlldyA9IChlKSA9PiB7XG4gIGNvbnN0IHsgcHJlR2FtZSwgcGxheWVyT25lLCBwbGF5ZXJUd28sIHN0YXJ0R2FtZSB9ID0gc2V0VXBHYW1lO1xuICBjb25zdCB7IGJvYXJkLCBET01ib2FyZCwgRE9NY2VsbHMsIHJlc2V0R2FtZSB9ID0gZ2FtZTtcblxuICBjb25zdCBhdHRhY2hMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XG4gIH07XG5cbiAgY29uc3QgZGV0YWNoTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRE9NYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRE9NID0gKCkgPT4ge1xuICAgIGZvckVhY2goZ2FtZS5ET01jZWxscywgKGluZGV4LCBjZWxsKSA9PiB7XG4gICAgICBjZWxsLmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgIGNlbGwuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgfTtcblxuICBzdGFydEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGxheWVyc1swXS52YWx1ZSA9IHBsYXllck9uZS52YWx1ZTtcbiAgICBwbGF5ZXJzWzFdLnZhbHVlID0gcGxheWVyVHdvLnZhbHVlO1xuXG4gICAgcGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7cGxheWVyLnZhbHVlfSA6ICR7cGxheWVyLndpbnMubGVuZ3RofWA7XG4gICAgfSk7XG5cbiAgICBwcmVHYW1lLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gIH0pO1xuXG4gIHJlc2V0R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcmVHYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gICAgZ2FtZS5uZXdHYW1lKCk7XG4gICAgZ2FtZS5yZXNldCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiByZW5kZXIgKGUpIHtcbiAgICBjb25zdCBkYXRhID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBmb3JFYWNoIChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIGNlbGwpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gY2VsbCAmJiBkYXRhWydjbGlja2VkJ10gPT09ICdmYWxzZScpIHtcbiAgICAgICAgYm9hcmQubWFwKChib2FyZEl0ZW0sIGJvYXJkSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoYm9hcmRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGFkZFZhbHVlVG9Cb2FyZChib2FyZEluZGV4KTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChkYXRhLmNsaWNrZWQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5jbGlja2VkID0gJ3RydWUnO1xuICAgICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgIGRldGFjaExpc3RlbmVyKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICAgIGFkZFdpbigpO1xuICAgICAgICBnYW1lLnR1cm4uRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtnYW1lLnR1cm4udmFsdWV9IDogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICAgICAgZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGF0dGFjaExpc3RlbmVyKCk7XG4gICAgICB9LCA0NTApO1xuICAgIH0gZWxzZSBpZiAoYm9hcmQuZXZlcnkoaXNOb3RFbXB0eVN0cmluZykpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhbGVydCgn8J+YuCBXaW5zIScpO1xuICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIGlmIChkYXRhLmNsaWNrZWQgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChkYXRhLmNsaWNrZWQgPT09ICdmYWxzZScpIHtcbiAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICB9XG4gIH1cbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIGF0dGFjaExpc3RlbmVyKCk7XG59XG5cbnZpZXcoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5cbmNvbnN0IHV0aWxzID0ge1xuICBmb3JFYWNoIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICAgIH1cbiAgfSxcbiAgaXNOb3RFbXB0eVN0cmluZyAoZWwpIHtcbiAgICByZXR1cm4gZWwgIT0gJyc7XG4gIH0sXG4gIHNvcnQgKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==