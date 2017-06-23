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
	    this.cacheDOM(), this.newGame();
	  },
	  cacheDOM: function cacheDOM() {
	    this.DOMcells = document.querySelectorAll('.cell');
	    this.DOMboard = document.querySelector('.board');
	  },
	
	  players: [{
	    value: 'X',
	    selection: [],
	    DOMwins: document.querySelector('.x-wins'),
	    wins: []
	  }, {
	    value: 'O',
	    selection: [],
	    DOMwins: document.querySelector('.o-wins'),
	    wins: []
	  }],
	  newGame: function newGame() {
	    var _this = this;
	
	    this.players.map(function (player) {
	      player.selection = [];
	    });
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
	
	  var selection = game.turn.selection;
	  var data = e.target.dataset;
	
	  (0, _utils.forEach)(game.DOMcells, function (index, node) {
	    board.map(function (cell, boardIndex) {
	
	      // if node === e.target
	      // if the index of the node ===
	      var matchExactly = function matchExactly() {
	        if (node === e.target && index === boardIndex && data['clicked'] === 'false') {
	          return true;
	        }
	      };
	
	      if (matchExactly()) {
	        data['clicked'] = 'true';
	        board.splice(boardIndex, 1, game.turn.value);
	        selection.push(index);
	        selection.sort(function (a, b) {
	          return a - b;
	        });
	        e.target.innerHTML = board[index];
	        game.turn = game.turn === players[1] ? players[0] : players[1];
	
	        if (checkForWinner()) {
	          game.turn = game.turn === players[1] ? players[0] : players[1];
	          alert(game.turn.value + ' Wins!');
	          game.turn.wins.push('win');
	          game.turn.DOMwins.innerHTML = game.turn.value + ' Wins: ' + game.turn.wins.length;
	          game.newGame();
	        }
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
	
	  winningCombos: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGMxMjkwMThhYjAzNjVmMGI2OWMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJpbml0IiwiY2FjaGVET00iLCJuZXdHYW1lIiwiRE9NY2VsbHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJET01ib2FyZCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJzIiwidmFsdWUiLCJzZWxlY3Rpb24iLCJET013aW5zIiwid2lucyIsIm1hcCIsInBsYXllciIsImJvYXJkIiwidHVybiIsImluZGV4IiwicHVzaCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJ0YXJnZXQiLCJub2RlIiwiY2VsbCIsImJvYXJkSW5kZXgiLCJtYXRjaEV4YWN0bHkiLCJzcGxpY2UiLCJzb3J0IiwiYSIsImIiLCJjaGVja0Zvcldpbm5lciIsImFsZXJ0IiwibGVuZ3RoIiwiZmluZCIsImNvbWJvIiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImkiLCJjYWxsIiwid2lubmluZ0NvbWJvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esd0I7Ozs7Ozs7O0FDQUE7O0FBRUEsS0FBTUEsT0FBTztBQUNYQyxPQURXLGtCQUNIO0FBQ04sVUFBS0MsUUFBTCxJQUNBLEtBQUtDLE9BQUws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QU1HLENBQU4sQ0FBeEI7QUFDRDtBQUNGLElBTDRCOztBQU03QkUsa0JBQWUsQ0FDYixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURhLEVBQ0YsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FERSxFQUNTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFQsRUFDb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEcEIsRUFDK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEL0IsRUFDMEMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEMUMsRUFDcUQsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEckQsRUFDZ0UsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEaEU7QUFOYyxFQUEvQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRjMTI5MDE4YWIwMzY1ZjBiNjljIiwiLyoqXHJcbiAqICBXZWJwYWNrIGVudHJ5IHBvaW50XHJcbioqL1xyXG5cclxuaW1wb3J0ICcuL2FwcC5qcyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBUaWMgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBnYW1lID0ge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCksXG4gICAgdGhpcy5uZXdHYW1lKClcbiAgfSxcbiAgY2FjaGVET00gKCkge1xuICAgIHRoaXMuRE9NY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIHRoaXMuRE9NYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgfSxcbiAgcGxheWVyczogW1xuICAgIHtcbiAgICAgIHZhbHVlOiAnWCcsXG4gICAgICBzZWxlY3Rpb246IFtdLFxuICAgICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtd2lucycpLFxuICAgICAgd2luczogW11cbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnTycsXG4gICAgICBzZWxlY3Rpb246IFtdLFxuICAgICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm8td2lucycpLFxuICAgICAgd2luczogW11cbiAgICB9XG4gIF0sXG4gIG5ld0dhbWUgKCkge1xuICAgIHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLnNlbGVjdGlvbiA9IFtdO1xuICAgIH0pO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLnR1cm4gPSB0aGlzLnBsYXllcnNbMF07XG4gICAgLy8gY3VzdG9tIGZvckVhY2ggdXNlZCBmb3IgZWxlbWVudHMgc2VsZWN0ZWQgd2l0aCBxdWVyeVNlbGVjdG9yQWxsXG4gICAgZm9yRWFjaCh0aGlzLkRPTWNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLnB1c2goJycpO1xuICAgICAgdmFsdWUuaW5uZXJIVE1MID0gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICB2YWx1ZS5kYXRhc2V0WydjbGlja2VkJ10gPSAnZmFsc2UnO1xuICAgIH0pO1xuICB9XG59O1xuZ2FtZS5pbml0KCk7XG5cbmdhbWUuRE9NYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCB7IGJvYXJkLCBwbGF5ZXJzIH0gPSBnYW1lO1xuICBjb25zdCBzZWxlY3Rpb24gPSBnYW1lLnR1cm4uc2VsZWN0aW9uO1xuICBjb25zdCBkYXRhID0gZS50YXJnZXQuZGF0YXNldDtcblxuICBmb3JFYWNoIChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIG5vZGUpID0+IHtcbiAgICBib2FyZC5tYXAoKGNlbGwsIGJvYXJkSW5kZXgpID0+IHtcblxuICAgICAgLy8gaWYgbm9kZSA9PT0gZS50YXJnZXRcbiAgICAgIC8vIGlmIHRoZSBpbmRleCBvZiB0aGUgbm9kZSA9PT1cbiAgICAgIGNvbnN0IG1hdGNoRXhhY3RseSA9ICgpID0+IHtcbiAgICAgICAgaWYgKG5vZGUgPT09IGUudGFyZ2V0ICYmIGluZGV4ID09PSBib2FyZEluZGV4ICYmIGRhdGFbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAobWF0Y2hFeGFjdGx5KCkpIHtcbiAgICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgICBib2FyZC5zcGxpY2UoYm9hcmRJbmRleCwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbiAgICAgICAgc2VsZWN0aW9uLnB1c2goaW5kZXgpO1xuICAgICAgICBzZWxlY3Rpb24uc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICAgIGdhbWUudHVybiA9IGdhbWUudHVybiA9PT0gcGxheWVyc1sxXSA/IHBsYXllcnNbMF0gOiBwbGF5ZXJzWzFdO1xuXG4gICAgICAgIGlmIChjaGVja0Zvcldpbm5lcigpKSB7XG4gICAgICAgICAgZ2FtZS50dXJuID0gZ2FtZS50dXJuID09PSBwbGF5ZXJzWzFdID8gcGxheWVyc1swXSA6IHBsYXllcnNbMV07XG4gICAgICAgICAgYWxlcnQoYCR7Z2FtZS50dXJuLnZhbHVlfSBXaW5zIWApO1xuICAgICAgICAgIGdhbWUudHVybi53aW5zLnB1c2goJ3dpbicpO1xuICAgICAgICAgIGdhbWUudHVybi5ET013aW5zLmlubmVySFRNTCA9IGAke2dhbWUudHVybi52YWx1ZX0gV2luczogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5jb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBib2FyZCB9ID0gZ2FtZTtcbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5jb25zdCB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JFYWNoIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICAgIH1cbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==