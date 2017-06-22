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
	      this.board.push({
	        'value': ''
	      });
	    }
	  },
	
	  currentTurn: playerOne,
	  board: []
	};
	state.emptyBoard();
	
	var cells = document.querySelectorAll('.cell');
	
	forEach(cells, function (index, value) {
	  value.addEventListener('click', function (e) {
	    state.board.splice(index, 1, {
	      'value': state.currentTurn
	    });
	    if (e.target.dataset['clicked'] === 'false') {
	      e.target.innerHTML = state.board[index].value;
	      state.currentTurn = state.currentTurn === playerOne ? playerTwo : playerOne;
	    }
	    e.target.dataset['clicked'] = 'true';
	  });
	});
	
	var reset = function reset() {
	  console.log('reset app');
	  state.emptyBoard();
	  console.log(state.board);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGFmNDBiZDVhOGQyZGIyZmUwNWEiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIl0sIm5hbWVzIjpbInBsYXllck9uZSIsInBsYXllclR3byIsImNlbGxOdW1iZXJzIiwiZm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsImkiLCJsZW5ndGgiLCJjYWxsIiwic3RhdGUiLCJlbXB0eUJvYXJkIiwiYm9hcmQiLCJwdXNoIiwiY3VycmVudFR1cm4iLCJjZWxscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluZGV4IiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNwbGljZSIsInRhcmdldCIsImRhdGFzZXQiLCJpbm5lckhUTUwiLCJyZXNldCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSx3Qjs7Ozs7Ozs7QUNKQTs7OztBQUlBLEtBQU1BLFlBQVksR0FBbEI7QUFDQSxLQUFNQyxZQUFZLEdBQWxCO0FBQ0EsS0FBTUMsY0FBYyxDQUFwQjs7QUFFQSxLQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxLQUFsQixFQUE0QjtBQUMxQyxRQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsTUFBTUksTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ3JDRixjQUFTSSxJQUFULENBQWNILEtBQWQsRUFBcUJDLENBQXJCLEVBQXdCSCxNQUFNRyxDQUFOLENBQXhCO0FBQ0Q7QUFDRixFQUpEOztBQU1BLEtBQU1HLFFBQVE7QUFDWkMsYUFEWSx3QkFDRTtBQUNaLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBSyxJQUFJTCxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLFdBQXBCLEVBQWlDSyxHQUFqQyxFQUFzQztBQUNwQyxZQUFLSyxLQUFMLENBQVdDLElBQVgsQ0FBZ0I7QUFDZCxrQkFBUztBQURLLFFBQWhCO0FBR0Q7QUFDRixJQVJXOztBQVNaQyxnQkFBYWQsU0FURDtBQVVaWSxVQUFPO0FBVkssRUFBZDtBQVlBRixPQUFNQyxVQUFOOztBQUVBLEtBQU1JLFFBQVFDLFNBQVNDLGdCQUFULENBQTBCLE9BQTFCLENBQWQ7O0FBRUFkLFNBQVFZLEtBQVIsRUFBZSxVQUFDRyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDL0JBLFNBQU1DLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNDLENBQUQsRUFBTztBQUNyQ1gsV0FBTUUsS0FBTixDQUFZVSxNQUFaLENBQW1CSixLQUFuQixFQUEwQixDQUExQixFQUE2QjtBQUMzQixnQkFBU1IsTUFBTUk7QUFEWSxNQUE3QjtBQUdBLFNBQUlPLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixTQUFqQixNQUFnQyxPQUFwQyxFQUE2QztBQUMzQ0gsU0FBRUUsTUFBRixDQUFTRSxTQUFULEdBQXFCZixNQUFNRSxLQUFOLENBQVlNLEtBQVosRUFBbUJDLEtBQXhDO0FBQ0FULGFBQU1JLFdBQU4sR0FBb0JKLE1BQU1JLFdBQU4sS0FBc0JkLFNBQXRCLEdBQWtDQyxTQUFsQyxHQUE4Q0QsU0FBbEU7QUFDRDtBQUNEcUIsT0FBRUUsTUFBRixDQUFTQyxPQUFULENBQWlCLFNBQWpCLElBQThCLE1BQTlCO0FBQ0QsSUFURDtBQVVELEVBWEQ7O0FBYUEsS0FBTUUsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDbEJDLFdBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FsQixTQUFNQyxVQUFOO0FBQ0FnQixXQUFRQyxHQUFSLENBQVlsQixNQUFNRSxLQUFsQjtBQUNELEVBSkQ7O0FBTUFJLFVBQVNhLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUNULGdCQUFqQyxDQUFrRCxPQUFsRCxFQUEyRE0sS0FBM0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGFmNDBiZDVhOGQyZGIyZmUwNWEiLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIFRpYyBUYWMgVG9lXG4qKi9cblxuY29uc3QgcGxheWVyT25lID0gJ1gnO1xuY29uc3QgcGxheWVyVHdvID0gJ08nO1xuY29uc3QgY2VsbE51bWJlcnMgPSA5O1xuXG5jb25zdCBmb3JFYWNoID0gKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcbiAgfVxufTtcblxuY29uc3Qgc3RhdGUgPSB7XG4gIGVtcHR5Qm9hcmQgKCkge1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxOdW1iZXJzOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaCh7XG4gICAgICAgICd2YWx1ZSc6ICcnXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGN1cnJlbnRUdXJuOiBwbGF5ZXJPbmUsXG4gIGJvYXJkOiBbXVxufTtcbnN0YXRlLmVtcHR5Qm9hcmQoKTtcblxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuXG5mb3JFYWNoKGNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzdGF0ZS5ib2FyZC5zcGxpY2UoaW5kZXgsIDEsIHtcbiAgICAgICd2YWx1ZSc6IHN0YXRlLmN1cnJlbnRUdXJuXG4gICAgfSk7XG4gICAgaWYgKGUudGFyZ2V0LmRhdGFzZXRbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gc3RhdGUuYm9hcmRbaW5kZXhdLnZhbHVlO1xuICAgICAgc3RhdGUuY3VycmVudFR1cm4gPSBzdGF0ZS5jdXJyZW50VHVybiA9PT0gcGxheWVyT25lID8gcGxheWVyVHdvIDogcGxheWVyT25lO1xuICAgIH1cbiAgICBlLnRhcmdldC5kYXRhc2V0WydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygncmVzZXQgYXBwJyk7XG4gIHN0YXRlLmVtcHR5Qm9hcmQoKTtcbiAgY29uc29sZS5sb2coc3RhdGUuYm9hcmQpO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0KTtcblxuLy8gMS4gUmVzZXQgZ2FtZVxuLy8gMi4gQ2hlY2sgZm9yIHdpbm5lciBhbmQgcmVwb3J0IHRvIHZpZXdcblxuLy8gZnVuY3Rpb24gY2hlY2tGb3JXaW5uZXIgKCkge1xuLy8gICBjb25zdCB3aW5uaW5nQ29tYm9zID0gW1xuLy8gICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4vLyAgIF07XG4vLyAgIHJldHVybiB3aW5uaW5nQ29tYm9zLmZpbmQoZnVuY3Rpb24gKGNvbWJvKSB7XG4vLyAgICAgY29uc3QgY2VsbHMgPSBzdGF0ZS5ib2FyZDtcbi8vICAgICBpZiAoY2VsbHNbY29tYm9bMF1dID09PSBjZWxsc1tjb21ib1sxXV0gJiYgY2VsbHNbY29tYm9bMV1dID09PSBjZWxsc1tjb21ib1syXV0pIHtcbi8vICAgICAgIHJldHVybiBjZWxsc1tjb21ib1swXV07XG4vLyAgICAgICBjb25zb2xlLmxvZyhjZWxscyk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuLy8gY2hlY2tGb3JXaW5uZXIoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=