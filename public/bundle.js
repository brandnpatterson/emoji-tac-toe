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
	
	var players = [{
	  value: 'X',
	  DOMwins: document.querySelector('.x-wins'),
	  wins: []
	}, {
	  value: 'O',
	  DOMwins: document.querySelector('.o-wins'),
	  wins: []
	}]; /**
	     * Tic Tac Toe Game
	    **/
	
	var game = {
	  DOMboard: document.querySelector('.board'),
	  DOMcells: document.querySelectorAll('.cell'),
	  newGame: function newGame() {
	    var _this = this;
	
	    this.board = [];
	    this.turn = players[0];
	    // custom forEach used for elements selected with querySelectorAll
	    (0, _utils.forEach)(this.DOMcells, function (index, value) {
	      _this.board.push('');
	      value.innerHTML = _this.board[index];
	      value.dataset['clicked'] = 'false';
	    });
	  }
	};
	game.newGame();
	
	game.DOMboard.addEventListener('click', function (e) {
	  var board = game.board;
	
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
	    });
	  });
	  if (checkForWinner()) {
	    switchTurn();
	    alert(game.turn.value + ' Wins!');
	    game.turn.wins.push('win');
	    game.turn.DOMwins.innerHTML = game.turn.value + ' Wins: ' + game.turn.wins.length;
	    game.newGame();
	  } else if (board.every(isNotEmptyString)) {
	    switchTurn();
	    alert('Cat Gotcha!');
	    game.newGame();
	  }
	});
	
	var checkForWinner = function checkForWinner() {
	  var board = game.board;
	
	  return _utils.winningCombos.find(function (combo) {
	    if ((0, _utils.match)(board[combo[0]], board[combo[1]]) && (0, _utils.match)(board[combo[1]], board[combo[2]])) {
	      return board[combo[0]];
	    } else {
	      return false;
	    }
	  });
	};
	
	var isNotEmptyString = function isNotEmptyString(el) {
	  return el != '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjg4M2NlYzUxYjQ0MTQ5ZmMyNmQiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInBsYXllcnMiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5zIiwiZ2FtZSIsIkRPTWJvYXJkIiwiRE9NY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmV3R2FtZSIsImJvYXJkIiwidHVybiIsImluZGV4IiwicHVzaCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJ0YXJnZXQiLCJzd2l0Y2hUdXJuIiwibm9kZSIsIm1hcCIsImJvYXJkSXRlbSIsImJvYXJkT3JkZXIiLCJzcGxpY2UiLCJjaGVja0Zvcldpbm5lciIsImFsZXJ0IiwibGVuZ3RoIiwiZXZlcnkiLCJpc05vdEVtcHR5U3RyaW5nIiwiZmluZCIsImNvbWJvIiwiZWwiLCJ1dGlscyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwiaSIsImNhbGwiLCJtYXRjaCIsImEiLCJiIiwic29ydCIsIndpbm5pbmdDb21ib3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLHdCOzs7Ozs7OztBQ0FBOztBQUVBLEtBQU1BLFVBQVUsQ0FDZDtBQUNFQyxVQUFPLEdBRFQ7QUFFRUMsWUFBU0MsU0FBU0MsYUFBVCxD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LENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFQsRUFDb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEcEIsRUFDK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEL0IsRUFDMEMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEMUMsRUFDcUQsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEckQsRUFDZ0UsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEaEU7QUFoQmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ODgzY2VjNTFiNDQxNDlmYzI2ZCIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogVGljIFRhYyBUb2UgR2FtZVxuKiovXG5cbmltcG9ydCB7IGZvckVhY2gsIG1hdGNoLCBzb3J0LCB3aW5uaW5nQ29tYm9zIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICB2YWx1ZTogJ1gnLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdPJyxcbiAgICBET013aW5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuby13aW5zJyksXG4gICAgd2luczogW11cbiAgfVxuXTtcblxuY29uc3QgZ2FtZSA9IHtcbiAgRE9NYm9hcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLFxuICBET01jZWxsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSxcbiAgbmV3R2FtZSAoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMudHVybiA9IHBsYXllcnNbMF07XG4gICAgLy8gY3VzdG9tIGZvckVhY2ggdXNlZCBmb3IgZWxlbWVudHMgc2VsZWN0ZWQgd2l0aCBxdWVyeVNlbGVjdG9yQWxsXG4gICAgZm9yRWFjaCh0aGlzLkRPTWNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLnB1c2goJycpO1xuICAgICAgdmFsdWUuaW5uZXJIVE1MID0gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICB2YWx1ZS5kYXRhc2V0WydjbGlja2VkJ10gPSAnZmFsc2UnO1xuICAgIH0pO1xuICB9XG59O1xuZ2FtZS5uZXdHYW1lKCk7XG5cbmdhbWUuRE9NYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuICBjb25zdCBkYXRhID0gZS50YXJnZXQuZGF0YXNldDtcbiAgY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgICBnYW1lLnR1cm4gPSBnYW1lLnR1cm4gPT09IHBsYXllcnNbMV0gPyBwbGF5ZXJzWzBdIDogcGxheWVyc1sxXTtcbiAgfTtcbiAgZm9yRWFjaCAoZ2FtZS5ET01jZWxscywgKGluZGV4LCBub2RlKSA9PiB7XG4gICAgYm9hcmQubWFwKChib2FyZEl0ZW0sIGJvYXJkT3JkZXIpID0+IHtcbiAgICAgIC8vIGlmIGVsZW1lbnQgbWF0Y2hlcyBhIG5vZGUgaW4gRE9NY2VsbHMgJiBoYXMgZGF0YXNldCBjbGlja2VkIG9mIGZhbHNlXG4gICAgICBpZiAobWF0Y2goZS50YXJnZXQsIG5vZGUpICYmIG1hdGNoKGRhdGFbJ2NsaWNrZWQnXSwgJ2ZhbHNlJykpIHtcbiAgICAgICAgLy8gaWYgdGhlIGJvYXJkSW5kZXggbWF0Y2hlcyB0aGUgaW5kZXggb2YgdGhlIERPTWNlbGxzXG4gICAgICAgIGlmIChtYXRjaChib2FyZE9yZGVyLCBpbmRleCkpIHtcbiAgICAgICAgICBib2FyZC5zcGxpY2UoYm9hcmRPcmRlciwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbiAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICBzd2l0Y2hUdXJuKCk7XG4gICAgYWxlcnQoYCR7Z2FtZS50dXJuLnZhbHVlfSBXaW5zIWApO1xuICAgIGdhbWUudHVybi53aW5zLnB1c2goJ3dpbicpO1xuICAgIGdhbWUudHVybi5ET013aW5zLmlubmVySFRNTCA9IGAke2dhbWUudHVybi52YWx1ZX0gV2luczogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICBnYW1lLm5ld0dhbWUoKTtcbiAgfSBlbHNlIGlmIChib2FyZC5ldmVyeShpc05vdEVtcHR5U3RyaW5nKSkge1xuICAgIHN3aXRjaFR1cm4oKTtcbiAgICBhbGVydChgQ2F0IEdvdGNoYSFgKTtcbiAgICBnYW1lLm5ld0dhbWUoKTtcbiAgfVxufSk7XG5cbmNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuICByZXR1cm4gd2lubmluZ0NvbWJvcy5maW5kKChjb21ibykgPT4ge1xuICAgIGlmIChtYXRjaChib2FyZFtjb21ib1swXV0sIGJvYXJkW2NvbWJvWzFdXSkgJiYgbWF0Y2goYm9hcmRbY29tYm9bMV1dLCBib2FyZFtjb21ib1syXV0pKSB7XG4gICAgICByZXR1cm4gYm9hcmRbY29tYm9bMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGlzTm90RW1wdHlTdHJpbmcgPSAoZWwpID0+IHtcbiAgcmV0dXJuIGVsICE9ICcnO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiLyoqXG4gKiBHZW5lcmFsIFV0aWxzXG4qKi9cblxuY29uc3QgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9yRWFjaCAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcbiAgICB9XG4gIH0sXG4gIG1hdGNoIChhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0sXG4gIHNvcnQgKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=