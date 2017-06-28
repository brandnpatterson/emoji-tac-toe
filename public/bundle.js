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
	
	var game = {
	  DOMboard: document.querySelector('.board'),
	  DOMcells: document.querySelectorAll('.cell'),
	  board: [],
	  newGame: function newGame() {
	    game.turn = players[1];
	
	    for (var i = 0; i < this.DOMcells.length; i++) {
	      if (this.board.length === 0) {
	        this.board.push('');
	      } else {
	        this.board.splice(i, this.board.length, '');
	      }
	    }
	  }
	}; /**
	    * Emoji Tac Toe Game
	   **/
	
	var players = [{
	  value: '🦄',
	  DOMwins: document.querySelector('.player-one-wins'),
	  wins: []
	}, {
	  value: '💩',
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
	  if (game.turn === players[1]) {
	    game.turn = players[0];
	  } else {
	    game.turn = players[1];
	  }
	};
	
	var view = function view(e) {
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
	
	  players.map(function (player) {
	    player.DOMwins.innerHTML = player.value + ' : ' + player.wins.length;
	  });
	
	  function render(e) {
	    var data = e.target.dataset;
	    (0, _utils.forEach)(game.DOMcells, function (index, cell) {
	      if (e.target === cell && data['clicked'] === 'false') {
	        board.map(function (boardItem, boardIndex) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjQzNGRhNmQ2MzJlNGI3ZmY0MTgiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJET01ib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTWNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImJvYXJkIiwibmV3R2FtZSIsInR1cm4iLCJwbGF5ZXJzIiwiaSIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJ3aW5zIiwiYWRkV2luIiwiYWRkVmFsdWVUb0JvYXJkIiwiYm9hcmRJbmRleCIsImNoZWNrRm9yV2lubmVyIiwiZmluZCIsImNvbWJvIiwic3dpdGNoVHVybiIsInZpZXciLCJlIiwiYXR0YWNoTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiZGV0YWNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJET00iLCJpbmRleCIsImNlbGwiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwibWFwIiwicGxheWVyIiwiZGF0YSIsInRhcmdldCIsImJvYXJkSXRlbSIsInNldFRpbWVvdXQiLCJhbGVydCIsImV2ZXJ5IiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImNhbGwiLCJpc05vdEVtcHR5U3RyaW5nIiwiZWwiLCJzb3J0IiwiYSIsImIiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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Q0FBSixFQUFPLENBQVAsQ0FEVCxFQUNvQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURwQixFQUMrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQvQixFQUMwQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQxQyxFQUNxRCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURyRCxFQUNnRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURoRTtBQVpjLEVBQS9CLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjQzNGRhNmQ2MzJlNGI3ZmY0MTgiLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIEVtb2ppIFRhYyBUb2UgR2FtZVxuKiovXG5cbmltcG9ydCB7IGZvckVhY2gsIGlzTm90RW1wdHlTdHJpbmcsIHNvcnQsIHdpbm5pbmdDb21ib3MgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZ2FtZSA9IHtcbiAgRE9NYm9hcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLFxuICBET01jZWxsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSxcbiAgYm9hcmQ6IFtdLFxuICBuZXdHYW1lICgpIHtcbiAgICBnYW1lLnR1cm4gPSBwbGF5ZXJzWzFdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkRPTWNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5ib2FyZC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYm9hcmQuc3BsaWNlKGksIHRoaXMuYm9hcmQubGVuZ3RoLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBwbGF5ZXJzID0gW1xuICB7XG4gICAgdmFsdWU6ICfwn6aEJyxcbiAgICBET013aW5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS13aW5zJyksXG4gICAgd2luczogW11cbiAgfSxcbiAge1xuICAgIHZhbHVlOiAn8J+SqScsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28td2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH1cbl07XG5cbmNvbnN0IGFkZFdpbiA9ICgpID0+IHtcbiAgZ2FtZS50dXJuLndpbnMucHVzaCgnd2luJyk7XG59O1xuXG5jb25zdCBhZGRWYWx1ZVRvQm9hcmQgPSAoYm9hcmRJbmRleCkgPT4ge1xuICBnYW1lLmJvYXJkLnNwbGljZShib2FyZEluZGV4LCAxLCBnYW1lLnR1cm4udmFsdWUpO1xufTtcblxuY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG5cbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgaWYgKGdhbWUudHVybiA9PT0gcGxheWVyc1sxXSkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMF07XG4gIH0gZWxzZSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1sxXTtcbiAgfVxufTtcblxuY29uc3QgdmlldyA9IChlKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQsIERPTWJvYXJkLCBET01jZWxscyB9ID0gZ2FtZTtcblxuICBjb25zdCBhdHRhY2hMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XG4gIH07XG5cbiAgY29uc3QgZGV0YWNoTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRE9NYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRE9NID0gKCkgPT4ge1xuICAgIGZvckVhY2goZ2FtZS5ET01jZWxscywgKGluZGV4LCBjZWxsKSA9PiB7XG4gICAgICBjZWxsLmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgIGNlbGwuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgfTtcblxuICBwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiB7XG4gICAgcGxheWVyLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7cGxheWVyLnZhbHVlfSA6ICR7cGxheWVyLndpbnMubGVuZ3RofWA7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbmRlciAoZSkge1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgIGZvckVhY2ggKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgY2VsbCkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBjZWxsICYmIGRhdGFbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBib2FyZC5tYXAoKGJvYXJkSXRlbSwgYm9hcmRJbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChib2FyZEluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgc3dpdGNoVHVybigpO1xuICAgICAgICAgICAgYWRkVmFsdWVUb0JvYXJkKGJvYXJkSW5kZXgpO1xuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYm9hcmRbaW5kZXhdO1xuICAgICAgICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY2hlY2tGb3JXaW5uZXIoKSkge1xuICAgICAgZGV0YWNoTGlzdGVuZXIoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIGFsZXJ0KGAke2dhbWUudHVybi52YWx1ZX0gV2lucyFgKTtcbiAgICAgICAgYWRkV2luKCk7XG4gICAgICAgIGdhbWUudHVybi5ET013aW5zLmlubmVySFRNTCA9IGAke2dhbWUudHVybi52YWx1ZX0gOiAke2dhbWUudHVybi53aW5zLmxlbmd0aH1gO1xuICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgICAgYXR0YWNoTGlzdGVuZXIoKTtcbiAgICAgIH0sIDQ1MCk7XG4gICAgfSBlbHNlIGlmIChib2FyZC5ldmVyeShpc05vdEVtcHR5U3RyaW5nKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCfwn5i4IFdpbnMhJyk7XG4gICAgICAgIGdhbWUubmV3R2FtZSgpO1xuICAgICAgICBjbGVhckRPTSgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIGF0dGFjaExpc3RlbmVyKCk7XG59XG5cbnZpZXcoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5cbmNvbnN0IHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZvckVhY2ggKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gICAgfVxuICB9LFxuICBpc05vdEVtcHR5U3RyaW5nIChlbCkge1xuICAgIHJldHVybiBlbCAhPSAnJztcbiAgfSxcbiAgc29ydCAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==