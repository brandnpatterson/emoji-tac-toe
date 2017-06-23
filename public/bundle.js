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
	  init: function init() {
	    this.newGame();
	  },
	
	  DOMboard: document.querySelector('.board'),
	  DOMcells: document.querySelectorAll('.cell'),
	  players: [{
	    value: 'X',
	    DOMwins: document.querySelector('.x-wins'),
	    wins: []
	  }, {
	    value: 'O',
	    DOMwins: document.querySelector('.o-wins'),
	    wins: []
	  }],
	  newGame: function newGame() {
	    var _this = this;
	
	    this.board = [];
	    this.turn = this.players[0];
	    // custom forEach used for elements selected with querySelectorAll
	    (0, _utils.forEach)(this.DOMcells, function (index, value) {
	      _this.board.push('');
	      value.innerHTML = _this.board[index];
	      value.dataset['clicked'] = 'false';
	    });
	  }
	}; /**
	    * Tic Tac Toe Game
	   **/
	
	game.init();
	
	game.DOMboard.addEventListener('click', function (e) {
	  var board = game.board,
	      players = game.players;
	
	  var data = e.target.dataset;
	
	  var switchTurn = function switchTurn() {
	    game.turn = game.turn === players[1] ? players[0] : players[1];
	  };
	
	  (0, _utils.forEach)(game.DOMcells, function (index, node) {
	    board.map(function (boardItem, boardOrder) {
	      // if element matches a node in DOMcells & has dataset clicked of false
	      if ((0, _utils.match)(e.target, node) && (0, _utils.match)(data['clicked'], 'false')) {
	        // if the boardIndex matches the index of the DOMcells
	        if ((0, _utils.match)(boardOrder, index)) {
	          board.splice(boardOrder, 1, game.turn.value);
	          e.target.innerHTML = board[index];
	          data['clicked'] = 'true';
	          switchTurn();
	        }
	      }
	      if (checkForWinner()) {
	        switchTurn();
	        alert(game.turn.value + ' Wins!');
	        game.turn.wins.push('win');
	        game.turn.DOMwins.innerHTML = game.turn.value + ' Wins: ' + game.turn.wins.length;
	        game.newGame();
	      }
	    });
	  });
	});
	
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * General Utils
	**/
	var utils = module.exports = {
	  forEach: function forEach(array, callback, scope) {
	    for (var i = 0; i < array.length; i++) {
	      callback.call(scope, i, array[i]);
	    }
	  },
	  match: function match(a, b) {
	    if (a === b) {
	      return true;
	    } else {
	      return false;
	    }
	  },
	  sort: function sort(a, b) {
	    return a - b;
	  },
	
	  winningCombos: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzJmOWJhYWZjMGFiNDYyN2I3NjIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJpbml0IiwibmV3R2FtZSIsIkRPTWJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRE9NY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxheWVycyIsInZhbHVlIiwiRE9Nd2lucyIsIndpbnMiLCJib2FyZCIsInR1cm4iLCJpbmRleCIsInB1c2giLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkYXRhIiwidGFyZ2V0Iiwic3dpdGNoVHVybiIsIm5vZGUiLCJtYXAiLCJib2FyZEl0ZW0iLCJib2FyZE9yZGVyIiwic3BsaWNlIiwiY2hlY2tGb3JXaW5uZXIiLCJhbGVydCIsImxlbmd0aCIsImZpbmQiLCJjb21ibyIsInV0aWxzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJpIiwiY2FsbCIsIm1hdGNoIiwiYSIsImIiLCJzb3J0Iiwid2lubmluZ0NvbWJvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esd0I7Ozs7Ozs7O0FDQUE7O0FBRUEsS0FBTUEsT0FBTztBQUNYQyxPQURXLGtCQUNIO0FBQ04sVUFBS0MsT0FBTDtBQUNELElBSFU7O0FBSVhDLGFBQVVDLFNBQVNDLGFBQVQsQ0FB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QixFQUMwQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQxQyxFQUNxRCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURyRCxFQUNnRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURoRTtBQWhCYyxFQUEvQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMyZjliYWFmYzBhYjQ2MjdiNzYyIiwiLyoqXHJcbiAqICBXZWJwYWNrIGVudHJ5IHBvaW50XHJcbioqL1xyXG5cclxuaW1wb3J0ICcuL2FwcC5qcyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBUaWMgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgbWF0Y2gsIHNvcnQsIHdpbm5pbmdDb21ib3MgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZ2FtZSA9IHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5uZXdHYW1lKClcbiAgfSxcbiAgRE9NYm9hcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLFxuICBET01jZWxsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSxcbiAgcGxheWVyczogW1xuICAgIHtcbiAgICAgIHZhbHVlOiAnWCcsXG4gICAgICBET013aW5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueC13aW5zJyksXG4gICAgICB3aW5zOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6ICdPJyxcbiAgICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdpbnMnKSxcbiAgICAgIHdpbnM6IFtdXG4gICAgfVxuICBdLFxuICBuZXdHYW1lICgpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy50dXJuID0gdGhpcy5wbGF5ZXJzWzBdO1xuICAgIC8vIGN1c3RvbSBmb3JFYWNoIHVzZWQgZm9yIGVsZW1lbnRzIHNlbGVjdGVkIHdpdGggcXVlcnlTZWxlY3RvckFsbFxuICAgIGZvckVhY2godGhpcy5ET01jZWxscywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKCcnKTtcbiAgICAgIHZhbHVlLmlubmVySFRNTCA9IHRoaXMuYm9hcmRbaW5kZXhdO1xuICAgICAgdmFsdWUuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgfVxufTtcbmdhbWUuaW5pdCgpO1xuXG5nYW1lLkRPTWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgeyBib2FyZCwgcGxheWVycyB9ID0gZ2FtZTtcbiAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG5cbiAgY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgICBnYW1lLnR1cm4gPSBnYW1lLnR1cm4gPT09IHBsYXllcnNbMV0gPyBwbGF5ZXJzWzBdIDogcGxheWVyc1sxXTtcbiAgfTtcblxuICBmb3JFYWNoIChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIG5vZGUpID0+IHtcbiAgICBib2FyZC5tYXAoKGJvYXJkSXRlbSwgYm9hcmRPcmRlcikgPT4ge1xuICAgICAgLy8gaWYgZWxlbWVudCBtYXRjaGVzIGEgbm9kZSBpbiBET01jZWxscyAmIGhhcyBkYXRhc2V0IGNsaWNrZWQgb2YgZmFsc2VcbiAgICAgIGlmIChtYXRjaChlLnRhcmdldCwgbm9kZSkgJiYgbWF0Y2goZGF0YVsnY2xpY2tlZCddLCAnZmFsc2UnKSkge1xuICAgICAgICAvLyBpZiB0aGUgYm9hcmRJbmRleCBtYXRjaGVzIHRoZSBpbmRleCBvZiB0aGUgRE9NY2VsbHNcbiAgICAgICAgaWYgKG1hdGNoKGJvYXJkT3JkZXIsIGluZGV4KSkge1xuICAgICAgICAgIGJvYXJkLnNwbGljZShib2FyZE9yZGVyLCAxLCBnYW1lLnR1cm4udmFsdWUpO1xuICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgICAgICBkYXRhWydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gICAgICAgICAgc3dpdGNoVHVybigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2hlY2tGb3JXaW5uZXIoKSkge1xuICAgICAgICBzd2l0Y2hUdXJuKCk7XG4gICAgICAgIGFsZXJ0KGAke2dhbWUudHVybi52YWx1ZX0gV2lucyFgKTtcbiAgICAgICAgZ2FtZS50dXJuLndpbnMucHVzaCgnd2luJyk7XG4gICAgICAgIGdhbWUudHVybi5ET013aW5zLmlubmVySFRNTCA9IGAke2dhbWUudHVybi52YWx1ZX0gV2luczogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICAgICAgZ2FtZS5uZXdHYW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuICByZXR1cm4gd2lubmluZ0NvbWJvcy5maW5kKChjb21ibykgPT4ge1xuICAgIGlmIChib2FyZFtjb21ib1swXV0gPT09IGJvYXJkW2NvbWJvWzFdXSAmJiBib2FyZFtjb21ib1sxXV0gPT09IGJvYXJkW2NvbWJvWzJdXSkge1xuICAgICAgcmV0dXJuIGJvYXJkW2NvbWJvWzBdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiLyoqXG4gKiBHZW5lcmFsIFV0aWxzXG4qKi9cbmNvbnN0IHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZvckVhY2ggKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gICAgfVxuICB9LFxuICBtYXRjaCAoYSwgYikge1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9LFxuICBzb3J0IChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9LFxuICB3aW5uaW5nQ29tYm9zOiBbXG4gICAgWzAsIDEsIDJdLCBbMywgNCwgNV0sIFs2LCA3LCA4XSwgWzAsIDMsIDZdLCBbMSwgNCwgN10sIFsyLCA1LCA4XSwgWzAsIDQsIDhdLCBbMiwgNCwgNl1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9