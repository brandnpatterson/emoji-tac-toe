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
	
	Array.prototype.compare = function (array) {
	  if (!array) {
	    return false;
	  }
	  if (this.length !== array.length) {
	    return false;
	  }
	  for (var i = 0, l = this.length; i < l; i++) {
	    if (this[i] instanceof Array && array[i] instanceof Array) {
	      if (!this[i].compare(array[i])) {
	        return false;
	      }
	    } else if (this[i] !== array[i]) {
	      return false;
	    }
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
	    var data = e.target.dataset;
	
	    if (data['clicked'] === 'false') {
	      data['clicked'] = 'true';
	      game.board.splice(index, 1, game.turn.value);
	      e.target.innerHTML = game.board[index];
	      game.turn = game.turn === player1 ? player2 : player1;
	      game.turn.selection.push(index);
	      console.log(game.turn.selection);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQzNzNjNWIxMjdjZjAyZDMyZmIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkFycmF5IiwicHJvdG90eXBlIiwiY29tcGFyZSIsImFycmF5IiwibGVuZ3RoIiwiaSIsImwiLCJnYW1lIiwiY2VsbHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5ZXJzIiwidmFsdWUiLCJzZWxlY3Rpb24iLCJzdGFydCIsImJvYXJkIiwidHVybiIsImluZGV4IiwicHVzaCIsImlubmVySFRNTCIsImRhdGFzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwiZGF0YSIsInRhcmdldCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeVNlbGVjdG9yIiwidXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwic2NvcGUiLCJjYWxsIiwid2lubmluZ0NvbWJvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esd0I7Ozs7Ozs7O0FDQUE7O0FBRUFBLE9BQU1DLFNBQU4sQ0FBZ0JDLE9BQWhCLEdBQTBCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDeEMsT0FBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVixZQUFPLEtBQVA7QUFDRDtBQUNELE9BQUksS0FBS0MsTUFBTCxLQUFnQkQsTUFBTUMsTUFBMUIsRUFBa0M7QUFDaEMsWUFBTyxL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R0FBbEMsRUFBdUM7QUFDckM4QixnQkFBU0UsSUFBVCxDQUFjRCxLQUFkLEVBQXFCL0IsQ0FBckIsRUFBd0JGLE1BQU1FLENBQU4sQ0FBeEI7QUFDRDtBQUNGLElBTDRCOztBQU03QmlDLGtCQUFlLENBQ2IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEYSxFQUNGLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREUsRUFDUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURULEVBQ29CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHBCLEVBQytCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRC9CLEVBQzBDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRDFDLEVBQ3FELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHJELEVBQ2dFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGhFO0FBTmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NDM3M2M1YjEyN2NmMDJkMzJmYiIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogVGljIFRhYyBUb2VcbioqL1xuXG5pbXBvcnQgeyBmb3JFYWNoLCB3aW5uaW5nQ29tYm9zIH0gZnJvbSAnLi91dGlscyc7XG5cbkFycmF5LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgaWYgKCFhcnJheSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5sZW5ndGggIT09IGFycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXNbaV0gaW5zdGFuY2VvZiBBcnJheSAmJiBhcnJheVtpXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBpZiAoIXRoaXNbaV0uY29tcGFyZShhcnJheVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzW2ldICE9PSBhcnJheVtpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgZ2FtZSA9IHtcbiAgY2VsbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyksXG4gIHBsYXllcnM6IFtcbiAgICB7XG4gICAgICB2YWx1ZTogJ1gnLFxuICAgICAgc2VsZWN0aW9uOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6ICdPJyxcbiAgICAgIHNlbGVjdGlvbjogW11cbiAgICB9XG4gIF0sXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy50dXJuID0gdGhpcy5wbGF5ZXJzWzBdO1xuICAgIGZvckVhY2goZ2FtZS5jZWxscywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKCcnKTtcbiAgICAgIHZhbHVlLmlubmVySFRNTCA9IGdhbWUuYm9hcmRbaW5kZXhdO1xuICAgICAgdmFsdWUuZGF0YXNldFsnY2xpY2tlZCddID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgfVxufTtcblxuZm9yRWFjaChnYW1lLmNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIxID0gZ2FtZS5wbGF5ZXJzWzBdO1xuICAgIGNvbnN0IHBsYXllcjIgPSBnYW1lLnBsYXllcnNbMV07XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICBpZiAoZGF0YVsnY2xpY2tlZCddID09PSAnZmFsc2UnKSB7XG4gICAgICBkYXRhWydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gICAgICBnYW1lLmJvYXJkLnNwbGljZShpbmRleCwgMSwgZ2FtZS50dXJuLnZhbHVlKTtcbiAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGdhbWUuYm9hcmRbaW5kZXhdO1xuICAgICAgZ2FtZS50dXJuID0gZ2FtZS50dXJuID09PSBwbGF5ZXIxID8gcGxheWVyMiA6IHBsYXllcjE7XG4gICAgICBnYW1lLnR1cm4uc2VsZWN0aW9uLnB1c2goaW5kZXgpO1xuICAgICAgY29uc29sZS5sb2coZ2FtZS50dXJuLnNlbGVjdGlvbik7XG4gICAgfVxuICB9KTtcbn0pO1xuZ2FtZS5zdGFydCgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWUuc3RhcnQoKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiLCIvKipcbiAqIEdlbmVyYWwgVXRpbHNcbioqL1xuXG5jb25zdCB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JFYWNoIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICAgIH1cbiAgfSxcbiAgd2lubmluZ0NvbWJvczogW1xuICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==