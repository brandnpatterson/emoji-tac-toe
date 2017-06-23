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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjIyYWJlNTdiMDc5NDk5OGIwNDIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInBsYXllcnMiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5zIiwiZ2FtZSIsIkRPTWJvYXJkIiwiRE9NY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmV3R2FtZSIsImJvYXJkIiwidHVybiIsImluZGV4IiwicHVzaCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJ0YXJnZXQiLCJzd2l0Y2hUdXJuIiwibm9kZSIsIm1hcCIsImJvYXJkSXRlbSIsImJvYXJkT3JkZXIiLCJzcGxpY2UiLCJjaGVja0Zvcldpbm5lciIsImFsZXJ0IiwibGVuZ3RoIiwiZmluZCIsImNvbWJvIiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImkiLCJjYWxsIiwibWF0Y2giLCJhIiwiYiIsInNvcnQiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSx3Qjs7Ozs7Ozs7QUNBQTs7QUFFQSxLQUFNQSxVQUFVLENBQ2Q7QUFDRUMsVUFBTyxHQURUO0FBRUVDLFlBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FGWDtBQUdFQyxTQUFNO0FBSFIs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LENBQUosRUFBTyxDQUFQLENBRGhFO0FBaEJjLEVBQS9CLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjIyYWJlNTdiMDc5NDk5OGIwNDIiLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIFRpYyBUYWMgVG9lIEdhbWVcbioqL1xuXG5pbXBvcnQgeyBmb3JFYWNoLCBtYXRjaCwgc29ydCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBwbGF5ZXJzID0gW1xuICB7XG4gICAgdmFsdWU6ICdYJyxcbiAgICBET013aW5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueC13aW5zJyksXG4gICAgd2luczogW11cbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnTycsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm8td2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH1cbl07XG5cbmNvbnN0IGdhbWUgPSB7XG4gIERPTWJvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSxcbiAgRE9NY2VsbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyksXG4gIG5ld0dhbWUgKCkge1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLnR1cm4gPSBwbGF5ZXJzWzBdO1xuICAgIC8vIGN1c3RvbSBmb3JFYWNoIHVzZWQgZm9yIGVsZW1lbnRzIHNlbGVjdGVkIHdpdGggcXVlcnlTZWxlY3RvckFsbFxuICAgIGZvckVhY2godGhpcy5ET01jZWxscywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKCcnKTtcbiAgICAgIHZhbHVlLmlubmVySFRNTCA9IHRoaXMuYm9hcmRbaW5kZXhdO1xuICAgICAgdmFsdWUuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgfVxufTtcbmdhbWUubmV3R2FtZSgpO1xuXG5nYW1lLkRPTWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgeyBib2FyZCB9ID0gZ2FtZTtcbiAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gIGNvbnN0IHN3aXRjaFR1cm4gPSAoKSA9PiB7XG4gICAgZ2FtZS50dXJuID0gZ2FtZS50dXJuID09PSBwbGF5ZXJzWzFdID8gcGxheWVyc1swXSA6IHBsYXllcnNbMV07XG4gIH07XG4gIGZvckVhY2ggKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgbm9kZSkgPT4ge1xuICAgIGJvYXJkLm1hcCgoYm9hcmRJdGVtLCBib2FyZE9yZGVyKSA9PiB7XG4gICAgICAvLyBpZiBlbGVtZW50IG1hdGNoZXMgYSBub2RlIGluIERPTWNlbGxzICYgaGFzIGRhdGFzZXQgY2xpY2tlZCBvZiBmYWxzZVxuICAgICAgaWYgKG1hdGNoKGUudGFyZ2V0LCBub2RlKSAmJiBtYXRjaChkYXRhWydjbGlja2VkJ10sICdmYWxzZScpKSB7XG4gICAgICAgIC8vIGlmIHRoZSBib2FyZEluZGV4IG1hdGNoZXMgdGhlIGluZGV4IG9mIHRoZSBET01jZWxsc1xuICAgICAgICBpZiAobWF0Y2goYm9hcmRPcmRlciwgaW5kZXgpKSB7XG4gICAgICAgICAgYm9hcmQuc3BsaWNlKGJvYXJkT3JkZXIsIDEsIGdhbWUudHVybi52YWx1ZSk7XG4gICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYm9hcmRbaW5kZXhdO1xuICAgICAgICAgIGRhdGFbJ2NsaWNrZWQnXSA9ICd0cnVlJztcbiAgICAgICAgICBzd2l0Y2hUdXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjaGVja0Zvcldpbm5lcigpKSB7XG4gICAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICAgICAgYWxlcnQoYCR7Z2FtZS50dXJuLnZhbHVlfSBXaW5zIWApO1xuICAgICAgICBnYW1lLnR1cm4ud2lucy5wdXNoKCd3aW4nKTtcbiAgICAgICAgZ2FtZS50dXJuLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7Z2FtZS50dXJuLnZhbHVlfSBXaW5zOiAke2dhbWUudHVybi53aW5zLmxlbmd0aH1gO1xuICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcblxuY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG4gIHJldHVybiB3aW5uaW5nQ29tYm9zLmZpbmQoKGNvbWJvKSA9PiB7XG4gICAgaWYgKGJvYXJkW2NvbWJvWzBdXSA9PT0gYm9hcmRbY29tYm9bMV1dICYmIGJvYXJkW2NvbWJvWzFdXSA9PT0gYm9hcmRbY29tYm9bMl1dKSB7XG4gICAgICByZXR1cm4gYm9hcmRbY29tYm9bMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiLCIvKipcbiAqIEdlbmVyYWwgVXRpbHNcbioqL1xuXG5jb25zdCB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JFYWNoIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICAgIH1cbiAgfSxcbiAgbWF0Y2ggKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgc29ydCAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==