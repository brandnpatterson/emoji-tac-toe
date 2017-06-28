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
	    game.turn = players[0];
	
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
	  if (game.turn === players[0]) {
	    game.turn = players[1];
	  } else {
	    game.turn = players[0];
	  }
	};
	
	var view = function view(e) {
	  var board = game.board,
	      DOMboard = game.DOMboard,
	      DOMcells = game.DOMcells;
	
	
	  var attachListener = function attachListener() {
	    DOMboard.addEventListener('click', render);
	  };
	
	  var detachListener = function detachListener() {
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
	            addValueToBoard(boardIndex);
	            e.target.innerHTML = board[index];
	            data['clicked'] = 'true';
	          }
	        });
	      }
	    });
	    if (checkForWinner()) {
	      detachListener();
	      setTimeout(function () {
	        alert(game.turn.value + ' Wins!');
	        addWin();
	        game.turn.DOMwins.innerHTML = game.turn.value + ' : ' + game.turn.wins.length;
	        game.newGame();
	        clearDOM();
	        attachListener();
	      }, 450);
	    } else if (board.every(_utils.isNotEmptyString)) {
	      setTimeout(function () {
	        alert('😸 Wins!');
	        game.newGame();
	        clearDOM();
	      }, 100);
	    } else {
	      switchTurn();
	    }
	  }
	  game.newGame();
	  attachListener();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzczZDE2NTIwZTM1MWQ3MjJkYjAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJET01ib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRPTWNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImJvYXJkIiwibmV3R2FtZSIsInR1cm4iLCJwbGF5ZXJzIiwiaSIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJ2YWx1ZSIsIkRPTXdpbnMiLCJ3aW5zIiwiYWRkV2luIiwiYWRkVmFsdWVUb0JvYXJkIiwiYm9hcmRJbmRleCIsImNoZWNrRm9yV2lubmVyIiwiZmluZCIsImNvbWJvIiwic3dpdGNoVHVybiIsInZpZXciLCJlIiwiYXR0YWNoTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiZGV0YWNoTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJET00iLCJpbmRleCIsImNlbGwiLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwibWFwIiwicGxheWVyIiwiZGF0YSIsInRhcmdldCIsImJvYXJkSXRlbSIsInNldFRpbWVvdXQiLCJhbGVydCIsImV2ZXJ5IiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImNhbGwiLCJpc05vdEVtcHR5U3RyaW5nIiwiZWwiLCJzb3J0IiwiYSIsImIiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSx3Qjs7Ozs7Ozs7QUNBQTs7QUFFQSxLQUFNQSxPQUFPO0FBQ1hDLGFBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FEQztBQUVYQyxhQUFVRixTQUFTRyxnQkFBVCxDQUEwQixPQUExQixDQUZDO0FBR1hDLFVBQU8sRUFISTtBQUlYQyxVQUpXLHFCQUlBO0FBQ1RQLFVBQUtRLElBQUwsR0FBWUMsUUFBUSxDQUFSLENBQVo7O0FBRUEsVUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS04sUUFBTCxDQUFjTyxNQUFsQyxFQUEwQ0QsR0FBMUMsRUFBK0M7QUFDN0MsV0FBSSxLQUFLSixLQUFMLENBQVdLLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsY0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCLEVBQWhCO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsY0FBS04sS0FBTCxDQUFXTyxNQUFYLENBQWtCSCxDQUFsQixFQUFxQixLQUFLSixLQUFMLENBQVdLLE1BQWhDLEVBQXdDLEVBQXhDO0FBQ0Q7QUFDRjtBQUNGO0FBZFUsRUFBYixDLENBTkE7Ozs7QUF1QkEsS0FBTUYsVUFBVSxDQUNkO0FBQ0VLLFVBQU8sSUFEVDtBQUVFQyxZQUFTYixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUZYO0FBR0VhLFNBQU07QUFIUixFQURjLEVBTWQ7QUFDRUYsVUFBTyxJQURUO0FBRUVDLFlBQVNiLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBRlg7QUFHRWEsU0FBTTtBQUhSLEVBTmMsQ0FBaEI7O0FBYUEsS0FBTUMsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDbkJqQixRQUFLUSxJQUFMLENBQVVRLElBQVYsQ0FBZUosSUFBZixDQUFvQixLQUFwQjtBQUNELEVBRkQ7O0FBSUEsS0FBTU0sa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxVQUFELEVBQWdCO0FBQ3RDbkIsUUFBS00sS0FBTCxDQUFXTyxNQUFYLENBQWtCTSxVQUFsQixFQUE4QixDQUE5QixFQUFpQ25CLEtBQUtRLElBQUwsQ0FBVU0sS0FBM0M7QUFDRCxFQUZEOztBQUlBLEtBQU1NLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUFBLE9BQ25CZCxLQURtQixHQUNUTixJQURTLENBQ25CTSxLQURtQjs7O0FBRzNCLFVBQU8scUJBQWNlLElBQWQsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFXO0FBQ25DLFNBQUloQixNQUFNZ0IsTUFBTSxDQUFOLENBQU4sTUFBb0JoQixNQUFNZ0IsTUFBTSxDQUFOLENBQU4sQ0FBcEIsSUFBdUNoQixNQUFNZ0IsTUFBTSxDQUFOLENBQU4sTUFBb0JoQixNQUFNZ0IsTUFBTSxDQUFOLENBQU4sQ0FBL0QsRUFBZ0Y7QUFDOUUsY0FBT2hCLE1BQU1nQixNQUFNLENBQU4sQ0FBTixDQUFQO0FBQ0QsTUFGRCxNQUVPO0FBQ0wsY0FBTyxLQUFQO0FBQ0Q7QUFDRixJQU5NLENBQVA7QUFPRCxFQVZEOztBQVlBLEtBQU1DLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLE9BQUl2QixLQUFLUSxJQUFMLEtBQWNDLFFBQVEsQ0FBUixDQUFsQixFQUE4QjtBQUM1QlQsVUFBS1EsSUFBTCxHQUFZQyxRQUFRLENBQVIsQ0FBWjtBQUNELElBRkQsTUFFTztBQUNMVCxVQUFLUSxJQUFMLEdBQVlDLFFBQVEsQ0FBUixDQUFaO0FBQ0Q7QUFDRixFQU5EOztBQVFBLEtBQU1lLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQU87QUFBQSxPQUNWbkIsS0FEVSxHQUNvQk4sSUFEcEIsQ0FDVk0sS0FEVTtBQUFBLE9BQ0hMLFFBREcsR0FDb0JELElBRHBCLENBQ0hDLFFBREc7QUFBQSxPQUNPRyxRQURQLEdBQ29CSixJQURwQixDQUNPSSxRQURQOzs7QUFHbEIsT0FBTXNCLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQnpCLGNBQVMwQixnQkFBVCxDQUEwQixPQUExQixFQUFtQ0MsTUFBbkM7QUFDRCxJQUZEOztBQUlBLE9BQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQjVCLGNBQVM2QixtQkFBVCxDQUE2QixPQUE3QixFQUFzQ0YsTUFBdEM7QUFDRCxJQUZEOztBQUlBLE9BQU1HLFdBQVcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLHlCQUFRL0IsS0FBS0ksUUFBYixFQUF1QixVQUFDNEIsS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQ3RDQSxZQUFLQyxTQUFMLEdBQWlCNUIsTUFBTTBCLEtBQU4sQ0FBakI7QUFDQUMsWUFBS0UsT0FBTCxDQUFhLFNBQWIsSUFBMEIsT0FBMUI7QUFDRCxNQUhEO0FBSUQsSUFMRDs7QUFPQTFCLFdBQVEyQixHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFZO0FBQ3RCQSxZQUFPdEIsT0FBUCxDQUFlbUIsU0FBZixHQUE4QkcsT0FBT3ZCLEtBQXJDLFdBQWdEdUIsT0FBT3JCLElBQVAsQ0FBWUwsTUFBNUQ7QUFDRCxJQUZEOztBQUlBLFlBQVNpQixNQUFULENBQWlCSCxDQUFqQixFQUFvQjtBQUNsQixTQUFNYSxPQUFPYixFQUFFYyxNQUFGLENBQVNKLE9BQXRCO0FBQ0EseUJBQVNuQyxLQUFLSSxRQUFkLEVBQXdCLFVBQUM0QixLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDdkMsV0FBSVIsRUFBRWMsTUFBRixLQUFhTixJQUFiLElBQXFCSyxLQUFLLFNBQUwsTUFBb0IsT0FBN0MsRUFBc0Q7QUFDcERoQyxlQUFNOEIsR0FBTixDQUFVLFVBQUNJLFNBQUQsRUFBWXJCLFVBQVosRUFBMkI7QUFDbkMsZUFBSUEsZUFBZWEsS0FBbkIsRUFBMEI7QUFDeEJkLDZCQUFnQkMsVUFBaEI7QUFDQU0sZUFBRWMsTUFBRixDQUFTTCxTQUFULEdBQXFCNUIsTUFBTTBCLEtBQU4sQ0FBckI7QUFDQU0sa0JBQUssU0FBTCxJQUFrQixNQUFsQjtBQUNEO0FBQ0YsVUFORDtBQU9EO0FBQ0YsTUFWRDtBQVdBLFNBQUlsQixnQkFBSixFQUFzQjtBQUNwQlM7QUFDQVksa0JBQVcsWUFBSztBQUNkQyxlQUFTMUMsS0FBS1EsSUFBTCxDQUFVTSxLQUFuQjtBQUNBRztBQUNBakIsY0FBS1EsSUFBTCxDQUFVTyxPQUFWLENBQWtCbUIsU0FBbEIsR0FBaUNsQyxLQUFLUSxJQUFMLENBQVVNLEtBQTNDLFdBQXNEZCxLQUFLUSxJQUFMLENBQVVRLElBQVYsQ0FBZUwsTUFBckU7QUFDQVgsY0FBS08sT0FBTDtBQUNBd0I7QUFDQUw7QUFDRCxRQVBELEVBT0csR0FQSDtBQVFELE1BVkQsTUFVTyxJQUFJcEIsTUFBTXFDLEtBQU4seUJBQUosRUFBbUM7QUFDeENGLGtCQUFXLFlBQU07QUFDZkMsZUFBTSxVQUFOO0FBQ0ExQyxjQUFLTyxPQUFMO0FBQ0F3QjtBQUNELFFBSkQsRUFJRyxHQUpIO0FBS0QsTUFOTSxNQU1BO0FBQ0xSO0FBQ0Q7QUFDRjtBQUNEdkIsUUFBS08sT0FBTDtBQUNBbUI7QUFDRCxFQXpERDs7QUEyREFGLFE7Ozs7Ozs7O0FDM0hBOzs7O0FBSUEsS0FBTW9CLFFBQVFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDN0JDLFVBRDZCLG1CQUNwQkMsS0FEb0IsRUFDYkMsUUFEYSxFQUNIQyxLQURHLEVBQ0k7QUFDL0IsVUFBSyxJQUFJeEMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJc0MsTUFBTXJDLE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNyQ3VDLGdCQUFTRSxJQUFULENBQWNELEtBQWQsRUFBcUJ4QyxDQUFyQixFQUF3QnNDLE1BQU10QyxDQUFOLENBQXhCO0FBQ0Q7QUFDRixJQUw0QjtBQU03QjBDLG1CQU42Qiw0QkFNWEMsRUFOVyxFQU1QO0FBQ3BCLFlBQU9BLE1BQU0sRUFBYjtBQUNELElBUjRCO0FBUzdCQyxPQVQ2QixnQkFTdkJDLENBVHVCLEVBU3BCQyxDQVRvQixFQVNqQjtBQUNWLFlBQU9ELElBQUlDLENBQVg7QUFDRCxJQVg0Qjs7QUFZN0JDLGtCQUFlLENBQ2IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEYSxFQUNGLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREUsRUFDUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURULEVBQ29CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHBCLEVBQytCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRC9CLEVBQzBDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRDFDLEVBQ3FELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHJELEVBQ2dFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGhFO0FBWmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NzNkMTY1MjBlMzUxZDcyMmRiMCIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogRW1vamkgVGFjIFRvZSBHYW1lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgaXNOb3RFbXB0eVN0cmluZywgc29ydCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBnYW1lID0ge1xuICBET01ib2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyksXG4gIERPTWNlbGxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLFxuICBib2FyZDogW10sXG4gIG5ld0dhbWUgKCkge1xuICAgIGdhbWUudHVybiA9IHBsYXllcnNbMF07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuRE9NY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmJvYXJkLnB1c2goJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ib2FyZC5zcGxpY2UoaSwgdGhpcy5ib2FyZC5sZW5ndGgsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICB2YWx1ZTogJ/CfpoQnLFxuICAgIERPTXdpbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLXdpbnMnKSxcbiAgICB3aW5zOiBbXVxuICB9LFxuICB7XG4gICAgdmFsdWU6ICfwn5KpJyxcbiAgICBET013aW5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by13aW5zJyksXG4gICAgd2luczogW11cbiAgfVxuXTtcblxuY29uc3QgYWRkV2luID0gKCkgPT4ge1xuICBnYW1lLnR1cm4ud2lucy5wdXNoKCd3aW4nKTtcbn07XG5cbmNvbnN0IGFkZFZhbHVlVG9Cb2FyZCA9IChib2FyZEluZGV4KSA9PiB7XG4gIGdhbWUuYm9hcmQuc3BsaWNlKGJvYXJkSW5kZXgsIDEsIGdhbWUudHVybi52YWx1ZSk7XG59O1xuXG5jb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgY29uc3QgeyBib2FyZCB9ID0gZ2FtZTtcblxuICByZXR1cm4gd2lubmluZ0NvbWJvcy5maW5kKChjb21ibykgPT4ge1xuICAgIGlmIChib2FyZFtjb21ib1swXV0gPT09IGJvYXJkW2NvbWJvWzFdXSAmJiBib2FyZFtjb21ib1sxXV0gPT09IGJvYXJkW2NvbWJvWzJdXSkge1xuICAgICAgcmV0dXJuIGJvYXJkW2NvbWJvWzBdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzd2l0Y2hUdXJuID0gKCkgPT4ge1xuICBpZiAoZ2FtZS50dXJuID09PSBwbGF5ZXJzWzBdKSB7XG4gICAgZ2FtZS50dXJuID0gcGxheWVyc1sxXTtcbiAgfSBlbHNlIHtcbiAgICBnYW1lLnR1cm4gPSBwbGF5ZXJzWzBdO1xuICB9XG59O1xuXG5jb25zdCB2aWV3ID0gKGUpID0+IHtcbiAgY29uc3QgeyBib2FyZCwgRE9NYm9hcmQsIERPTWNlbGxzIH0gPSBnYW1lO1xuXG4gIGNvbnN0IGF0dGFjaExpc3RlbmVyID0gKCkgPT4ge1xuICAgIERPTWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyKTtcbiAgfTtcblxuICBjb25zdCBkZXRhY2hMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBET01ib2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJET00gPSAoKSA9PiB7XG4gICAgZm9yRWFjaChnYW1lLkRPTWNlbGxzLCAoaW5kZXgsIGNlbGwpID0+IHtcbiAgICAgIGNlbGwuaW5uZXJIVE1MID0gYm9hcmRbaW5kZXhdO1xuICAgICAgY2VsbC5kYXRhc2V0WydjbGlja2VkJ10gPSAnZmFsc2UnO1xuICAgIH0pO1xuICB9O1xuXG4gIHBsYXllcnMubWFwKChwbGF5ZXIpID0+IHtcbiAgICBwbGF5ZXIuRE9Nd2lucy5pbm5lckhUTUwgPSBgJHtwbGF5ZXIudmFsdWV9IDogJHtwbGF5ZXIud2lucy5sZW5ndGh9YDtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyIChlKSB7XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgZm9yRWFjaCAoZ2FtZS5ET01jZWxscywgKGluZGV4LCBjZWxsKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGNlbGwgJiYgZGF0YVsnY2xpY2tlZCddID09PSAnZmFsc2UnKSB7XG4gICAgICAgIGJvYXJkLm1hcCgoYm9hcmRJdGVtLCBib2FyZEluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGJvYXJkSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBhZGRWYWx1ZVRvQm9hcmQoYm9hcmRJbmRleCk7XG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICAgICAgICBkYXRhWydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY2hlY2tGb3JXaW5uZXIoKSkge1xuICAgICAgZGV0YWNoTGlzdGVuZXIoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIGFsZXJ0KGAke2dhbWUudHVybi52YWx1ZX0gV2lucyFgKTtcbiAgICAgICAgYWRkV2luKCk7XG4gICAgICAgIGdhbWUudHVybi5ET013aW5zLmlubmVySFRNTCA9IGAke2dhbWUudHVybi52YWx1ZX0gOiAke2dhbWUudHVybi53aW5zLmxlbmd0aH1gO1xuICAgICAgICBnYW1lLm5ld0dhbWUoKTtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgICAgYXR0YWNoTGlzdGVuZXIoKTtcbiAgICAgIH0sIDQ1MCk7XG4gICAgfSBlbHNlIGlmIChib2FyZC5ldmVyeShpc05vdEVtcHR5U3RyaW5nKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCfwn5i4IFdpbnMhJyk7XG4gICAgICAgIGdhbWUubmV3R2FtZSgpO1xuICAgICAgICBjbGVhckRPTSgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoVHVybigpO1xuICAgIH1cbiAgfVxuICBnYW1lLm5ld0dhbWUoKTtcbiAgYXR0YWNoTGlzdGVuZXIoKTtcbn1cblxudmlldygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiLyoqXG4gKiBHZW5lcmFsIFV0aWxzXG4qKi9cblxuY29uc3QgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9yRWFjaCAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcbiAgICB9XG4gIH0sXG4gIGlzTm90RW1wdHlTdHJpbmcgKGVsKSB7XG4gICAgcmV0dXJuIGVsICE9ICcnO1xuICB9LFxuICBzb3J0IChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9LFxuICB3aW5uaW5nQ29tYm9zOiBbXG4gICAgWzAsIDEsIDJdLCBbMywgNCwgNV0sIFs2LCA3LCA4XSwgWzAsIDMsIDZdLCBbMSwgNCwgN10sIFsyLCA1LCA4XSwgWzAsIDQsIDhdLCBbMiwgNCwgNl1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9