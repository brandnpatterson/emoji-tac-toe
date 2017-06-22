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
	    value: 'X',
	    selection: []
	  }, {
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
	        alert(game.turn.value + ' Wins!');
	        game.start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzlhMmZmMDIwMDMwMDliMzhiNDEiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkFycmF5IiwicHJvdG90eXBlIiwiY29tcGFyZSIsInRlc3RBcnIiLCJsZW5ndGgiLCJpIiwiZ2FtZSIsImNlbGxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxheWVycyIsInZhbHVlIiwic2VsZWN0aW9uIiwic3RhcnQiLCJib2FyZCIsInR1cm4iLCJpbmRleCIsInB1c2giLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwbGF5ZXIxIiwicGxheWVyMiIsImRhdGEiLCJ0YXJnZXQiLCJzcGxpY2UiLCJzb3J0IiwiYSIsImIiLCJhbGVydCIsInF1ZXJ5U2VsZWN0b3IiLCJ1dGlscyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwiY2FsbCIsIndpbm5pbmdDb21ib3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLHdCOzs7Ozs7OztBQ0FBOztBQUVBQSxPQUFNQyxTQUFOLENBQWdCQyxPQUFoQixHQUEwQixVQUFTQyxPQUFULEVBQWtCO0FBQzFDLE9BQUksS0FBS0MsTUFBTCxJQUFlRCxRQUFRQyxNQUEzQixFQUFtQyxPQUFPLEtBQVA7QUFDbkMsUUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElB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Q0hDLEtBREcsRUFDSTtBQUMvQixVQUFLLElBQUlqQyxJQUFJLENBQWIsRUFBZ0JBLElBQUkrQixNQUFNaEMsTUFBMUIsRUFBa0NDLEdBQWxDLEVBQXVDO0FBQ3JDZ0MsZ0JBQVNFLElBQVQsQ0FBY0QsS0FBZCxFQUFxQmpDLENBQXJCLEVBQXdCK0IsTUFBTS9CLENBQU4sQ0FBeEI7QUFDRDtBQUNGLElBTDRCOztBQU03Qm1DLGtCQUFlLENBQ2IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEYSxFQUNGLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREUsRUFDUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURULEVBQ29CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHBCLEVBQytCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRC9CLEVBQzBDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRDFDLEVBQ3FELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHJELEVBQ2dFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGhFO0FBTmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjOWEyZmYwMjAwMzAwOWIzOGI0MSIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogVGljIFRhYyBUb2VcbioqL1xuXG5pbXBvcnQgeyBmb3JFYWNoLCB3aW5uaW5nQ29tYm9zIH0gZnJvbSAnLi91dGlscyc7XG5cbkFycmF5LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24odGVzdEFycikge1xuICBpZiAodGhpcy5sZW5ndGggIT0gdGVzdEFyci5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXN0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXNbaV0uY29tcGFyZSkge1xuICAgICAgaWYgKCF0aGlzW2ldLmNvbXBhcmUodGVzdEFycltpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpc1tpXSAhPT0gdGVzdEFycltpXSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5cbmNvbnN0IGdhbWUgPSB7XG4gIGNlbGxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLFxuICBwbGF5ZXJzOiBbXG4gICAge1xuICAgICAgdmFsdWU6ICdYJyxcbiAgICAgIHNlbGVjdGlvbjogW11cbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnTycsXG4gICAgICBzZWxlY3Rpb246IFtdXG4gICAgfVxuICBdLFxuICBzdGFydCAoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMudHVybiA9IHRoaXMucGxheWVyc1swXTtcbiAgICBmb3JFYWNoKGdhbWUuY2VsbHMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaCgnJyk7XG4gICAgICB2YWx1ZS5pbm5lckhUTUwgPSBnYW1lLmJvYXJkW2luZGV4XTtcbiAgICAgIHZhbHVlLmRhdGFzZXRbJ2NsaWNrZWQnXSA9ICdmYWxzZSc7XG4gICAgfSk7XG4gIH1cbn07XG5cbmZvckVhY2goZ2FtZS5jZWxscywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgcGxheWVyMSA9IGdhbWUucGxheWVyc1swXTtcbiAgICBjb25zdCBwbGF5ZXIyID0gZ2FtZS5wbGF5ZXJzWzFdO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGdhbWUudHVybi5zZWxlY3Rpb247XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICBpZiAoZGF0YVsnY2xpY2tlZCddID09PSAnZmFsc2UnKSB7XG4gICAgICBkYXRhWydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gICAgICBnYW1lLmJvYXJkLnNwbGljZShpbmRleCwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbiAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGdhbWUuYm9hcmRbaW5kZXhdO1xuICAgICAgc2VsZWN0aW9uLnB1c2goaW5kZXgpO1xuICAgICAgc2VsZWN0aW9uLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIGlmIChzZWxlY3Rpb24uY29tcGFyZShbMCwgMywgNl0pID09PSB0cnVlKSB7XG4gICAgICAgIGFsZXJ0KGAke2dhbWUudHVybi52YWx1ZX0gV2lucyFgKTtcbiAgICAgICAgZ2FtZS5zdGFydCgpO1xuICAgICAgfTtcbiAgICAgIGdhbWUudHVybiA9IGdhbWUudHVybiA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxO1xuICAgIH1cbiAgfSk7XG59KTtcbmdhbWUuc3RhcnQoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnYW1lLnN0YXJ0KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiLyoqXG4gKiBHZW5lcmFsIFV0aWxzXG4qKi9cblxuY29uc3QgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9yRWFjaCAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcbiAgICB9XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=