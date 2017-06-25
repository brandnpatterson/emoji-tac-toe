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
	  value: '🦄',
	  DOMwins: document.querySelector('.x-wins'),
	  wins: []
	}, {
	  value: '💩',
	  DOMwins: document.querySelector('.o-wins'),
	  wins: []
	}]; /**
	     * Emoji Tac Toe Game
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
	    players.map(function (player) {
	      player.DOMwins.innerHTML = player.value + ' : ' + player.wins.length;
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
	    game.turn.DOMwins.innerHTML = game.turn.value + ' : ' + game.turn.wins.length;
	    game.newGame();
	  } else if (board.every(isNotEmptyString)) {
	    switchTurn();
	    alert('😸 Wins!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTZiN2RlZTUwNDc3OTEzMzFlNTMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInBsYXllcnMiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5zIiwiZ2FtZSIsIkRPTWJvYXJkIiwiRE9NY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmV3R2FtZSIsImJvYXJkIiwidHVybiIsImluZGV4IiwicHVzaCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJtYXAiLCJwbGF5ZXIiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJ0YXJnZXQiLCJzd2l0Y2hUdXJuIiwibm9kZSIsImJvYXJkSXRlbSIsImJvYXJkT3JkZXIiLCJzcGxpY2UiLCJjaGVja0Zvcldpbm5lciIsImFsZXJ0IiwiZXZlcnkiLCJpc05vdEVtcHR5U3RyaW5nIiwiZmluZCIsImNvbWJvIiwiZWwiLCJ1dGlscyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwiaSIsImNhbGwiLCJtYXRjaCIsImEiLCJiIiwic29ydCIsIndpbm5pbmdDb21ib3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLHdCOzs7Ozs7OztBQ0FBOztBQUVBLEtBQU1BLFVBQVUsQ0FDZDtBQUNFQyxVQUFPLElBRFQ7QUFFRUMsWUFBU0MsU0FB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QixFQWFwQkMsQ0Fib0IsRUFhakI7QUFDVixZQUFPRCxJQUFJQyxDQUFYO0FBQ0QsSUFmNEI7O0FBZ0I3QkUsa0JBQWUsQ0FDYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURhLEVBQ0YsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FERSxFQUNTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFQsRUFDb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEcEIsRUFDK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEL0IsRUFDMEMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEMUMsRUFDcUQsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEckQsRUFDZ0UsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEaEU7QUFoQmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNmI3ZGVlNTA0Nzc5MTMzMWU1MyIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogRW1vamkgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgbWF0Y2gsIHNvcnQsIHdpbm5pbmdDb21ib3MgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIHZhbHVlOiAn8J+mhCcsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtd2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ/CfkqknLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9XG5dO1xuXG5jb25zdCBnYW1lID0ge1xuICBET01ib2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyksXG4gIERPTWNlbGxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLFxuICBuZXdHYW1lICgpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy50dXJuID0gcGxheWVyc1swXTtcbiAgICAvLyBjdXN0b20gZm9yRWFjaCB1c2VkIGZvciBlbGVtZW50cyBzZWxlY3RlZCB3aXRoIHF1ZXJ5U2VsZWN0b3JBbGxcbiAgICBmb3JFYWNoKHRoaXMuRE9NY2VsbHMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaCgnJyk7XG4gICAgICB2YWx1ZS5pbm5lckhUTUwgPSB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgIHZhbHVlLmRhdGFzZXRbJ2NsaWNrZWQnXSA9ICdmYWxzZSc7XG4gICAgfSk7XG4gICAgcGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7cGxheWVyLnZhbHVlfSA6ICR7cGxheWVyLndpbnMubGVuZ3RofWA7XG4gICAgfSk7XG4gIH1cbn07XG5nYW1lLm5ld0dhbWUoKTtcblxuZ2FtZS5ET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG4gIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuICBjb25zdCBzd2l0Y2hUdXJuID0gKCkgPT4ge1xuICAgIGdhbWUudHVybiA9IGdhbWUudHVybiA9PT0gcGxheWVyc1sxXSA/IHBsYXllcnNbMF0gOiBwbGF5ZXJzWzFdO1xuICB9O1xuICBmb3JFYWNoIChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIG5vZGUpID0+IHtcbiAgICBib2FyZC5tYXAoKGJvYXJkSXRlbSwgYm9hcmRPcmRlcikgPT4ge1xuICAgICAgLy8gaWYgZWxlbWVudCBtYXRjaGVzIGEgbm9kZSBpbiBET01jZWxscyAmIGhhcyBkYXRhc2V0IGNsaWNrZWQgb2YgZmFsc2VcbiAgICAgIGlmIChtYXRjaChlLnRhcmdldCwgbm9kZSkgJiYgbWF0Y2goZGF0YVsnY2xpY2tlZCddLCAnZmFsc2UnKSkge1xuICAgICAgICAvLyBpZiB0aGUgYm9hcmRJbmRleCBtYXRjaGVzIHRoZSBpbmRleCBvZiB0aGUgRE9NY2VsbHNcbiAgICAgICAgaWYgKG1hdGNoKGJvYXJkT3JkZXIsIGluZGV4KSkge1xuICAgICAgICAgIGJvYXJkLnNwbGljZShib2FyZE9yZGVyLCAxLCBnYW1lLnR1cm4udmFsdWUpO1xuICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgICAgICBkYXRhWydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gICAgICAgICAgc3dpdGNoVHVybigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoY2hlY2tGb3JXaW5uZXIoKSkge1xuICAgIHN3aXRjaFR1cm4oKTtcbiAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgZ2FtZS50dXJuLndpbnMucHVzaCgnd2luJyk7XG4gICAgZ2FtZS50dXJuLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7Z2FtZS50dXJuLnZhbHVlfSA6ICR7Z2FtZS50dXJuLndpbnMubGVuZ3RofWA7XG4gICAgZ2FtZS5uZXdHYW1lKCk7XG4gIH0gZWxzZSBpZiAoYm9hcmQuZXZlcnkoaXNOb3RFbXB0eVN0cmluZykpIHtcbiAgICBzd2l0Y2hUdXJuKCk7XG4gICAgYWxlcnQoJ/CfmLggV2lucyEnKTtcbiAgICBnYW1lLm5ld0dhbWUoKTtcbiAgfVxufSk7XG5cbmNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuICByZXR1cm4gd2lubmluZ0NvbWJvcy5maW5kKChjb21ibykgPT4ge1xuICAgIGlmIChtYXRjaChib2FyZFtjb21ib1swXV0sIGJvYXJkW2NvbWJvWzFdXSkgJiYgbWF0Y2goYm9hcmRbY29tYm9bMV1dLCBib2FyZFtjb21ib1syXV0pKSB7XG4gICAgICByZXR1cm4gYm9hcmRbY29tYm9bMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGlzTm90RW1wdHlTdHJpbmcgPSAoZWwpID0+IHtcbiAgcmV0dXJuIGVsICE9ICcnO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiLyoqXG4gKiBHZW5lcmFsIFV0aWxzXG4qKi9cblxuY29uc3QgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9yRWFjaCAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcbiAgICB9XG4gIH0sXG4gIG1hdGNoIChhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0sXG4gIHNvcnQgKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=