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
	
	var preGame = {
	  container: document.querySelector('.pre-game'),
	  playerOne: document.querySelector('.select-player-one'),
	  playerTwo: document.querySelector('.select-player-two'),
	  startGame: document.querySelector('.start-game')
	}; /**
	    * Emoji Tac Toe Game
	   **/
	
	var game = {
	  DOMboard: document.querySelector('.board'),
	  DOMcells: document.querySelectorAll('.cell'),
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
	  }
	};
	
	var players = [{
	  value: preGame.playerOne.value,
	  DOMwins: document.querySelector('.player-one-wins'),
	  wins: []
	}, {
	  value: preGame.playerTwo.value,
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
	  var container = preGame.container,
	      playerOne = preGame.playerOne,
	      playerTwo = preGame.playerTwo,
	      startGame = preGame.startGame;
	  var board = game.board,
	      DOMboard = game.DOMboard,
	      DOMcells = game.DOMcells;
	
	
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
	
	    container.classList.add('fade-out');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTI1YzJiZTU0OTY5ODZhMmNkMzYiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInByZUdhbWUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJzdGFydEdhbWUiLCJnYW1lIiwiRE9NYm9hcmQiLCJET01jZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2FyZCIsIm5ld0dhbWUiLCJ0dXJuIiwicGxheWVycyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic3BsaWNlIiwidmFsdWUiLCJET013aW5zIiwid2lucyIsImFkZFdpbiIsImFkZFZhbHVlVG9Cb2FyZCIsImJvYXJkSW5kZXgiLCJjaGVja0Zvcldpbm5lciIsImZpbmQiLCJjb21ibyIsInN3aXRjaFR1cm4iLCJ2aWV3IiwiZSIsImF0dGFjaExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRldGFjaExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyRE9NIiwiaW5kZXgiLCJjZWxsIiwiaW5uZXJIVE1MIiwiZGF0YXNldCIsIm1hcCIsInBsYXllciIsImNsYXNzTGlzdCIsImFkZCIsImRhdGEiLCJ0YXJnZXQiLCJib2FyZEl0ZW0iLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJldmVyeSIsInV0aWxzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJjYWxsIiwiaXNOb3RFbXB0eVN0cmluZyIsImVsIiwic29ydCIsImEiLCJiIiwid2lubmluZ0NvbWJvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVC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QURoRTtBQVpjLEVBQS9CLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTI1YzJiZTU0OTY5ODZhMmNkMzYiLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIEVtb2ppIFRhYyBUb2UgR2FtZVxuKiovXG5cbmltcG9ydCB7IGZvckVhY2gsIGlzTm90RW1wdHlTdHJpbmcsIHNvcnQsIHdpbm5pbmdDb21ib3MgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgcHJlR2FtZSA9IHtcbiAgY29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlLWdhbWUnKSxcbiAgcGxheWVyT25lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXBsYXllci1vbmUnKSxcbiAgcGxheWVyVHdvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXBsYXllci10d28nKSxcbiAgc3RhcnRHYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpXG59XG5cbmNvbnN0IGdhbWUgPSB7XG4gIERPTWJvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSxcbiAgRE9NY2VsbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyksXG4gIGJvYXJkOiBbXSxcbiAgbmV3R2FtZSAoKSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1swXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuRE9NY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmJvYXJkLnB1c2goJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ib2FyZC5zcGxpY2UoaSwgdGhpcy5ib2FyZC5sZW5ndGgsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICB2YWx1ZTogcHJlR2FtZS5wbGF5ZXJPbmUudmFsdWUsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtd2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogcHJlR2FtZS5wbGF5ZXJUd28udmFsdWUsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28td2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH1cbl07XG5cbmNvbnN0IGFkZFdpbiA9ICgpID0+IHtcbiAgZ2FtZS50dXJuLndpbnMucHVzaCgnd2luJyk7XG59O1xuXG5jb25zdCBhZGRWYWx1ZVRvQm9hcmQgPSAoYm9hcmRJbmRleCkgPT4ge1xuICBnYW1lLmJvYXJkLnNwbGljZShib2FyZEluZGV4LCAxLCBnYW1lLnR1cm4udmFsdWUpO1xufTtcblxuY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG5cbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgaWYgKGdhbWUudHVybiA9PT0gcGxheWVyc1swXSkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMV07XG4gIH0gZWxzZSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1swXTtcbiAgfVxufTtcblxuY29uc3QgdmlldyA9IChlKSA9PiB7XG4gIGNvbnN0IHsgY29udGFpbmVyLCBwbGF5ZXJPbmUsIHBsYXllclR3bywgc3RhcnRHYW1lIH0gPSBwcmVHYW1lO1xuICBjb25zdCB7IGJvYXJkLCBET01ib2FyZCwgRE9NY2VsbHMgfSA9IGdhbWU7XG5cbiAgY29uc3QgYXR0YWNoTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRE9NYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xuICB9O1xuXG4gIGNvbnN0IGRldGFjaExpc3RlbmVyID0gKCkgPT4ge1xuICAgIERPTWJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckRPTSA9ICgpID0+IHtcbiAgICBmb3JFYWNoKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgY2VsbCkgPT4ge1xuICAgICAgY2VsbC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICBjZWxsLmRhdGFzZXRbJ2NsaWNrZWQnXSA9ICdmYWxzZSc7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBsYXllcnNbMF0udmFsdWUgPSBwbGF5ZXJPbmUudmFsdWU7XG4gICAgcGxheWVyc1sxXS52YWx1ZSA9IHBsYXllclR3by52YWx1ZTtcblxuICAgIHBsYXllcnMubWFwKChwbGF5ZXIpID0+IHtcbiAgICAgIHBsYXllci5ET013aW5zLmlubmVySFRNTCA9IGAke3BsYXllci52YWx1ZX0gOiAke3BsYXllci53aW5zLmxlbmd0aH1gO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbmRlciAoZSkge1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgIGZvckVhY2ggKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgY2VsbCkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBjZWxsICYmIGRhdGFbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBib2FyZC5tYXAoKGJvYXJkSXRlbSwgYm9hcmRJbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChib2FyZEluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgYWRkVmFsdWVUb0JvYXJkKGJvYXJkSW5kZXgpO1xuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYm9hcmRbaW5kZXhdO1xuICAgICAgICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgIGRldGFjaExpc3RlbmVyKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICAgIGFkZFdpbigpO1xuICAgICAgICBnYW1lLnR1cm4uRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtnYW1lLnR1cm4udmFsdWV9IDogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICAgICAgZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGF0dGFjaExpc3RlbmVyKCk7XG4gICAgICB9LCA0NTApO1xuICAgIH0gZWxzZSBpZiAoYm9hcmQuZXZlcnkoaXNOb3RFbXB0eVN0cmluZykpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhbGVydCgn8J+YuCBXaW5zIScpO1xuICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICB9XG4gIH1cbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIGF0dGFjaExpc3RlbmVyKCk7XG59XG5cbnZpZXcoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5cbmNvbnN0IHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZvckVhY2ggKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gICAgfVxuICB9LFxuICBpc05vdEVtcHR5U3RyaW5nIChlbCkge1xuICAgIHJldHVybiBlbCAhPSAnJztcbiAgfSxcbiAgc29ydCAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==