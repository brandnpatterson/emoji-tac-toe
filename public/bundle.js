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
	
	
	  var initiateListener = function initiateListener() {
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
	        initiateListener();
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
	  initiateListener();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWZiZGRkODQ1OTJlZTNmZWMwNWYiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJET01ib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTWNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImJvYXJkIiwibmV3R2FtZSIsInR1cm4iLCJwbGF5ZXJzIiwiaSIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJ3aW5zIiwiYWRkV2luIiwiYWRkVmFsdWVUb0JvYXJkIiwiYm9hcmRJbmRleCIsImNoZWNrRm9yV2lubmVyIiwiZmluZCIsImNvbWJvIiwic3dpdGNoVHVybiIsInZpZXciLCJlIiwiaW5pdGlhdGVMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJkZXRhdGNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJET00iLCJpbmRleCIsImNlbGwiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwibWFwIiwicGxheWVyIiwiZGF0YSIsInRhcmdldCIsImJvYXJkSXRlbSIsInNldFRpbWVvdXQiLCJhbGVydCIsImV2ZXJ5IiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImNhbGwiLCJpc05vdEVtcHR5U3RyaW5nIiwiZWwiLCJzb3J0IiwiYSIsImIiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFF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QUFJLENBQUosRUFBTyxDQUFQLENBRFQsRUFDb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEcEIsRUFDK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEL0IsRUFDMEMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEMUMsRUFDcUQsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEckQsRUFDZ0UsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEaEU7QUFaYyxFQUEvQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFmYmRkZDg0NTkyZWUzZmVjMDVmIiwiLyoqXHJcbiAqICBXZWJwYWNrIGVudHJ5IHBvaW50XHJcbioqL1xyXG5cclxuaW1wb3J0ICcuL2FwcC5qcyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBFbW9qaSBUYWMgVG9lIEdhbWVcbioqL1xuXG5pbXBvcnQgeyBmb3JFYWNoLCBpc05vdEVtcHR5U3RyaW5nLCBzb3J0LCB3aW5uaW5nQ29tYm9zIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGdhbWUgPSB7XG4gIERPTWJvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSxcbiAgRE9NY2VsbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyksXG4gIGJvYXJkOiBbXSxcbiAgbmV3R2FtZSAoKSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1sxXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ET01jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYm9hcmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJvYXJkLnNwbGljZShpLCB0aGlzLmJvYXJkLmxlbmd0aCwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIHZhbHVlOiAn8J+mhCcsXG4gICAgRE9Nd2luczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtd2lucycpLFxuICAgIHdpbnM6IFtdXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ/CfkqknLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9XG5dO1xuXG5jb25zdCBhZGRXaW4gPSAoKSA9PiB7XG4gIGdhbWUudHVybi53aW5zLnB1c2goJ3dpbicpO1xufTtcblxuY29uc3QgYWRkVmFsdWVUb0JvYXJkID0gKGJvYXJkSW5kZXgpID0+IHtcbiAgZ2FtZS5ib2FyZC5zcGxpY2UoYm9hcmRJbmRleCwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGJvYXJkIH0gPSBnYW1lO1xuXG4gIHJldHVybiB3aW5uaW5nQ29tYm9zLmZpbmQoKGNvbWJvKSA9PiB7XG4gICAgaWYgKGJvYXJkW2NvbWJvWzBdXSA9PT0gYm9hcmRbY29tYm9bMV1dICYmIGJvYXJkW2NvbWJvWzFdXSA9PT0gYm9hcmRbY29tYm9bMl1dKSB7XG4gICAgICByZXR1cm4gYm9hcmRbY29tYm9bMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHN3aXRjaFR1cm4gPSAoKSA9PiB7XG4gIGlmIChnYW1lLnR1cm4gPT09IHBsYXllcnNbMV0pIHtcbiAgICBnYW1lLnR1cm4gPSBwbGF5ZXJzWzBdO1xuICB9IGVsc2Uge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMV07XG4gIH1cbn07XG5cbmNvbnN0IHZpZXcgPSAoZSkgPT4ge1xuICBjb25zdCB7IGJvYXJkLCBET01ib2FyZCwgRE9NY2VsbHMgfSA9IGdhbWU7XG5cbiAgY29uc3QgaW5pdGlhdGVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBET01ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XG4gIH07XG5cbiAgY29uc3QgZGV0YXRjaExpc3RlbmVyID0gKCkgPT4ge1xuICAgIERPTWJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckRPTSA9ICgpID0+IHtcbiAgICBmb3JFYWNoKGdhbWUuRE9NY2VsbHMsIChpbmRleCwgY2VsbCkgPT4ge1xuICAgICAgY2VsbC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICBjZWxsLmRhdGFzZXRbJ2NsaWNrZWQnXSA9ICdmYWxzZSc7XG4gICAgfSk7XG4gIH07XG5cbiAgcGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgIHBsYXllci5ET013aW5zLmlubmVySFRNTCA9IGAke3BsYXllci52YWx1ZX0gOiAke3BsYXllci53aW5zLmxlbmd0aH1gO1xuICB9KTtcblxuICBmdW5jdGlvbiByZW5kZXIgKGUpIHtcbiAgICBjb25zdCBkYXRhID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBmb3JFYWNoIChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIGNlbGwpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gY2VsbCAmJiBkYXRhWydjbGlja2VkJ10gPT09ICdmYWxzZScpIHtcbiAgICAgICAgYm9hcmQubWFwKChib2FyZEl0ZW0sIGJvYXJkSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoYm9hcmRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHN3aXRjaFR1cm4oKTtcbiAgICAgICAgICAgIGFkZFZhbHVlVG9Cb2FyZChib2FyZEluZGV4KTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgIGRhdGFbJ2NsaWNrZWQnXSA9ICd0cnVlJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgIGRldGF0Y2hMaXN0ZW5lcigpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgYWxlcnQoYCR7Z2FtZS50dXJuLnZhbHVlfSBXaW5zIWApO1xuICAgICAgICBhZGRXaW4oKTtcbiAgICAgICAgZ2FtZS50dXJuLkRPTXdpbnMuaW5uZXJIVE1MID0gYCR7Z2FtZS50dXJuLnZhbHVlfSA6ICR7Z2FtZS50dXJuLndpbnMubGVuZ3RofWA7XG4gICAgICAgIGdhbWUubmV3R2FtZSgpO1xuICAgICAgICBjbGVhckRPTSgpO1xuICAgICAgICBpbml0aWF0ZUxpc3RlbmVyKCk7XG4gICAgICB9LCA0NTApO1xuICAgIH0gZWxzZSBpZiAoYm9hcmQuZXZlcnkoaXNOb3RFbXB0eVN0cmluZykpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhbGVydCgn8J+YuCBXaW5zIScpO1xuICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG4gIGdhbWUubmV3R2FtZSgpO1xuICBpbml0aWF0ZUxpc3RlbmVyKCk7XG59XG5cbnZpZXcoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5cbmNvbnN0IHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZvckVhY2ggKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gICAgfVxuICB9LFxuICBpc05vdEVtcHR5U3RyaW5nIChlbCkge1xuICAgIHJldHVybiBlbCAhPSAnJztcbiAgfSxcbiAgc29ydCAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==