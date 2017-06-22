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
	
	Array.prototype.compare = function (testArr) {
	  if (this.length != testArr.length) return false;
	  for (var i = 0; i < testArr.length; i++) {
	    if (this[i].compare) {
	      if (!this[i].compare(testArr[i])) return false;
	    } else if (this[i] !== testArr[i]) return false;
	  }
	  return true;
	}; /**
	    * Tic Tac Toe
	   **/
	
	var game = {
	  cells: document.querySelectorAll('.cell'),
	  players: [{
	    name: 'Player One',
	    value: 'X',
	    selection: []
	  }, {
	    name: 'Player Two',
	    value: 'O',
	    selection: []
	  }],
	  start: function start() {
	    var _this = this;
	
	    this.board = [];
	    this.turn = this.players[0];
	    (0, _utils.forEach)(game.cells, function (index, value) {
	      _this.board.push('');
	      value.innerHTML = game.board[index];
	      value.dataset['clicked'] = 'false';
	    });
	  }
	};
	
	(0, _utils.forEach)(game.cells, function (index, value) {
	  value.addEventListener('click', function (e) {
	    var player1 = game.players[0];
	    var player2 = game.players[1];
	    var selection = game.turn.selection;
	    var data = e.target.dataset;
	
	    if (data['clicked'] === 'false') {
	      data['clicked'] = 'true';
	      game.board.splice(index, 1, game.turn.value);
	      e.target.innerHTML = game.board[index];
	      selection.push(index);
	      selection.sort(function (a, b) {
	        return a - b;
	      });
	      if (selection.compare([0, 3, 6]) === true) {
	        alert(game.turn.name + ' Wins!');
	      };
	      game.turn = game.turn === player1 ? player2 : player1;
	    }
	  });
	});
	game.start();
	
	document.querySelector('.reset').addEventListener('click', function () {
	  return game.start();
	});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjZmZGQyNTNiNzFhZDczMGUwMmIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkFycmF5IiwicHJvdG90eXBlIiwiY29tcGFyZSIsInRlc3RBcnIiLCJsZW5ndGgiLCJpIiwiZ2FtZSIsImNlbGxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxheWVycyIsIm5hbWUiLCJ2YWx1ZSIsInNlbGVjdGlvbiIsInN0YXJ0IiwiYm9hcmQiLCJ0dXJuIiwiaW5kZXgiLCJwdXNoIiwiaW5uZXJIVE1MIiwiZGF0YXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicGxheWVyMSIsInBsYXllcjIiLCJkYXRhIiwidGFyZ2V0Iiwic3BsaWNlIiwic29ydCIsImEiLCJiIiwiYWxlcnQiLCJxdWVyeVNlbGVjdG9yIiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImNhbGwiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSx3Qjs7Ozs7Ozs7QUNBQTs7QUFFQUEsT0FBTUMsU0FBTixDQUFnQkMsT0FBaEIsR0FBMEIsVUFBU0MsT0FBVCxFQUFrQjtBQUMxQyxPQUFJLEtBQUtDLE1BQUwsSUFBZUQsUUFBUUMsTUFBM0IsRUFBbUMsT0FBTyxLQUFQO0FBQ25DLFFBQUssSUFBSUMsSUFBSSxDQUFiLEVB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QkMsS0FEb0IsRUFDYkMsUUFEYSxFQUNIQyxLQURHLEVBQ0k7QUFDL0IsVUFBSyxJQUFJbEMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJZ0MsTUFBTWpDLE1BQTFCLEVBQWtDQyxHQUFsQyxFQUF1QztBQUNyQ2lDLGdCQUFTRSxJQUFULENBQWNELEtBQWQsRUFBcUJsQyxDQUFyQixFQUF3QmdDLE1BQU1oQyxDQUFOLENBQXhCO0FBQ0Q7QUFDRixJQUw0Qjs7QUFNN0JvQyxrQkFBZSxDQUNiLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGEsRUFDRixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURFLEVBQ1MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEVCxFQUNvQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURwQixFQUMrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQvQixFQUMwQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQxQyxFQUNxRCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURyRCxFQUNnRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURoRTtBQU5jLEVBQS9CLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjZmZGQyNTNiNzFhZDczMGUwMmIiLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIFRpYyBUYWMgVG9lXG4qKi9cblxuaW1wb3J0IHsgZm9yRWFjaCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5BcnJheS5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKHRlc3RBcnIpIHtcbiAgaWYgKHRoaXMubGVuZ3RoICE9IHRlc3RBcnIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdEFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzW2ldLmNvbXBhcmUpIHtcbiAgICAgIGlmICghdGhpc1tpXS5jb21wYXJlKHRlc3RBcnJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXNbaV0gIT09IHRlc3RBcnJbaV0pIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5jb25zdCBnYW1lID0ge1xuICBjZWxsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSxcbiAgcGxheWVyczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdQbGF5ZXIgT25lJyxcbiAgICAgIHZhbHVlOiAnWCcsXG4gICAgICBzZWxlY3Rpb246IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUGxheWVyIFR3bycsXG4gICAgICB2YWx1ZTogJ08nLFxuICAgICAgc2VsZWN0aW9uOiBbXVxuICAgIH1cbiAgXSxcbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLnR1cm4gPSB0aGlzLnBsYXllcnNbMF07XG4gICAgZm9yRWFjaChnYW1lLmNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLnB1c2goJycpO1xuICAgICAgdmFsdWUuaW5uZXJIVE1MID0gZ2FtZS5ib2FyZFtpbmRleF07XG4gICAgICB2YWx1ZS5kYXRhc2V0WydjbGlja2VkJ10gPSAnZmFsc2UnO1xuICAgIH0pO1xuICB9XG59O1xuXG5mb3JFYWNoKGdhbWUuY2VsbHMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBsYXllcjEgPSBnYW1lLnBsYXllcnNbMF07XG4gICAgY29uc3QgcGxheWVyMiA9IGdhbWUucGxheWVyc1sxXTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBnYW1lLnR1cm4uc2VsZWN0aW9uO1xuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gICAgaWYgKGRhdGFbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgZGF0YVsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgZ2FtZS5ib2FyZC5zcGxpY2UoaW5kZXgsIDEsIGdhbWUudHVybi52YWx1ZSk7XG4gICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBnYW1lLmJvYXJkW2luZGV4XTtcbiAgICAgIHNlbGVjdGlvbi5wdXNoKGluZGV4KTtcbiAgICAgIHNlbGVjdGlvbi5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICBpZiAoc2VsZWN0aW9uLmNvbXBhcmUoWzAsIDMsIDZdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBhbGVydChgJHtnYW1lLnR1cm4ubmFtZX0gV2lucyFgKTtcbiAgICAgIH07XG4gICAgICBnYW1lLnR1cm4gPSBnYW1lLnR1cm4gPT09IHBsYXllcjEgPyBwbGF5ZXIyIDogcGxheWVyMTtcbiAgICB9XG4gIH0pO1xufSk7XG5nYW1lLnN0YXJ0KCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2FtZS5zdGFydCgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsIi8qKlxuICogR2VuZXJhbCBVdGlsc1xuKiovXG5cbmNvbnN0IHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZvckVhY2ggKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gICAgfVxuICB9LFxuICB3aW5uaW5nQ29tYm9zOiBbXG4gICAgWzAsIDEsIDJdLCBbMywgNCwgNV0sIFs2LCA3LCA4XSwgWzAsIDMsIDZdLCBbMSwgNCwgN10sIFsyLCA1LCA4XSwgWzAsIDQsIDhdLCBbMiwgNCwgNl1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9