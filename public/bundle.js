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
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Tic Tac Toe
	**/
	
	var playerOne = 'X';
	var playerTwo = 'O';
	var cellNumbers = 9;
	var forEach = function forEach(array, callback, scope) {
	  for (var i = 0; i < array.length; i++) {
	    callback.call(scope, i, array[i]);
	  }
	};
	
	var state = {
	  emptyBoard: function emptyBoard() {
	    this.board = [];
	    for (var i = 0; i < cellNumbers; i++) {
	      this.board.push('');
	    }
	  },
	
	  currentTurnValue: playerOne,
	  board: []
	};
	state.emptyBoard();
	
	var cells = document.querySelectorAll('.cell');
	
	forEach(cells, function (index, value) {
	  value.addEventListener('click', function (e) {
	    if (e.target.dataset['clicked'] === 'false') {
	      e.target.dataset['clicked'] = 'true';
	      state.board.splice(index, 1, state.currentTurnValue);
	      e.target.innerHTML = state.board[index];
	      state.currentTurnValue = state.currentTurnValue === playerOne ? playerTwo : playerOne;
	    }
	  });
	});
	
	var reset = function reset() {
	  state.emptyBoard();
	  forEach(cells, function (index, value) {
	    value.innerHTML = state.board[index];
	    value.dataset['clicked'] = 'false';
	  });
	};
	
	document.querySelector('.reset').addEventListener('click', reset);
	
	// 1. Reset game
	// 2. Check for winner and report to view
	
	
	// function checkForWinner () {
	//   const winningCombos = [
	//     [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
	//   ];
	//   return winningCombos.find(function (combo) {
	//     const cells = state.board;
	//     if (cells[combo[0]] === cells[combo[1]] && cells[combo[1]] === cells[combo[2]]) {
	//       return cells[combo[0]];
	//       console.log(cells);
	//     } else {
	//       return false;
	//     }
	//   });
	// }
	// checkForWinner();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmU1Yzk4ZmNhZjBmMjMwOWZhYWEiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIl0sIm5hbWVzIjpbInBsYXllck9uZSIsInBsYXllclR3byIsImNlbGxOdW1iZXJzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImkiLCJsZW5ndGgiLCJjYWxsIiwic3RhdGUiLCJlbXB0eUJvYXJkIiwiYm9hcmQiLCJwdXNoIiwiY3VycmVudFR1cm5WYWx1ZSIsImNlbGxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5kZXgiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsInNwbGljZSIsImlubmVySFRNTCIsInJlc2V0IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esd0I7Ozs7Ozs7O0FDSkE7Ozs7QUFJQSxLQUFNQSxZQUFZLEdBQWxCO0FBQ0EsS0FBTUMsWUFBWSxHQUFsQjtBQUNBLEtBQU1DLGNBQWMsQ0FBcEI7QUFDQSxLQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxLQUFsQixFQUE0QjtBQUMxQyxRQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsTUFBTUksTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ3JDRixjQUFTSSxJQUFULENBQWNILEtBQWQsRUFBcUJDLENBQXJCLEVBQXdCSCxNQUFNRyxDQUFOLENBQXhCO0FBQ0Q7QUFDRixFQUpEOztBQU1BLEtBQU1HLFFBQVE7QUFDWkMsYUFEWSx3QkFDRTtBQUNaLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBSyxJQUFJTCxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLFdBQXBCLEVBQWlDSyxHQUFqQyxFQUFzQztBQUNwQyxZQUFLSyxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsRUFBaEI7QUFDRDtBQUNGLElBTlc7O0FBT1pDLHFCQUFrQmQsU0FQTjtBQVFaWSxVQUFPO0FBUkssRUFBZDtBQVVBRixPQUFNQyxVQUFOOztBQUVBLEtBQU1JLFFBQVFDLFNBQVNDLGdCQUFULENBQTBCLE9BQTFCLENBQWQ7O0FBRUFkLFNBQVFZLEtBQVIsRUFBZSxVQUFDRyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDL0JBLFNBQU1DLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNDLENBQUQsRUFBTztBQUNyQyxTQUFJQSxFQUFFQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsU0FBakIsTUFBZ0MsT0FBcEMsRUFBNkM7QUFDM0NGLFNBQUVDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixTQUFqQixJQUE4QixNQUE5QjtBQUNBYixhQUFNRSxLQUFOLENBQVlZLE1BQVosQ0FBbUJOLEtBQW5CLEVBQTBCLENBQTFCLEVBQTZCUixNQUFNSSxnQkFBbkM7QUFDQU8sU0FBRUMsTUFBRixDQUFTRyxTQUFULEdBQXFCZixNQUFNRSxLQUFOLENBQVlNLEtBQVosQ0FBckI7QUFDQVIsYUFBTUksZ0JBQU4sR0FBeUJKLE1BQU1JLGdCQUFOLEtBQTJCZCxTQUEzQixHQUF1Q0MsU0FBdkMsR0FBbURELFNBQTVFO0FBQ0Q7QUFDRixJQVBEO0FBUUQsRUFURDs7QUFXQSxLQUFNMEIsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDbEJoQixTQUFNQyxVQUFOO0FBQ0FSLFdBQVFZLEtBQVIsRUFBZSxVQUFDRyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDL0JBLFdBQU1NLFNBQU4sR0FBa0JmLE1BQU1FLEtBQU4sQ0FBWU0sS0FBWixDQUFsQjtBQUNBQyxXQUFNSSxPQUFOLENBQWMsU0FBZCxJQUEyQixPQUEzQjtBQUNELElBSEQ7QUFJRCxFQU5EOztBQVFBUCxVQUFTVyxhQUFULENBQXVCLFFBQXZCLEVBQWlDUCxnQkFBakMsQ0FBa0QsT0FBbEQsRUFBMkRNLEtBQTNEOztBQUVBO0FBQ0E7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmU1Yzk4ZmNhZjBmMjMwOWZhYWEiLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIFRpYyBUYWMgVG9lXG4qKi9cblxuY29uc3QgcGxheWVyT25lID0gJ1gnO1xuY29uc3QgcGxheWVyVHdvID0gJ08nO1xuY29uc3QgY2VsbE51bWJlcnMgPSA5O1xuY29uc3QgZm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gIH1cbn07XG5cbmNvbnN0IHN0YXRlID0ge1xuICBlbXB0eUJvYXJkICgpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsTnVtYmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmJvYXJkLnB1c2goJycpO1xuICAgIH1cbiAgfSxcbiAgY3VycmVudFR1cm5WYWx1ZTogcGxheWVyT25lLFxuICBib2FyZDogW11cbn07XG5zdGF0ZS5lbXB0eUJvYXJkKCk7XG5cbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcblxuZm9yRWFjaChjZWxscywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmRhdGFzZXRbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgZS50YXJnZXQuZGF0YXNldFsnY2xpY2tlZCddID0gJ3RydWUnO1xuICAgICAgc3RhdGUuYm9hcmQuc3BsaWNlKGluZGV4LCAxLCBzdGF0ZS5jdXJyZW50VHVyblZhbHVlKTtcbiAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IHN0YXRlLmJvYXJkW2luZGV4XTtcbiAgICAgIHN0YXRlLmN1cnJlbnRUdXJuVmFsdWUgPSBzdGF0ZS5jdXJyZW50VHVyblZhbHVlID09PSBwbGF5ZXJPbmUgPyBwbGF5ZXJUd28gOiBwbGF5ZXJPbmU7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgc3RhdGUuZW1wdHlCb2FyZCgpO1xuICBmb3JFYWNoKGNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgdmFsdWUuaW5uZXJIVE1MID0gc3RhdGUuYm9hcmRbaW5kZXhdO1xuICAgIHZhbHVlLmRhdGFzZXRbJ2NsaWNrZWQnXSA9ICdmYWxzZSc7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0KTtcblxuLy8gMS4gUmVzZXQgZ2FtZVxuLy8gMi4gQ2hlY2sgZm9yIHdpbm5lciBhbmQgcmVwb3J0IHRvIHZpZXdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGNoZWNrRm9yV2lubmVyICgpIHtcbi8vICAgY29uc3Qgd2lubmluZ0NvbWJvcyA9IFtcbi8vICAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuLy8gICBdO1xuLy8gICByZXR1cm4gd2lubmluZ0NvbWJvcy5maW5kKGZ1bmN0aW9uIChjb21ibykge1xuLy8gICAgIGNvbnN0IGNlbGxzID0gc3RhdGUuYm9hcmQ7XG4vLyAgICAgaWYgKGNlbGxzW2NvbWJvWzBdXSA9PT0gY2VsbHNbY29tYm9bMV1dICYmIGNlbGxzW2NvbWJvWzFdXSA9PT0gY2VsbHNbY29tYm9bMl1dKSB7XG4vLyAgICAgICByZXR1cm4gY2VsbHNbY29tYm9bMF1dO1xuLy8gICAgICAgY29uc29sZS5sb2coY2VsbHMpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cbi8vIGNoZWNrRm9yV2lubmVyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9