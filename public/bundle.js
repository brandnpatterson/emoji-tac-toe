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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTNjZDlmMjlkYTgzM2MyY2RlZTciLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInBsYXllcnMiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5zIiwiZ2FtZSIsIkRPTWJvYXJkIiwiRE9NY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmV3R2FtZSIsImJvYXJkIiwidHVybiIsImluZGV4IiwicHVzaCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRhdGEiLCJ0YXJnZXQiLCJzd2l0Y2hUdXJuIiwibm9kZSIsIm1hcCIsImJvYXJkSXRlbSIsImJvYXJkT3JkZXIiLCJzcGxpY2UiLCJjaGVja0Zvcldpbm5lciIsImFsZXJ0IiwibGVuZ3RoIiwiZmluZCIsImNvbWJvIiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImkiLCJjYWxsIiwibWF0Y2giLCJhIiwiYiIsInNvcnQiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSx3Qjs7Ozs7Ozs7QUNBQTs7QUFFQSxLQUFNQSxVQUFVLENBQ2Q7QUFDRUMsVUFBTyxHQURUO0FBRUVDLFlBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FGWDtBQUdFQyxTQUFNO0FBSFIs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Q0FBSixFQUFPLENBQVAsQ0FEaEU7QUFoQmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5M2NkOWYyOWRhODMzYzJjZGVlNyIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogVGljIFRhYyBUb2UgR2FtZVxuKiovXG5cbmltcG9ydCB7IGZvckVhY2gsIG1hdGNoLCBzb3J0LCB3aW5uaW5nQ29tYm9zIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICB2YWx1ZTogJ1gnLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdPJyxcbiAgICBET013aW5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuby13aW5zJyksXG4gICAgd2luczogW11cbiAgfVxuXTtcblxuY29uc3QgZ2FtZSA9IHtcbiAgRE9NYm9hcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLFxuICBET01jZWxsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSxcbiAgbmV3R2FtZSAoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMudHVybiA9IHBsYXllcnNbMF07XG4gICAgLy8gY3VzdG9tIGZvckVhY2ggdXNlZCBmb3IgZWxlbWVudHMgc2VsZWN0ZWQgd2l0aCBxdWVyeVNlbGVjdG9yQWxsXG4gICAgZm9yRWFjaCh0aGlzLkRPTWNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLnB1c2goJycpO1xuICAgICAgdmFsdWUuaW5uZXJIVE1MID0gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICB2YWx1ZS5kYXRhc2V0WydjbGlja2VkJ10gPSAnZmFsc2UnO1xuICAgIH0pO1xuICB9XG59O1xuZ2FtZS5uZXdHYW1lKCk7XG5cbmdhbWUuRE9NYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuICBjb25zdCBkYXRhID0gZS50YXJnZXQuZGF0YXNldDtcbiAgY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgICBnYW1lLnR1cm4gPSBnYW1lLnR1cm4gPT09IHBsYXllcnNbMV0gPyBwbGF5ZXJzWzBdIDogcGxheWVyc1sxXTtcbiAgfTtcbiAgZm9yRWFjaCAoZ2FtZS5ET01jZWxscywgKGluZGV4LCBub2RlKSA9PiB7XG4gICAgYm9hcmQubWFwKChib2FyZEl0ZW0sIGJvYXJkT3JkZXIpID0+IHtcbiAgICAgIC8vIGlmIGVsZW1lbnQgbWF0Y2hlcyBhIG5vZGUgaW4gRE9NY2VsbHMgJiBoYXMgZGF0YXNldCBjbGlja2VkIG9mIGZhbHNlXG4gICAgICBpZiAobWF0Y2goZS50YXJnZXQsIG5vZGUpICYmIG1hdGNoKGRhdGFbJ2NsaWNrZWQnXSwgJ2ZhbHNlJykpIHtcbiAgICAgICAgLy8gaWYgdGhlIGJvYXJkSW5kZXggbWF0Y2hlcyB0aGUgaW5kZXggb2YgdGhlIERPTWNlbGxzXG4gICAgICAgIGlmIChtYXRjaChib2FyZE9yZGVyLCBpbmRleCkpIHtcbiAgICAgICAgICBib2FyZC5zcGxpY2UoYm9hcmRPcmRlciwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbiAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgICAgc3dpdGNoVHVybigpO1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICAgIGdhbWUudHVybi53aW5zLnB1c2goJ3dpbicpO1xuICAgICAgICBnYW1lLnR1cm4uRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnM6ICR7Z2FtZS50dXJuLndpbnMubGVuZ3RofWA7XG4gICAgICAgIGdhbWUubmV3R2FtZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5jb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBib2FyZCB9ID0gZ2FtZTtcbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5jb25zdCB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JFYWNoIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICAgIH1cbiAgfSxcbiAgbWF0Y2ggKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgc29ydCAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==