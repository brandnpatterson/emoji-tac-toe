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
	 * Tic Tac Toe vs AI
	**/
	
	var playerOne = 'X';
	var playerTwo = 'O';
	var cellNumbers = 9;
	var state = {
	  currentTurn: playerOne,
	  board: []
	};
	
	for (var i = 0; i < cellNumbers; i++) {
	  state.board.push({
	    'value': ''
	  });
	}
	
	var forEach = function forEach(array, callback, scope) {
	  for (var _i = 0; _i < array.length; _i++) {
	    callback.call(scope, _i, array[_i]);
	  }
	};
	
	var cells = document.querySelectorAll('.cell');
	forEach(cells, function (index, value) {
	  value.addEventListener('click', function (e) {
	    state.board.splice(index, 1, {
	      'value': state.currentTurn,
	      'clicked': true
	    });
	    if (e.target.dataset['clicked'] === 'false') {
	      e.target.innerHTML = state.board[index].value;
	      state.currentTurn = state.currentTurn === playerOne ? playerTwo : playerOne;
	    }
	    e.target.dataset['clicked'] = 'true';
	  });
	});
	//
	// function checkForWinner () {
	//   const cells = state.board;
	//
	//   const winningCombos = [
	//     [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
	//   ];
	//   return winningCombos.find(function (combo) {
	//     if (cells[combo[0]] === cells[combo[1]] && cells[combo[1]] === cells[combo[2]]) {
	//       return cells[combo[0]];
	//       console.log(cells);
	//     } else {
	//       return false;
	//     }
	//   });
	// }

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmNmM2ZmODg1ZjQ4NmM3YWU3MzIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIl0sIm5hbWVzIjpbInBsYXllck9uZSIsInBsYXllclR3byIsImNlbGxOdW1iZXJzIiwic3RhdGUiLCJjdXJyZW50VHVybiIsImJvYXJkIiwiaSIsInB1c2giLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwibGVuZ3RoIiwiY2FsbCIsImNlbGxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5kZXgiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3BsaWNlIiwidGFyZ2V0IiwiZGF0YXNldCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esd0I7Ozs7Ozs7O0FDSkE7Ozs7QUFJQSxLQUFNQSxZQUFZLEdBQWxCO0FBQ0EsS0FBTUMsWUFBWSxHQUFsQjtBQUNBLEtBQU1DLGNBQWMsQ0FBcEI7QUFDQSxLQUFNQyxRQUFRO0FBQ1pDLGdCQUFhSixTQUREO0FBRVpLLFVBQU87QUFGSyxFQUFkOztBQUtBLE1BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixXQUFwQixFQUFpQ0ksR0FBakMsRUFBc0M7QUFDcENILFNBQU1FLEtBQU4sQ0FBWUUsSUFBWixDQUFpQjtBQUNmLGNBQVM7QUFETSxJQUFqQjtBQUdEOztBQUVELEtBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBa0JDLEtBQWxCLEVBQTRCO0FBQzFDLFFBQUssSUFBSUwsS0FBSSxDQUFiLEVBQWdCQSxLQUFJRyxNQUFNRyxNQUExQixFQUFrQ04sSUFBbEMsRUFBdUM7QUFDckNJLGNBQVNHLElBQVQsQ0FBY0YsS0FBZCxFQUFxQkwsRUFBckIsRUFBd0JHLE1BQU1ILEVBQU4sQ0FBeEI7QUFDRDtBQUNGLEVBSkQ7O0FBTUEsS0FBTVEsUUFBUUMsU0FBU0MsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBZDtBQUNBUixTQUFRTSxLQUFSLEVBQWUsVUFBQ0csS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQy9CQSxTQUFNQyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFDQyxDQUFELEVBQU87QUFDckNqQixXQUFNRSxLQUFOLENBQVlnQixNQUFaLENBQW1CSixLQUFuQixFQUEwQixDQUExQixFQUE2QjtBQUMzQixnQkFBU2QsTUFBTUMsV0FEWTtBQUUzQixrQkFBVztBQUZnQixNQUE3QjtBQUlBLFNBQUlnQixFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsU0FBakIsTUFBZ0MsT0FBcEMsRUFBNkM7QUFDM0NILFNBQUVFLE1BQUYsQ0FBU0UsU0FBVCxHQUFxQnJCLE1BQU1FLEtBQU4sQ0FBWVksS0FBWixFQUFtQkMsS0FBeEM7QUFDQWYsYUFBTUMsV0FBTixHQUFvQkQsTUFBTUMsV0FBTixLQUFzQkosU0FBdEIsR0FBa0NDLFNBQWxDLEdBQThDRCxTQUFsRTtBQUNEO0FBQ0RvQixPQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsU0FBakIsSUFBOEIsTUFBOUI7QUFDRCxJQVZEO0FBV0QsRUFaRDtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmNmM2ZmODg1ZjQ4NmM3YWU3MzIiLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIFRpYyBUYWMgVG9lIHZzIEFJXG4qKi9cblxuY29uc3QgcGxheWVyT25lID0gJ1gnO1xuY29uc3QgcGxheWVyVHdvID0gJ08nO1xuY29uc3QgY2VsbE51bWJlcnMgPSA5O1xuY29uc3Qgc3RhdGUgPSB7XG4gIGN1cnJlbnRUdXJuOiBwbGF5ZXJPbmUsXG4gIGJvYXJkOiBbXVxufVxuXG5mb3IgKGxldCBpID0gMDsgaSA8IGNlbGxOdW1iZXJzOyBpKyspIHtcbiAgc3RhdGUuYm9hcmQucHVzaCh7XG4gICAgJ3ZhbHVlJzogJydcbiAgfSk7XG59XG5cbmNvbnN0IGZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICB9XG59O1xuXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG5mb3JFYWNoKGNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzdGF0ZS5ib2FyZC5zcGxpY2UoaW5kZXgsIDEsIHtcbiAgICAgICd2YWx1ZSc6IHN0YXRlLmN1cnJlbnRUdXJuLFxuICAgICAgJ2NsaWNrZWQnOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKGUudGFyZ2V0LmRhdGFzZXRbJ2NsaWNrZWQnXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gc3RhdGUuYm9hcmRbaW5kZXhdLnZhbHVlO1xuICAgICAgc3RhdGUuY3VycmVudFR1cm4gPSBzdGF0ZS5jdXJyZW50VHVybiA9PT0gcGxheWVyT25lID8gcGxheWVyVHdvIDogcGxheWVyT25lO1xuICAgIH1cbiAgICBlLnRhcmdldC5kYXRhc2V0WydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gIH0pO1xufSk7XG4vL1xuLy8gZnVuY3Rpb24gY2hlY2tGb3JXaW5uZXIgKCkge1xuLy8gICBjb25zdCBjZWxscyA9IHN0YXRlLmJvYXJkO1xuLy9cbi8vICAgY29uc3Qgd2lubmluZ0NvbWJvcyA9IFtcbi8vICAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuLy8gICBdO1xuLy8gICByZXR1cm4gd2lubmluZ0NvbWJvcy5maW5kKGZ1bmN0aW9uIChjb21ibykge1xuLy8gICAgIGlmIChjZWxsc1tjb21ib1swXV0gPT09IGNlbGxzW2NvbWJvWzFdXSAmJiBjZWxsc1tjb21ib1sxXV0gPT09IGNlbGxzW2NvbWJvWzJdXSkge1xuLy8gICAgICAgcmV0dXJuIGNlbGxzW2NvbWJvWzBdXTtcbi8vICAgICAgIGNvbnNvbGUubG9nKGNlbGxzKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9