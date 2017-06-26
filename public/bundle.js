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
	
	var render = function render(e) {
	  var board = game.board,
	      DOMcells = game.DOMcells,
	      turn = game.turn;
	
	
	  players.map(function (player) {
	    player.DOMwins.innerHTML = player.value + ' : ' + player.wins.length;
	  });
	
	  (0, _utils.forEach)(DOMcells, function (index, node) {
	    node.innerHTML = board[index];
	    node.dataset['clicked'] = 'false';
	  });
	
	  if (checkForWinner()) {
	    alert(turn.value + ' Wins!');
	    turn.wins.push('win');
	    turn.DOMwins.innerHTML = turn.value + ' : ' + turn.wins.length;
	    game.newGame();
	  } else if (board.every(isNotEmptyString)) {
	    alert('😸 Wins!');
	    game.newGame();
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
	
	var game = {
	  DOMboard: document.querySelector('.board'),
	  DOMcells: document.querySelectorAll('.cell'),
	  newGame: function newGame() {
	    var _this = this;
	
	    this.board = [];
	    this.turn = players[0];
	    // custom forEach used for elements selected with querySelectorAll
	    (0, _utils.forEach)(this.DOMcells, function (index, node) {
	      _this.board.push('');
	    });
	    render();
	  }
	};
	
	game.DOMboard.addEventListener('click', function (e) {
	  var board = game.board;
	
	  var data = e.target.dataset;
	
	  (0, _utils.forEach)(game.DOMcells, function (index, node) {
	
	    board.map(function (boardItem, boardOrder) {
	      // if element matches a node in DOMcells & has dataset clicked of false
	      if (e.target === node && data['clicked'] === 'false') {
	        // if the boardIndex matches the index of the DOMcells
	        if (boardOrder === index) {
	          board.splice(boardOrder, 1, game.turn.value);
	          e.target.innerHTML = board[index];
	          data['clicked'] = 'true';
	        }
	      }
	    });
	  });
	  switchTurn();
	});
	
	var isNotEmptyString = function isNotEmptyString(el) {
	  return el != '';
	};
	
	var switchTurn = function switchTurn() {
	  game.turn = game.turn === players[1] ? players[0] : players[1];
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
	
	game.newGame();

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
	  sort: function sort(a, b) {
	    return a - b;
	  },
	
	  winningCombos: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWQ2ZTdmZWNiN2ZiMjdiN2NhNjciLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInJlbmRlciIsImUiLCJib2FyZCIsImdhbWUiLCJET01jZWxscyIsInR1cm4iLCJwbGF5ZXJzIiwibWFwIiwicGxheWVyIiwiRE9Nd2lucyIsImlubmVySFRNTCIsInZhbHVlIiwid2lucyIsImxlbmd0aCIsImluZGV4Iiwibm9kZSIsImRhdGFzZXQiLCJjaGVja0Zvcldpbm5lciIsImFsZXJ0IiwicHVzaCIsIm5ld0dhbWUiLCJldmVyeSIsImlzTm90RW1wdHlTdHJpbmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJET01ib2FyZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YSIsInRhcmdldCIsImJvYXJkSXRlbSIsImJvYXJkT3JkZXIiLCJzcGxpY2UiLCJzd2l0Y2hUdXJuIiwiZWwiLCJmaW5kIiwiY29tYm8iLCJ1dGlscyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwiaSIsImNhbGwiLCJzb3J0IiwiYSIsImIiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSx3Qjs7Ozs7Ozs7QUNBQTs7QUFFQSxLQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQUEsT0FD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QUFPRCxJQUFJQyxDQUFYO0FBQ0QsSUFSNEI7O0FBUzdCQyxrQkFBZSxDQUNiLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGEsRUFDRixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURFLEVBQ1MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEVCxFQUNvQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURwQixFQUMrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQvQixFQUMwQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQxQyxFQUNxRCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURyRCxFQUNnRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURoRTtBQVRjLEVBQS9CLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWQ2ZTdmZWNiN2ZiMjdiN2NhNjciLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIEVtb2ppIFRhYyBUb2UgR2FtZVxuKiovXG5cbmltcG9ydCB7IGZvckVhY2gsIHNvcnQsIHdpbm5pbmdDb21ib3MgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgcmVuZGVyID0gKGUpID0+IHtcbiAgY29uc3QgeyBib2FyZCwgRE9NY2VsbHMsIHR1cm4gfSA9IGdhbWU7XG5cbiAgcGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgIHBsYXllci5ET013aW5zLmlubmVySFRNTCA9IGAke3BsYXllci52YWx1ZX0gOiAke3BsYXllci53aW5zLmxlbmd0aH1gO1xuICB9KTtcbiAgXG4gIGZvckVhY2goRE9NY2VsbHMsIChpbmRleCwgbm9kZSkgPT4ge1xuICAgIG5vZGUuaW5uZXJIVE1MID0gYm9hcmRbaW5kZXhdO1xuICAgIG5vZGUuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgfSk7XG5cbiAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICBhbGVydChgJHt0dXJuLnZhbHVlfSBXaW5zIWApO1xuICAgIHR1cm4ud2lucy5wdXNoKCd3aW4nKTtcbiAgICB0dXJuLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7dHVybi52YWx1ZX0gOiAke3R1cm4ud2lucy5sZW5ndGh9YDtcbiAgICBnYW1lLm5ld0dhbWUoKTtcbiAgfSBlbHNlIGlmIChib2FyZC5ldmVyeShpc05vdEVtcHR5U3RyaW5nKSkge1xuICAgIGFsZXJ0KCfwn5i4IFdpbnMhJyk7XG4gICAgZ2FtZS5uZXdHYW1lKCk7XG4gIH1cbn1cblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIHZhbHVlOiAn8J+mhCcsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtd2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ/CfkqknLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9XG5dO1xuXG5jb25zdCBnYW1lID0ge1xuICBET01ib2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyksXG4gIERPTWNlbGxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLFxuICBuZXdHYW1lICgpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy50dXJuID0gcGxheWVyc1swXTtcbiAgICAvLyBjdXN0b20gZm9yRWFjaCB1c2VkIGZvciBlbGVtZW50cyBzZWxlY3RlZCB3aXRoIHF1ZXJ5U2VsZWN0b3JBbGxcbiAgICBmb3JFYWNoKHRoaXMuRE9NY2VsbHMsIChpbmRleCwgbm9kZSkgPT4ge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKCcnKTtcbiAgICB9KTtcbiAgICByZW5kZXIoKTtcbiAgfVxufTtcblxuZ2FtZS5ET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG4gIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gIGZvckVhY2ggKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgbm9kZSkgPT4ge1xuXG4gICAgYm9hcmQubWFwKChib2FyZEl0ZW0sIGJvYXJkT3JkZXIpID0+IHtcbiAgICAgIC8vIGlmIGVsZW1lbnQgbWF0Y2hlcyBhIG5vZGUgaW4gRE9NY2VsbHMgJiBoYXMgZGF0YXNldCBjbGlja2VkIG9mIGZhbHNlXG4gICAgICBpZiAoZS50YXJnZXQgPT09IG5vZGUgJiYgZGF0YVsnY2xpY2tlZCddID09PSAnZmFsc2UnKSB7XG4gICAgICAgIC8vIGlmIHRoZSBib2FyZEluZGV4IG1hdGNoZXMgdGhlIGluZGV4IG9mIHRoZSBET01jZWxsc1xuICAgICAgICBpZiAoYm9hcmRPcmRlciA9PT0gaW5kZXgpIHtcbiAgICAgICAgICBib2FyZC5zcGxpY2UoYm9hcmRPcmRlciwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbiAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBzd2l0Y2hUdXJuKCk7XG59KTtcblxuY29uc3QgaXNOb3RFbXB0eVN0cmluZyA9IChlbCkgPT4ge1xuICByZXR1cm4gZWwgIT0gJyc7XG59XG5cbmNvbnN0IHN3aXRjaFR1cm4gPSAoKSA9PiB7XG4gIGdhbWUudHVybiA9IGdhbWUudHVybiA9PT0gcGxheWVyc1sxXSA/IHBsYXllcnNbMF0gOiBwbGF5ZXJzWzFdO1xufTtcblxuY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG4gIHJldHVybiB3aW5uaW5nQ29tYm9zLmZpbmQoKGNvbWJvKSA9PiB7XG4gICAgaWYgKGJvYXJkW2NvbWJvWzBdXSA9PT0gYm9hcmRbY29tYm9bMV1dICYmIGJvYXJkW2NvbWJvWzFdXSA9PT0gYm9hcmRbY29tYm9bMl1dKSB7XG4gICAgICByZXR1cm4gYm9hcmRbY29tYm9bMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn07XG5cbmdhbWUubmV3R2FtZSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiLyoqXG4gKiBHZW5lcmFsIFV0aWxzXG4qKi9cblxuY29uc3QgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9yRWFjaCAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcbiAgICB9XG4gIH0sXG4gIHNvcnQgKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=