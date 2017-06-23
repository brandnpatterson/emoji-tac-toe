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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjgzOGM3OWU2YjAxOWU4ODA0NmYiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInBsYXllcnMiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5zIiwiZ2FtZSIsIkRPTWJvYXJkIiwiRE9NY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmV3R2FtZSIsImJvYXJkIiwidHVybiIsImluZGV4IiwicHVzaCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJ0YXJnZXQiLCJzd2l0Y2hUdXJuIiwibm9kZSIsIm1hcCIsImJvYXJkSXRlbSIsImJvYXJkT3JkZXIiLCJzcGxpY2UiLCJjaGVja0Zvcldpbm5lciIsImFsZXJ0IiwibGVuZ3RoIiwiZmluZCIsImNvbWJvIiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImkiLCJjYWxsIiwibWF0Y2giLCJhIiwiYiIsInNvcnQiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSx3Qjs7Ozs7Ozs7QUNBQTs7QUFFQSxLQUFNQSxVQUFVLENBQ2Q7QUFDRUMsVUFBTyxHQURUO0FBRUVDLFlBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FGWDtBQUdFQyxTQUFNO0FBSFIs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SSxDQUFKLEVBQU8sQ0FBUCxDQURoRTtBQWhCYyxFQUEvQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY4MzhjNzllNmIwMTllODgwNDZmIiwiLyoqXHJcbiAqICBXZWJwYWNrIGVudHJ5IHBvaW50XHJcbioqL1xyXG5cclxuaW1wb3J0ICcuL2FwcC5qcyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBUaWMgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgbWF0Y2gsIHNvcnQsIHdpbm5pbmdDb21ib3MgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIHZhbHVlOiAnWCcsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtd2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ08nLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9XG5dO1xuXG5jb25zdCBnYW1lID0ge1xuICBET01ib2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyksXG4gIERPTWNlbGxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLFxuICBuZXdHYW1lICgpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy50dXJuID0gcGxheWVyc1swXTtcbiAgICAvLyBjdXN0b20gZm9yRWFjaCB1c2VkIGZvciBlbGVtZW50cyBzZWxlY3RlZCB3aXRoIHF1ZXJ5U2VsZWN0b3JBbGxcbiAgICBmb3JFYWNoKHRoaXMuRE9NY2VsbHMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaCgnJyk7XG4gICAgICB2YWx1ZS5pbm5lckhUTUwgPSB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgIHZhbHVlLmRhdGFzZXRbJ2NsaWNrZWQnXSA9ICdmYWxzZSc7XG4gICAgfSk7XG4gIH1cbn07XG5nYW1lLm5ld0dhbWUoKTtcblxuZ2FtZS5ET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IGdhbWU7XG4gIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gIGNvbnN0IHN3aXRjaFR1cm4gPSAoKSA9PiB7XG4gICAgZ2FtZS50dXJuID0gZ2FtZS50dXJuID09PSBwbGF5ZXJzWzFdID8gcGxheWVyc1swXSA6IHBsYXllcnNbMV07XG4gIH07XG5cbiAgZm9yRWFjaCAoZ2FtZS5ET01jZWxscywgKGluZGV4LCBub2RlKSA9PiB7XG4gICAgYm9hcmQubWFwKChib2FyZEl0ZW0sIGJvYXJkT3JkZXIpID0+IHtcbiAgICAgIC8vIGlmIGVsZW1lbnQgbWF0Y2hlcyBhIG5vZGUgaW4gRE9NY2VsbHMgJiBoYXMgZGF0YXNldCBjbGlja2VkIG9mIGZhbHNlXG4gICAgICBpZiAobWF0Y2goZS50YXJnZXQsIG5vZGUpICYmIG1hdGNoKGRhdGFbJ2NsaWNrZWQnXSwgJ2ZhbHNlJykpIHtcbiAgICAgICAgLy8gaWYgdGhlIGJvYXJkSW5kZXggbWF0Y2hlcyB0aGUgaW5kZXggb2YgdGhlIERPTWNlbGxzXG4gICAgICAgIGlmIChtYXRjaChib2FyZE9yZGVyLCBpbmRleCkpIHtcbiAgICAgICAgICBib2FyZC5zcGxpY2UoYm9hcmRPcmRlciwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbiAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgICAgc3dpdGNoVHVybigpO1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICAgIGdhbWUudHVybi53aW5zLnB1c2goJ3dpbicpO1xuICAgICAgICBnYW1lLnR1cm4uRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnM6ICR7Z2FtZS50dXJuLndpbnMubGVuZ3RofWA7XG4gICAgICAgIGdhbWUubmV3R2FtZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5jb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBib2FyZCB9ID0gZ2FtZTtcbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5jb25zdCB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JFYWNoIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICAgIH1cbiAgfSxcbiAgbWF0Y2ggKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgc29ydCAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==