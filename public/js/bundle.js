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
	  });
	
	  function render(e) {
	    var data = e.target.dataset;
	    (0, _utils.forEach)(game.DOMcells, function (index, cell) {
	      if (e.target === cell && data['clicked'] === 'false') {
	        board.map(function (boardItem, boardIndex) {
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
	    } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjg1ZmFlOGNiYzA5ZDRjNTJlMTYiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInNldFVwR2FtZSIsInByZUdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJzdGFydEdhbWUiLCJnYW1lIiwiRE9NYm9hcmQiLCJET01jZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXNldEdhbWUiLCJib2FyZCIsIm5ld0dhbWUiLCJ0dXJuIiwicGxheWVycyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic3BsaWNlIiwibWFwIiwicGxheWVyIiwid2lucyIsInZhbHVlIiwiRE9Nd2lucyIsImFkZFdpbiIsImFkZFZhbHVlVG9Cb2FyZCIsImJvYXJkSW5kZXgiLCJjaGVja0Zvcldpbm5lciIsImZpbmQiLCJjb21ibyIsInN3aXRjaFR1cm4iLCJ2aWV3IiwiZSIsImF0dGFjaExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRldGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyRE9NIiwiaW5kZXgiLCJjZWxsIiwiaW5uZXJIVE1MIiwiZGF0YXNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImRhdGEiLCJ0YXJnZXQiLCJib2FyZEl0ZW0iLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJldmVyeSIsInV0aWxzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJjYWxsIiwiaXNOb3RFbXB0eVN0cmluZyIsImVsIiwic29ydCIsImEiLCJiIiwid2lubmluZ0NvbWJvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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RUFBTyxDQUFQLENBRGEsRUFDRixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURFLEVBQ1MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEVCxFQUNvQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURwQixFQUMrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQvQixFQUMwQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQxQyxFQUNxRCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURyRCxFQUNnRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURoRTtBQVpjLEVBQS9CLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjg1ZmFlOGNiYzA5ZDRjNTJlMTYiLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIEVtb2ppIFRhYyBUb2UgR2FtZVxuKiovXG5cbmltcG9ydCB7IGZvckVhY2gsIGlzTm90RW1wdHlTdHJpbmcsIHNvcnQsIHdpbm5pbmdDb21ib3MgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3Qgc2V0VXBHYW1lID0ge1xuICBwcmVHYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlLWdhbWUnKSxcbiAgcGxheWVyT25lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXBsYXllci1vbmUnKSxcbiAgcGxheWVyVHdvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXBsYXllci10d28nKSxcbiAgc3RhcnRHYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpXG59XG5cbmNvbnN0IGdhbWUgPSB7XG4gIERPTWJvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSxcbiAgRE9NY2VsbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyksXG4gIHJlc2V0R2FtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWdhbWUnKSxcbiAgYm9hcmQ6IFtdLFxuICBuZXdHYW1lICgpIHtcbiAgICBnYW1lLnR1cm4gPSBwbGF5ZXJzWzBdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ET01jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYm9hcmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJvYXJkLnNwbGljZShpLCB0aGlzLmJvYXJkLmxlbmd0aCwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgICBwbGF5ZXJzLm1hcChwbGF5ZXIgPT4ge1xuICAgICAgcGxheWVyLndpbnMgPSBbXTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIHZhbHVlOiBzZXRVcEdhbWUucGxheWVyT25lLnZhbHVlLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9LFxuICB7XG4gICAgdmFsdWU6IHNldFVwR2FtZS5wbGF5ZXJUd28udmFsdWUsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28td2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH1cbl07XG5cbmNvbnN0IGFkZFdpbiA9ICgpID0+IHtcbiAgZ2FtZS50dXJuLndpbnMucHVzaCgnd2luJyk7XG59O1xuXG5jb25zdCBhZGRWYWx1ZVRvQm9hcmQgPSAoYm9hcmRJbmRleCkgPT4ge1xuICBnYW1lLmJvYXJkLnNwbGljZShib2FyZEluZGV4LCAxLCBnYW1lLnR1cm4udmFsdWUpO1xufTtcblxuY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG5cbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgaWYgKGdhbWUudHVybiA9PT0gcGxheWVyc1swXSkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMV07XG4gIH0gZWxzZSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1swXTtcbiAgfVxufTtcblxuY29uc3QgdmlldyA9IChlKSA9PiB7XG4gIGNvbnN0IHsgcHJlR2FtZSwgcGxheWVyT25lLCBwbGF5ZXJUd28sIHN0YXJ0R2FtZSB9ID0gc2V0VXBHYW1lO1xuICBjb25zdCB7IGJvYXJkLCBET01ib2FyZCwgRE9NY2VsbHMsIHJlc2V0R2FtZSB9ID0gZ2FtZTtcblxuICBjb25zdCBhdHRhY2hMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XG4gIH07XG5cbiAgY29uc3QgZGV0YWNoTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRE9NYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRE9NID0gKCkgPT4ge1xuICAgIGZvckVhY2goZ2FtZS5ET01jZWxscywgKGluZGV4LCBjZWxsKSA9PiB7XG4gICAgICBjZWxsLmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgIGNlbGwuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgfTtcblxuICBzdGFydEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGxheWVyc1swXS52YWx1ZSA9IHBsYXllck9uZS52YWx1ZTtcbiAgICBwbGF5ZXJzWzFdLnZhbHVlID0gcGxheWVyVHdvLnZhbHVlO1xuXG4gICAgcGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7cGxheWVyLnZhbHVlfSA6ICR7cGxheWVyLndpbnMubGVuZ3RofWA7XG4gICAgfSk7XG5cbiAgICBwcmVHYW1lLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gIH0pO1xuXG4gIHJlc2V0R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcmVHYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gICAgZ2FtZS5uZXdHYW1lKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbmRlciAoZSkge1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgIGZvckVhY2ggKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgY2VsbCkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBjZWxsICYmIGRhdGFbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBib2FyZC5tYXAoKGJvYXJkSXRlbSwgYm9hcmRJbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChib2FyZEluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgYWRkVmFsdWVUb0JvYXJkKGJvYXJkSW5kZXgpO1xuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYm9hcmRbaW5kZXhdO1xuICAgICAgICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgIGRldGFjaExpc3RlbmVyKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICAgIGFkZFdpbigpO1xuICAgICAgICBnYW1lLnR1cm4uRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtnYW1lLnR1cm4udmFsdWV9IDogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICAgICAgZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGF0dGFjaExpc3RlbmVyKCk7XG4gICAgICB9LCA0NTApO1xuICAgIH0gZWxzZSBpZiAoYm9hcmQuZXZlcnkoaXNOb3RFbXB0eVN0cmluZykpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhbGVydCgn8J+YuCBXaW5zIScpO1xuICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICB9XG4gIH1cbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIGF0dGFjaExpc3RlbmVyKCk7XG59XG5cbnZpZXcoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5cbmNvbnN0IHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZvckVhY2ggKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gICAgfVxuICB9LFxuICBpc05vdEVtcHR5U3RyaW5nIChlbCkge1xuICAgIHJldHVybiBlbCAhPSAnJztcbiAgfSxcbiAgc29ydCAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==