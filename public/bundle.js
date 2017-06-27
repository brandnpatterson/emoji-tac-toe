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
	  board: ['!', '!'],
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
	  DOMwins: document.querySelector('.x-wins'),
	  wins: []
	}, {
	  value: '💩',
	  DOMwins: document.querySelector('.o-wins'),
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
	
	
	  var initiateListener = function initiateListener() {
	    DOMboard.addEventListener('click', render);
	  };
	
	  var detatchListener = function detatchListener() {
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
	      detatchListener();
	      setTimeout(function () {
	        alert(game.turn.value + ' Wins!');
	        addWin();
	        game.turn.DOMwins.innerHTML = game.turn.value + ' : ' + game.turn.wins.length;
	        game.newGame();
	        clearDOM();
	        initiateListener();
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
	  initiateListener();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTg3MGQxZWM1YjJjYjI0ZWJjMGUiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJET01ib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTWNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImJvYXJkIiwibmV3R2FtZSIsInR1cm4iLCJwbGF5ZXJzIiwiaSIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJ3aW5zIiwiYWRkV2luIiwiYWRkVmFsdWVUb0JvYXJkIiwiYm9hcmRJbmRleCIsImNoZWNrRm9yV2lubmVyIiwiZmluZCIsImNvbWJvIiwic3dpdGNoVHVybiIsInZpZXciLCJlIiwiaW5pdGlhdGVMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJkZXRhdGNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJET00iLCJpbmRleCIsImNlbGwiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwibWFwIiwicGxheWVyIiwiZGF0YSIsInRhcmdldCIsImJvYXJkSXRlbSIsInNldFRpbWVvdXQiLCJhbGVydCIsImV2ZXJ5IiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImNhbGwiLCJpc05vdEVtcHR5U3RyaW5nIiwiZWwiLCJzb3J0IiwiYSIsImIiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFF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RSxFQUNTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFQsRUFDb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEcEIsRUFDK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEL0IsRUFDMEMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEMUMsRUFDcUQsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEckQsRUFDZ0UsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEaEU7QUFaYyxFQUEvQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU4NzBkMWVjNWIyY2IyNGViYzBlIiwiLyoqXHJcbiAqICBXZWJwYWNrIGVudHJ5IHBvaW50XHJcbioqL1xyXG5cclxuaW1wb3J0ICcuL2FwcC5qcyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBFbW9qaSBUYWMgVG9lIEdhbWVcbioqL1xuXG5pbXBvcnQgeyBmb3JFYWNoLCBpc05vdEVtcHR5U3RyaW5nLCBzb3J0LCB3aW5uaW5nQ29tYm9zIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGdhbWUgPSB7XG4gIERPTWJvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSxcbiAgRE9NY2VsbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyksXG4gIGJvYXJkOiBbJyEnLCAnISddLFxuICBuZXdHYW1lICgpIHtcbiAgICBnYW1lLnR1cm4gPSBwbGF5ZXJzWzFdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkRPTWNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5ib2FyZC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYm9hcmQuc3BsaWNlKGksIHRoaXMuYm9hcmQubGVuZ3RoLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBwbGF5ZXJzID0gW1xuICB7XG4gICAgdmFsdWU6ICfwn6aEJyxcbiAgICBET013aW5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueC13aW5zJyksXG4gICAgd2luczogW11cbiAgfSxcbiAge1xuICAgIHZhbHVlOiAn8J+SqScsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm8td2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH1cbl07XG5cbmNvbnN0IGFkZFdpbiA9ICgpID0+IHtcbiAgZ2FtZS50dXJuLndpbnMucHVzaCgnd2luJyk7XG59O1xuXG5jb25zdCBhZGRWYWx1ZVRvQm9hcmQgPSAoYm9hcmRJbmRleCkgPT4ge1xuICBnYW1lLmJvYXJkLnNwbGljZShib2FyZEluZGV4LCAxLCBnYW1lLnR1cm4udmFsdWUpO1xufTtcblxuY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG5cbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgaWYgKGdhbWUudHVybiA9PT0gcGxheWVyc1sxXSkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMF07XG4gIH0gZWxzZSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1sxXTtcbiAgfVxufTtcblxuY29uc3QgdmlldyA9IChlKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQsIERPTWJvYXJkLCBET01jZWxscyB9ID0gZ2FtZTtcblxuICBjb25zdCBpbml0aWF0ZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgIERPTWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyKTtcbiAgfTtcblxuICBjb25zdCBkZXRhdGNoTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRE9NYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRE9NID0gKCkgPT4ge1xuICAgIGZvckVhY2goZ2FtZS5ET01jZWxscywgKGluZGV4LCBjZWxsKSA9PiB7XG4gICAgICBjZWxsLmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgIGNlbGwuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgfTtcblxuICBwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiB7XG4gICAgcGxheWVyLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7cGxheWVyLnZhbHVlfSA6ICR7cGxheWVyLndpbnMubGVuZ3RofWA7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbmRlciAoZSkge1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgIGZvckVhY2ggKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgY2VsbCkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBjZWxsICYmIGRhdGFbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBib2FyZC5tYXAoKGJvYXJkSXRlbSwgYm9hcmRJbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChib2FyZEluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgc3dpdGNoVHVybigpO1xuICAgICAgICAgICAgYWRkVmFsdWVUb0JvYXJkKGJvYXJkSW5kZXgpO1xuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYm9hcmRbaW5kZXhdO1xuICAgICAgICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY2hlY2tGb3JXaW5uZXIoKSkge1xuICAgICAgZGV0YXRjaExpc3RlbmVyKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICAgIGFkZFdpbigpO1xuICAgICAgICBnYW1lLnR1cm4uRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtnYW1lLnR1cm4udmFsdWV9IDogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICAgICAgZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICAgIGluaXRpYXRlTGlzdGVuZXIoKTtcbiAgICAgIH0sIDQ1MCk7XG4gICAgfSBlbHNlIGlmIChib2FyZC5ldmVyeShpc05vdEVtcHR5U3RyaW5nKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCfwn5i4IFdpbnMhJyk7XG4gICAgICAgIGdhbWUubmV3R2FtZSgpO1xuICAgICAgICBjbGVhckRPTSgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIGluaXRpYXRlTGlzdGVuZXIoKTtcbn1cblxudmlldygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiLyoqXG4gKiBHZW5lcmFsIFV0aWxzXG4qKi9cblxuY29uc3QgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9yRWFjaCAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcbiAgICB9XG4gIH0sXG4gIGlzTm90RW1wdHlTdHJpbmcgKGVsKSB7XG4gICAgcmV0dXJuIGVsICE9ICcnO1xuICB9LFxuICBzb3J0IChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9LFxuICB3aW5uaW5nQ29tYm9zOiBbXG4gICAgWzAsIDEsIDJdLCBbMywgNCwgNV0sIFs2LCA3LCA4XSwgWzAsIDMsIDZdLCBbMSwgNCwgN10sIFsyLCA1LCA4XSwgWzAsIDQsIDhdLCBbMiwgNCwgNl1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9