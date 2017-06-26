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
	      }, 500);
	      switchTurn();
	      game.turn.wins.push('win');
	      game.turn.DOMwins.innerHTML = game.turn.value + ' : ' + game.turn.wins.length;
	    } else if (board.every(_utils.isNotEmptyString)) {
	      clearBoard();
	      setTimeout(function () {
	        clearBoard();
	        alert('😸 Wins!');
	      }, 500);
	    }
	  });
	  var clearBoard = function clearBoard() {
	    (0, _utils.forEach)(game.DOMcells, function (index, cell) {
	      board.splice(index, board.length, '');
	      cell.innerHTML = board[index];
	      cell.dataset['clicked'] = 'false';
	    });
	  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGI3NWJhOTE4OGZkM2ZmMDA5ZjYiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJET01ib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTWNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5ld0dhbWUiLCJib2FyZCIsInR1cm4iLCJwbGF5ZXJzIiwidmFsdWUiLCJET013aW5zIiwid2lucyIsInN3aXRjaFR1cm4iLCJjaGVja0Zvcldpbm5lciIsImZpbmQiLCJjb21ibyIsInJlbmRlciIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YSIsInRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImNlbGwiLCJtYXAiLCJib2FyZEl0ZW0iLCJib2FyZE9yZGVyIiwic3BsaWNlIiwiaW5uZXJIVE1MIiwic2V0VGltZW91dCIsImNsZWFyQm9hcmQiLCJhbGVydCIsInB1c2giLCJsZW5ndGgiLCJldmVyeSIsInBsYXllciIsInV0aWxzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJpIiwiY2FsbCIsImlzTm90RW1wdHlTdHJpbmciLCJlbCIsInNvcnQiLCJhIiwiYiIsIndpbm5pbmdDb21ib3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLHdCOzs7Ozs7OztBQ0FBOztBQUVBLEtBQU1BLE9BQU87QUFDWEMsYUFB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TUcsQ0FBTixDQUF4QjtBQUNEO0FBQ0YsSUFMNEI7QUFNN0JFLG1CQU42Qiw0QkFNWEMsRUFOVyxFQU1QO0FBQ3BCLFlBQU9BLE1BQU0sRUFBYjtBQUNELElBUjRCO0FBUzdCQyxPQVQ2QixnQkFTdkJDLENBVHVCLEVBU3BCQyxDQVRvQixFQVNqQjtBQUNWLFlBQU9ELElBQUlDLENBQVg7QUFDRCxJQVg0Qjs7QUFZN0JDLGtCQUFlLENBQ2IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEYSxFQUNGLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREUsRUFDUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURULEVBQ29CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHBCLEVBQytCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRC9CLEVBQzBDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRDFDLEVBQ3FELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHJELEVBQ2dFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGhFO0FBWmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4Yjc1YmE5MTg4ZmQzZmYwMDlmNiIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogRW1vamkgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgaXNOb3RFbXB0eVN0cmluZywgc29ydCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBnYW1lID0ge1xuICBET01ib2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyksXG4gIERPTWNlbGxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLFxuICBuZXdHYW1lICgpIHtcbiAgICB0aGlzLmJvYXJkID0gWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddO1xuICAgIHRoaXMudHVybiA9IHBsYXllcnNbMF07XG4gIH1cbn07XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICB2YWx1ZTogJ/CfpoQnLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9LFxuICB7XG4gICAgdmFsdWU6ICfwn5KpJyxcbiAgICBET013aW5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuby13aW5zJyksXG4gICAgd2luczogW11cbiAgfVxuXTtcblxuY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgZ2FtZS50dXJuID0gZ2FtZS50dXJuID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG59O1xuXG5jb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBib2FyZCB9ID0gZ2FtZTtcbiAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZCgoY29tYm8pID0+IHtcbiAgICBpZiAoYm9hcmRbY29tYm9bMF1dID09PSBib2FyZFtjb21ib1sxXV0gJiYgYm9hcmRbY29tYm9bMV1dID09PSBib2FyZFtjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBib2FyZFtjb21ib1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyID0gKGUpID0+IHtcbiAgZ2FtZS5uZXdHYW1lKCk7XG4gIGNvbnN0IHsgYm9hcmQsIERPTWJvYXJkLCBET01jZWxscyB9ID0gZ2FtZTtcblxuICBET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgZm9yRWFjaCAoZ2FtZS5ET01jZWxscywgKGluZGV4LCBjZWxsKSA9PiB7XG4gICAgICBib2FyZC5tYXAoKGJvYXJkSXRlbSwgYm9hcmRPcmRlcikgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGNlbGwgJiYgZGF0YVsnY2xpY2tlZCddID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgaWYgKGJvYXJkT3JkZXIgPT09IGluZGV4KSB7XG4gICAgICAgICAgICBib2FyZC5zcGxpY2UoYm9hcmRPcmRlciwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgIGRhdGFbJ2NsaWNrZWQnXSA9ICd0cnVlJztcbiAgICAgICAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChjaGVja0Zvcldpbm5lcigpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICBjbGVhckJvYXJkKCk7XG4gICAgICAgIGFsZXJ0KGAke2dhbWUudHVybi52YWx1ZX0gV2lucyFgKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICBzd2l0Y2hUdXJuKCk7XG4gICAgICBnYW1lLnR1cm4ud2lucy5wdXNoKCd3aW4nKTtcbiAgICAgIGdhbWUudHVybi5ET013aW5zLmlubmVySFRNTCA9IGAke2dhbWUudHVybi52YWx1ZX0gOiAke2dhbWUudHVybi53aW5zLmxlbmd0aH1gO1xuICAgIH0gZWxzZSBpZiAoYm9hcmQuZXZlcnkoaXNOb3RFbXB0eVN0cmluZykpIHtcbiAgICAgIGNsZWFyQm9hcmQoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbGVhckJvYXJkKCk7XG4gICAgICAgIGFsZXJ0KCfwn5i4IFdpbnMhJyk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGNsZWFyQm9hcmQgPSAoKSA9PiB7XG4gICAgZm9yRWFjaChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIGNlbGwpID0+IHtcbiAgICAgIGJvYXJkLnNwbGljZShpbmRleCwgYm9hcmQubGVuZ3RoLCAnJyk7XG4gICAgICBjZWxsLmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgIGNlbGwuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgfVxuICBwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiB7XG4gICAgcGxheWVyLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7cGxheWVyLnZhbHVlfSA6ICR7cGxheWVyLndpbnMubGVuZ3RofWA7XG4gIH0pO1xufVxucmVuZGVyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiLCIvKipcbiAqIEdlbmVyYWwgVXRpbHNcbioqL1xuXG5jb25zdCB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JFYWNoIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICAgIH1cbiAgfSxcbiAgaXNOb3RFbXB0eVN0cmluZyAoZWwpIHtcbiAgICByZXR1cm4gZWwgIT0gJyc7XG4gIH0sXG4gIHNvcnQgKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=