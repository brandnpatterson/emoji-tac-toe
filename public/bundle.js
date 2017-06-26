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
	  newGame: function newGame() {
	    this.board = ['', '', '', '', '', '', '', '', ''];
	    this.turn = players[0];
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
	
	var switchTurn = function switchTurn() {
	  game.turn = game.turn === players[0] ? players[1] : players[0];
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
	
	var clearBoard = function clearBoard() {
	  var board = game.board;
	
	  (0, _utils.forEach)(game.DOMcells, function (index, cell) {
	    board.splice(index, board.length, '');
	    cell.innerHTML = board[index];
	    cell.dataset['clicked'] = 'false';
	  });
	};
	
	var render = function render(e) {
	  game.newGame();
	  var board = game.board,
	      DOMboard = game.DOMboard,
	      DOMcells = game.DOMcells;
	
	
	  DOMboard.addEventListener('click', function (e) {
	    var data = e.target.dataset;
	    (0, _utils.forEach)(game.DOMcells, function (index, cell) {
	      board.map(function (boardItem, boardOrder) {
	        if (e.target === cell && data['clicked'] === 'false') {
	          if (boardOrder === index) {
	            board.splice(boardOrder, 1, game.turn.value);
	            e.target.innerHTML = board[index];
	            data['clicked'] = 'true';
	            switchTurn();
	          }
	        }
	      });
	    });
	    if (checkForWinner()) {
	      setTimeout(function () {
	        clearBoard();
	        alert(game.turn.value + ' Wins!');
	      }, 450);
	      switchTurn();
	      game.turn.wins.push('win');
	      game.turn.DOMwins.innerHTML = game.turn.value + ' : ' + game.turn.wins.length;
	    } else if (board.every(_utils.isNotEmptyString)) {
	      clearBoard();
	      setTimeout(function () {
	        clearBoard();
	        alert('😸 Wins!');
	      }, 450);
	    }
	  });
	  players.map(function (player) {
	    player.DOMwins.innerHTML = player.value + ' : ' + player.wins.length;
	  });
	};
	
	render();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDg1NTJkMzFiYjUyNDRlMGE5YmMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJET01ib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTWNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5ld0dhbWUiLCJib2FyZCIsInR1cm4iLCJwbGF5ZXJzIiwidmFsdWUiLCJET013aW5zIiwid2lucyIsInN3aXRjaFR1cm4iLCJjaGVja0Zvcldpbm5lciIsImZpbmQiLCJjb21ibyIsImNsZWFyQm9hcmQiLCJpbmRleCIsImNlbGwiLCJzcGxpY2UiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwicmVuZGVyIiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhIiwidGFyZ2V0IiwibWFwIiwiYm9hcmRJdGVtIiwiYm9hcmRPcmRlciIsInNldFRpbWVvdXQiLCJhbGVydCIsInB1c2giLCJldmVyeSIsInBsYXllciIsInV0aWxzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJpIiwiY2FsbCIsImlzTm90RW1wdHlTdHJpbmciLCJlbCIsInNvcnQiLCJhIiwiYiIsIndpbm5pbmdDb21ib3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLHdCOzs7Ozs7OztBQ0FBOztBQUVBLEtBQU1BLE9BQU87QUFDWEMsYUFB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QWQsRUFBcUJDLENBQXJCLEVBQXdCSCxNQUFNRyxDQUFOLENBQXhCO0FBQ0Q7QUFDRixJQUw0QjtBQU03QkUsbUJBTjZCLDRCQU1YQyxFQU5XLEVBTVA7QUFDcEIsWUFBT0EsTUFBTSxFQUFiO0FBQ0QsSUFSNEI7QUFTN0JDLE9BVDZCLGdCQVN2QkMsQ0FUdUIsRUFTcEJDLENBVG9CLEVBU2pCO0FBQ1YsWUFBT0QsSUFBSUMsQ0FBWDtBQUNELElBWDRCOztBQVk3QkMsa0JBQWUsQ0FDYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURhLEVBQ0YsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FERSxFQUNTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFQsRUFDb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEcEIsRUFDK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEL0IsRUFDMEMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEMUMsRUFDcUQsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEckQsRUFDZ0UsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEaEU7QUFaYyxFQUEvQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ4NTUyZDMxYmI1MjQ0ZTBhOWJjIiwiLyoqXHJcbiAqICBXZWJwYWNrIGVudHJ5IHBvaW50XHJcbioqL1xyXG5cclxuaW1wb3J0ICcuL2FwcC5qcyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBFbW9qaSBUYWMgVG9lIEdhbWVcbioqL1xuXG5pbXBvcnQgeyBmb3JFYWNoLCBpc05vdEVtcHR5U3RyaW5nLCBzb3J0LCB3aW5uaW5nQ29tYm9zIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGdhbWUgPSB7XG4gIERPTWJvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSxcbiAgRE9NY2VsbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyksXG4gIG5ld0dhbWUgKCkge1xuICAgIHRoaXMuYm9hcmQgPSBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ107XG4gICAgdGhpcy50dXJuID0gcGxheWVyc1swXTtcbiAgfVxufTtcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIHZhbHVlOiAn8J+mhCcsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtd2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ/CfkqknLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9XG5dO1xuXG5jb25zdCBzd2l0Y2hUdXJuID0gKCkgPT4ge1xuICBnYW1lLnR1cm4gPSBnYW1lLnR1cm4gPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuICByZXR1cm4gd2lubmluZ0NvbWJvcy5maW5kKChjb21ibykgPT4ge1xuICAgIGlmIChib2FyZFtjb21ib1swXV0gPT09IGJvYXJkW2NvbWJvWzFdXSAmJiBib2FyZFtjb21ib1sxXV0gPT09IGJvYXJkW2NvbWJvWzJdXSkge1xuICAgICAgcmV0dXJuIGJvYXJkW2NvbWJvWzBdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjbGVhckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuICBmb3JFYWNoKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgY2VsbCkgPT4ge1xuICAgIGJvYXJkLnNwbGljZShpbmRleCwgYm9hcmQubGVuZ3RoLCAnJyk7XG4gICAgY2VsbC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgY2VsbC5kYXRhc2V0WydjbGlja2VkJ10gPSAnZmFsc2UnO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlciA9IChlKSA9PiB7XG4gIGdhbWUubmV3R2FtZSgpO1xuICBjb25zdCB7IGJvYXJkLCBET01ib2FyZCwgRE9NY2VsbHMgfSA9IGdhbWU7XG5cbiAgRE9NYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgIGZvckVhY2ggKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgY2VsbCkgPT4ge1xuICAgICAgYm9hcmQubWFwKChib2FyZEl0ZW0sIGJvYXJkT3JkZXIpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBjZWxsICYmIGRhdGFbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgIGlmIChib2FyZE9yZGVyID09PSBpbmRleCkge1xuICAgICAgICAgICAgYm9hcmQuc3BsaWNlKGJvYXJkT3JkZXIsIDEsIGdhbWUudHVybi52YWx1ZSk7XG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICAgICAgICBkYXRhWydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gICAgICAgICAgICBzd2l0Y2hUdXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoY2hlY2tGb3JXaW5uZXIoKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgY2xlYXJCb2FyZCgpO1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICB9LCA0NTApO1xuICAgICAgc3dpdGNoVHVybigpO1xuICAgICAgZ2FtZS50dXJuLndpbnMucHVzaCgnd2luJyk7XG4gICAgICBnYW1lLnR1cm4uRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtnYW1lLnR1cm4udmFsdWV9IDogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICB9IGVsc2UgaWYgKGJvYXJkLmV2ZXJ5KGlzTm90RW1wdHlTdHJpbmcpKSB7XG4gICAgICBjbGVhckJvYXJkKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xlYXJCb2FyZCgpO1xuICAgICAgICBhbGVydCgn8J+YuCBXaW5zIScpO1xuICAgICAgfSwgNDUwKTtcbiAgICB9XG4gIH0pO1xuICBwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiB7XG4gICAgcGxheWVyLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7cGxheWVyLnZhbHVlfSA6ICR7cGxheWVyLndpbnMubGVuZ3RofWA7XG4gIH0pO1xufVxuXG5yZW5kZXIoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5cbmNvbnN0IHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZvckVhY2ggKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gICAgfVxuICB9LFxuICBpc05vdEVtcHR5U3RyaW5nIChlbCkge1xuICAgIHJldHVybiBlbCAhPSAnJztcbiAgfSxcbiAgc29ydCAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==