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
	  board: [],
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
	  DOMwins: document.querySelector('.player-one-wins'),
	  wins: []
	}, {
	  value: '💩',
	  DOMwins: document.querySelector('.player-two-wins'),
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
	
	var view = function view(e) {
	  var board = game.board,
	      DOMboard = game.DOMboard,
	      DOMcells = game.DOMcells;
	
	
	  var attatchListener = function attatchListener() {
	    DOMboard.addEventListener('click', render);
	  };
	
	  var detatchListener = function detatchListener() {
	    DOMboard.removeEventListener('click', render);
	  };
	
	  var clearDOM = function clearDOM() {
	    (0, _utils.forEach)(game.DOMcells, function (index, cell) {
	      cell.innerHTML = board[index];
	      cell.dataset['clicked'] = 'false';
	    });
	  };
	
	  players.map(function (player) {
	    player.DOMwins.innerHTML = player.value + ' : ' + player.wins.length;
	  });
	
	  function render(e) {
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
	      detatchListener();
	      setTimeout(function () {
	        alert(game.turn.value + ' Wins!');
	        addWin();
	        game.turn.DOMwins.innerHTML = game.turn.value + ' : ' + game.turn.wins.length;
	        game.newGame();
	        clearDOM();
	        attatchListener();
	      }, 450);
	    } else if (board.every(_utils.isNotEmptyString)) {
	      setTimeout(function () {
	        alert('😸 Wins!');
	        game.newGame();
	        clearDOM();
	      }, 100);
	    }
	  }
	  game.newGame();
	  attatchListener();
	};
	
	view();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjg2YjY1YTUyOWZmMzAzNzIzNTEiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJET01ib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTWNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImJvYXJkIiwibmV3R2FtZSIsInR1cm4iLCJwbGF5ZXJzIiwiaSIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJ3aW5zIiwiYWRkV2luIiwiYWRkVmFsdWVUb0JvYXJkIiwiYm9hcmRJbmRleCIsImNoZWNrRm9yV2lubmVyIiwiZmluZCIsImNvbWJvIiwic3dpdGNoVHVybiIsInZpZXciLCJlIiwiYXR0YXRjaExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRldGF0Y2hMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhckRPTSIsImluZGV4IiwiY2VsbCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJtYXAiLCJwbGF5ZXIiLCJkYXRhIiwidGFyZ2V0IiwiYm9hcmRJdGVtIiwic2V0VGltZW91dCIsImFsZXJ0IiwiZXZlcnkiLCJ1dGlscyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwiY2FsbCIsImlzTm90RW1wdHlTdHJpbmciLCJlbCIsInNvcnQiLCJhIiwiYiIsIndpbm5pbmdDb21ib3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVB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SSxDQUFKLEVBQU8sQ0FBUCxDQURULEVBQ29CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHBCLEVBQytCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRC9CLEVBQzBDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRDFDLEVBQ3FELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHJELEVBQ2dFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGhFO0FBWmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiODZiNjVhNTI5ZmYzMDM3MjM1MSIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogRW1vamkgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgaXNOb3RFbXB0eVN0cmluZywgc29ydCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBnYW1lID0ge1xuICBET01ib2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyksXG4gIERPTWNlbGxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLFxuICBib2FyZDogW10sXG4gIG5ld0dhbWUgKCkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMV07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuRE9NY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmJvYXJkLnB1c2goJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ib2FyZC5zcGxpY2UoaSwgdGhpcy5ib2FyZC5sZW5ndGgsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICB2YWx1ZTogJ/CfpoQnLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9LFxuICB7XG4gICAgdmFsdWU6ICfwn5KpJyxcbiAgICBET013aW5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by13aW5zJyksXG4gICAgd2luczogW11cbiAgfVxuXTtcblxuY29uc3QgYWRkV2luID0gKCkgPT4ge1xuICBnYW1lLnR1cm4ud2lucy5wdXNoKCd3aW4nKTtcbn07XG5cbmNvbnN0IGFkZFZhbHVlVG9Cb2FyZCA9IChib2FyZEluZGV4KSA9PiB7XG4gIGdhbWUuYm9hcmQuc3BsaWNlKGJvYXJkSW5kZXgsIDEsIGdhbWUudHVybi52YWx1ZSk7XG59O1xuXG5jb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBib2FyZCB9ID0gZ2FtZTtcblxuICByZXR1cm4gd2lubmluZ0NvbWJvcy5maW5kKChjb21ibykgPT4ge1xuICAgIGlmIChib2FyZFtjb21ib1swXV0gPT09IGJvYXJkW2NvbWJvWzFdXSAmJiBib2FyZFtjb21ib1sxXV0gPT09IGJvYXJkW2NvbWJvWzJdXSkge1xuICAgICAgcmV0dXJuIGJvYXJkW2NvbWJvWzBdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzd2l0Y2hUdXJuID0gKCkgPT4ge1xuICBpZiAoZ2FtZS50dXJuID09PSBwbGF5ZXJzWzFdKSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1swXTtcbiAgfSBlbHNlIHtcbiAgICBnYW1lLnR1cm4gPSBwbGF5ZXJzWzFdO1xuICB9XG59O1xuXG5jb25zdCB2aWV3ID0gKGUpID0+IHtcbiAgY29uc3QgeyBib2FyZCwgRE9NYm9hcmQsIERPTWNlbGxzIH0gPSBnYW1lO1xuXG4gIGNvbnN0IGF0dGF0Y2hMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XG4gIH07XG5cbiAgY29uc3QgZGV0YXRjaExpc3RlbmVyID0gKCkgPT4ge1xuICAgIERPTWJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckRPTSA9ICgpID0+IHtcbiAgICBmb3JFYWNoKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgY2VsbCkgPT4ge1xuICAgICAgY2VsbC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICBjZWxsLmRhdGFzZXRbJ2NsaWNrZWQnXSA9ICdmYWxzZSc7XG4gICAgfSk7XG4gIH07XG5cbiAgcGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgIHBsYXllci5ET013aW5zLmlubmVySFRNTCA9IGAke3BsYXllci52YWx1ZX0gOiAke3BsYXllci53aW5zLmxlbmd0aH1gO1xuICB9KTtcblxuICBmdW5jdGlvbiByZW5kZXIgKGUpIHtcbiAgICBjb25zdCBkYXRhID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBmb3JFYWNoIChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIGNlbGwpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gY2VsbCAmJiBkYXRhWydjbGlja2VkJ10gPT09ICdmYWxzZScpIHtcbiAgICAgICAgYm9hcmQubWFwKChib2FyZEl0ZW0sIGJvYXJkSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoYm9hcmRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICAgICAgICAgIGFkZFZhbHVlVG9Cb2FyZChib2FyZEluZGV4KTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgIGRhdGFbJ2NsaWNrZWQnXSA9ICd0cnVlJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgIGRldGF0Y2hMaXN0ZW5lcigpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgYWxlcnQoYCR7Z2FtZS50dXJuLnZhbHVlfSBXaW5zIWApO1xuICAgICAgICBhZGRXaW4oKTtcbiAgICAgICAgZ2FtZS50dXJuLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7Z2FtZS50dXJuLnZhbHVlfSA6ICR7Z2FtZS50dXJuLndpbnMubGVuZ3RofWA7XG4gICAgICAgIGdhbWUubmV3R2FtZSgpO1xuICAgICAgICBjbGVhckRPTSgpO1xuICAgICAgICBhdHRhdGNoTGlzdGVuZXIoKTtcbiAgICAgIH0sIDQ1MCk7XG4gICAgfSBlbHNlIGlmIChib2FyZC5ldmVyeShpc05vdEVtcHR5U3RyaW5nKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCfwn5i4IFdpbnMhJyk7XG4gICAgICAgIGdhbWUubmV3R2FtZSgpO1xuICAgICAgICBjbGVhckRPTSgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIGF0dGF0Y2hMaXN0ZW5lcigpO1xufVxuXG52aWV3KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiLCIvKipcbiAqIEdlbmVyYWwgVXRpbHNcbioqL1xuXG5jb25zdCB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JFYWNoIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICAgIH1cbiAgfSxcbiAgaXNOb3RFbXB0eVN0cmluZyAoZWwpIHtcbiAgICByZXR1cm4gZWwgIT0gJyc7XG4gIH0sXG4gIHNvcnQgKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=