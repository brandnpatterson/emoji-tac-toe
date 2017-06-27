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
	
	var render = function render(e) {
	  game.newGame();
	
	  var board = game.board,
	      DOMboard = game.DOMboard,
	      DOMcells = game.DOMcells;
	
	
	  var clearDOM = function clearDOM() {
	    var board = game.board;
	
	
	    (0, _utils.forEach)(game.DOMcells, function (index, cell) {
	      cell.innerHTML = board[index];
	      cell.dataset['clicked'] = 'false';
	    });
	  };
	
	  DOMboard.addEventListener('click', listenForEvent);
	
	  function listenForEvent(e) {
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
	      setTimeout(function () {
	        alert(game.turn.value + ' Wins!');
	        addWin();
	        game.turn.DOMwins.innerHTML = game.turn.value + ' : ' + game.turn.wins.length;
	        game.newGame();
	        clearDOM();
	      }, 450);
	    } else if (board.every(_utils.isNotEmptyString)) {
	      setTimeout(function () {
	        alert('😸 Wins!');
	        game.newGame();
	        clearDOM();
	      }, 100);
	    }
	  }
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzY2MTQwYjc5MjgzMmQ5YTVjMDAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJET01ib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTWNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImJvYXJkIiwibmV3R2FtZSIsInR1cm4iLCJwbGF5ZXJzIiwiaSIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJ3aW5zIiwiYWRkV2luIiwiYWRkVmFsdWVUb0JvYXJkIiwiYm9hcmRJbmRleCIsImNoZWNrRm9yV2lubmVyIiwiZmluZCIsImNvbWJvIiwic3dpdGNoVHVybiIsInJlbmRlciIsImUiLCJjbGVhckRPTSIsImluZGV4IiwiY2VsbCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuRm9yRXZlbnQiLCJkYXRhIiwidGFyZ2V0IiwibWFwIiwiYm9hcmRJdGVtIiwic2V0VGltZW91dCIsImFsZXJ0IiwiZXZlcnkiLCJwbGF5ZXIiLCJ1dGlscyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwiY2FsbCIsImlzTm90RW1wdHlTdHJpbmciLCJlbCIsInNvcnQiLCJhIiwiYiIsIndpbm5pbmdDb21ib3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENB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Q3FELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHJELEVBQ2dFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGhFO0FBWmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNjYxNDBiNzkyODMyZDlhNWMwMCIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogRW1vamkgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgaXNOb3RFbXB0eVN0cmluZywgc29ydCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBnYW1lID0ge1xuICBET01ib2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyksXG4gIERPTWNlbGxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLFxuICBib2FyZDogWychJywgJyEnXSxcbiAgbmV3R2FtZSAoKSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1sxXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ET01jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYm9hcmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJvYXJkLnNwbGljZShpLCB0aGlzLmJvYXJkLmxlbmd0aCwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIHZhbHVlOiAn8J+mhCcsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtd2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ/CfkqknLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9XG5dO1xuXG5jb25zdCBhZGRXaW4gPSAoKSA9PiB7XG4gIGdhbWUudHVybi53aW5zLnB1c2goJ3dpbicpO1xufTtcblxuY29uc3QgYWRkVmFsdWVUb0JvYXJkID0gKGJvYXJkSW5kZXgpID0+IHtcbiAgZ2FtZS5ib2FyZC5zcGxpY2UoYm9hcmRJbmRleCwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuXG4gIHJldHVybiB3aW5uaW5nQ29tYm9zLmZpbmQoKGNvbWJvKSA9PiB7XG4gICAgaWYgKGJvYXJkW2NvbWJvWzBdXSA9PT0gYm9hcmRbY29tYm9bMV1dICYmIGJvYXJkW2NvbWJvWzFdXSA9PT0gYm9hcmRbY29tYm9bMl1dKSB7XG4gICAgICByZXR1cm4gYm9hcmRbY29tYm9bMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHN3aXRjaFR1cm4gPSAoKSA9PiB7XG4gIGlmIChnYW1lLnR1cm4gPT09IHBsYXllcnNbMV0pIHtcbiAgICBnYW1lLnR1cm4gPSBwbGF5ZXJzWzBdO1xuICB9IGVsc2Uge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMV07XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlciA9IChlKSA9PiB7XG4gIGdhbWUubmV3R2FtZSgpO1xuXG4gIGNvbnN0IHsgYm9hcmQsIERPTWJvYXJkLCBET01jZWxscyB9ID0gZ2FtZTtcblxuICBjb25zdCBjbGVhckRPTSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuXG4gICAgZm9yRWFjaChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIGNlbGwpID0+IHtcbiAgICAgIGNlbGwuaW5uZXJIVE1MID0gYm9hcmRbaW5kZXhdO1xuICAgICAgY2VsbC5kYXRhc2V0WydjbGlja2VkJ10gPSAnZmFsc2UnO1xuICAgIH0pO1xuICB9O1xuXG4gIERPTWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yRXZlbnQpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkZvckV2ZW50IChlKSB7XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgZm9yRWFjaCAoZ2FtZS5ET01jZWxscywgKGluZGV4LCBjZWxsKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGNlbGwgJiYgZGF0YVsnY2xpY2tlZCddID09PSAnZmFsc2UnKSB7XG4gICAgICAgIGJvYXJkLm1hcCgoYm9hcmRJdGVtLCBib2FyZEluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGJvYXJkSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBzd2l0Y2hUdXJuKCk7XG4gICAgICAgICAgICBhZGRWYWx1ZVRvQm9hcmQoYm9hcmRJbmRleCk7XG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICAgICAgICBkYXRhWydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjaGVja0Zvcldpbm5lcigpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICAgIGFkZFdpbigpO1xuICAgICAgICBnYW1lLnR1cm4uRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtnYW1lLnR1cm4udmFsdWV9IDogJHtnYW1lLnR1cm4ud2lucy5sZW5ndGh9YDtcbiAgICAgICAgZ2FtZS5uZXdHYW1lKCk7XG4gICAgICAgIGNsZWFyRE9NKCk7XG4gICAgICB9LCA0NTApO1xuICAgIH0gZWxzZSBpZiAoYm9hcmQuZXZlcnkoaXNOb3RFbXB0eVN0cmluZykpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhbGVydCgn8J+YuCBXaW5zIScpO1xuICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgcGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgIHBsYXllci5ET013aW5zLmlubmVySFRNTCA9IGAke3BsYXllci52YWx1ZX0gOiAke3BsYXllci53aW5zLmxlbmd0aH1gO1xuICB9KTtcbn1cblxucmVuZGVyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiLCIvKipcbiAqIEdlbmVyYWwgVXRpbHNcbioqL1xuXG5jb25zdCB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JFYWNoIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICAgIH1cbiAgfSxcbiAgaXNOb3RFbXB0eVN0cmluZyAoZWwpIHtcbiAgICByZXR1cm4gZWwgIT0gJyc7XG4gIH0sXG4gIHNvcnQgKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=