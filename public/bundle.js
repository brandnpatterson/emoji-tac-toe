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
	
	var state = {
	  playerOne: 'X',
	  playerTwo: 'O',
	  currentTurn: 'X',
	  board: ['', '', '', '', '', '', '', '', '']
	};
	
	var render = function render(state) {
	  document.querySelector('#app').innerHTML = '\n  <div class=\'board-container\'>\n    <div class=\'board-title\'>\n      <h2>Tic Tac Toe</h2>\n      <h2>Can you defeat the AI?!</h2>\n    </div>\n    <div class=\'board\'>\n      <div class=\'square\'> ' + state.board[0] + ' </div>\n      <div class=\'square\'> ' + state.board[1] + ' </div>\n      <div class=\'square\'> ' + state.board[2] + ' </div>\n      <div class=\'square\'> ' + state.board[3] + ' </div>\n      <div class=\'square\'> ' + state.board[4] + ' </div>\n      <div class=\'square\'> ' + state.board[5] + ' </div>\n      <div class=\'square\'> ' + state.board[6] + ' </div>\n      <div class=\'square\'> ' + state.board[7] + ' </div>\n      <div class=\'square\'> ' + state.board[8] + ' </div>\n    </div>\n  </div>';
	};
	render(state);
	
	var board = document.querySelector('.board');
	board.addEventListener('click', function (e) {
	  var currentTurn = state.currentTurn;
	  var playerOne = state.playerOne,
	      playerTwo = state.playerTwo;
	
	  var squareIndex = parseInt(e.target.dataset['squareId'], 10);
	  board[squareIndex] = state.currentTurn;
	
	  currentTurn = currentTurn === playerOne ? playerTwo : playerOne;
	  render(state);
	  console.log(currentTurn);
	});
	
	function checkForWinner() {
	  var squares = state.board;
	
	  var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	  // Array.prototype.find returns at most one element - the first one it finds
	  return winningCombos.find(function (combo) {
	    if (squares[combo[0]] === squares[combo[1]] && squares[combo[1]] === squares[combo[2]]) {
	      return squares[combo[0]];
	      console.log(squares);
	    } else {
	      return false;
	    }
	  });
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTg0MTA1YTFlODBjYzg3OGM4YjQiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwiY3VycmVudFR1cm4iLCJib2FyZCIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3F1YXJlSW5kZXgiLCJwYXJzZUludCIsInRhcmdldCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tGb3JXaW5uZXIiLCJzcXVhcmVzIiwid2lubmluZ0NvbWJvcyIsImZpbmQiLCJjb21ibyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esd0I7Ozs7Ozs7O0FDSkE7Ozs7QUFJQSxLQUFNQSxRQUFRO0FBQ1pDLGNBQVcsR0FEQztBQUVaQyxjQUFXLEdBRkM7QUFHWkMsZ0JBQWEsR0FIRDtBQUlaQyxVQUFPLENBQ0wsRUFESyxFQUNELEVBREMsRUFDRyxFQURILEVBQ08sRUFEUCxFQUNXLEVBRFgsRUFDZSxFQURmLEVBQ21CLEVBRG5CLEVBQ3VCLEVBRHZCLEVBQzJCLEVBRDNCO0FBSkssRUFBZDs7QUFTQSxLQUFNQyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0wsS0FBRCxFQUFXO0FBQ3hCTSxZQUFTQyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxTQUEvQixzTkFPMkJSLE1BQU1JLEtBQU4sQ0FBWSxDQUFaLENBUDNCLDhDQVEyQkosTUFBTUksS0FBTixDQUFZLENBQVosQ0FSM0IsOENBUzJCSixNQUFNSSxLQUFOLENBQVksQ0FBWixDQVQzQiw4Q0FVMkJKLE1BQU1JLEtBQU4sQ0FBWSxDQUFaLENBVjNCLDhDQVcyQkosTUFBTUksS0FBTixDQUFZLENBQVosQ0FYM0IsOENBWTJCSixNQUFNSSxLQUFOLENBQVksQ0FBWixDQVozQiw4Q0FhMkJKLE1BQU1JLEtBQU4sQ0FBWSxDQUFaLENBYjNCLDhDQWMyQkosTUFBTUksS0FBTixDQUFZLENBQVosQ0FkM0IsOENBZTJCSixNQUFNSSxLQUFOLENBQVksQ0FBWixDQWYzQjtBQWtCRCxFQW5CRDtBQW9CQUMsUUFBT0wsS0FBUDs7QUFFQSxLQUFNSSxRQUFRRSxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQUgsT0FBTUssZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsT0FDL0JQLFdBRCtCLEdBQ2ZILEtBRGUsQ0FDL0JHLFdBRCtCO0FBQUEsT0FFN0JGLFNBRjZCLEdBRUpELEtBRkksQ0FFN0JDLFNBRjZCO0FBQUEsT0FFbEJDLFNBRmtCLEdBRUpGLEtBRkksQ0FFbEJFLFNBRmtCOztBQUdyQyxPQUFNUyxjQUFjQyxTQUFTRixFQUFFRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsVUFBakIsQ0FBVCxFQUF1QyxFQUF2QyxDQUFwQjtBQUNBVixTQUFNTyxXQUFOLElBQXFCWCxNQUFNRyxXQUEzQjs7QUFFQUEsaUJBQWNBLGdCQUFnQkYsU0FBaEIsR0FBNEJDLFNBQTVCLEdBQXdDRCxTQUF0RDtBQUNBSSxVQUFPTCxLQUFQO0FBQ0FlLFdBQVFDLEdBQVIsQ0FBWWIsV0FBWjtBQUNELEVBVEQ7O0FBV0EsVUFBU2MsY0FBVCxHQUEyQjtBQUN6QixPQUFNQyxVQUFVbEIsTUFBTUksS0FBdEI7O0FBRUEsT0FBTWUsZ0JBQWdCLENBQ3BCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRG9CLEVBQ1QsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEUyxFQUNFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREYsRUFDYSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURiLEVBQ3dCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHhCLEVBQ21DLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRG5DLEVBQzhDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRDlDLEVBQ3lELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHpELENBQXRCO0FBR0E7QUFDQSxVQUFPQSxjQUFjQyxJQUFkLENBQW1CLFVBQVVDLEtBQVYsRUFBaUI7QUFDekMsU0FBSUgsUUFBUUcsTUFBTSxDQUFOLENBQVIsTUFBc0JILFFBQVFHLE1BQU0sQ0FBTixDQUFSLENBQXRCLElBQTJDSCxRQUFRRyxNQUFNLENBQU4sQ0FBUixNQUFzQkgsUUFBUUcsTUFBTSxDQUFOLENBQVIsQ0FBckUsRUFBd0Y7QUFDdEYsY0FBT0gsUUFBUUcsTUFBTSxDQUFOLENBQVIsQ0FBUDtBQUNBTixlQUFRQyxHQUFSLENBQVlFLE9BQVo7QUFDRCxNQUhELE1BR087QUFDTCxjQUFPLEtBQVA7QUFDRDtBQUNGLElBUE0sQ0FBUDtBQVFELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTg0MTA1YTFlODBjYzg3OGM4YjQiLCIvKipcclxuICogIFdlYnBhY2sgZW50cnkgcG9pbnRcclxuKiovXHJcblxyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKipcbiAqIFRpYyBUYWMgVG9lIHZzIEFJXG4qKi9cblxuY29uc3Qgc3RhdGUgPSB7XG4gIHBsYXllck9uZTogJ1gnLFxuICBwbGF5ZXJUd286ICdPJyxcbiAgY3VycmVudFR1cm46ICdYJyxcbiAgYm9hcmQ6IFtcbiAgICAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXG4gIF1cbn07XG5cbmNvbnN0IHJlbmRlciA9IChzdGF0ZSkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPSdib2FyZC1jb250YWluZXInPlxuICAgIDxkaXYgY2xhc3M9J2JvYXJkLXRpdGxlJz5cbiAgICAgIDxoMj5UaWMgVGFjIFRvZTwvaDI+XG4gICAgICA8aDI+Q2FuIHlvdSBkZWZlYXQgdGhlIEFJPyE8L2gyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2JvYXJkJz5cbiAgICAgIDxkaXYgY2xhc3M9J3NxdWFyZSc+ICR7c3RhdGUuYm9hcmRbMF19IDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nc3F1YXJlJz4gJHtzdGF0ZS5ib2FyZFsxXX0gPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdzcXVhcmUnPiAke3N0YXRlLmJvYXJkWzJdfSA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3NxdWFyZSc+ICR7c3RhdGUuYm9hcmRbM119IDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nc3F1YXJlJz4gJHtzdGF0ZS5ib2FyZFs0XX0gPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdzcXVhcmUnPiAke3N0YXRlLmJvYXJkWzVdfSA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3NxdWFyZSc+ICR7c3RhdGUuYm9hcmRbNl19IDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nc3F1YXJlJz4gJHtzdGF0ZS5ib2FyZFs3XX0gPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdzcXVhcmUnPiAke3N0YXRlLmJvYXJkWzhdfSA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbn07XG5yZW5kZXIoc3RhdGUpO1xuXG5jb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBsZXQgeyBjdXJyZW50VHVybiB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IHN0YXRlO1xuICBjb25zdCBzcXVhcmVJbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXRbJ3NxdWFyZUlkJ10sIDEwKTtcbiAgYm9hcmRbc3F1YXJlSW5kZXhdID0gc3RhdGUuY3VycmVudFR1cm47XG5cbiAgY3VycmVudFR1cm4gPSBjdXJyZW50VHVybiA9PT0gcGxheWVyT25lID8gcGxheWVyVHdvIDogcGxheWVyT25lO1xuICByZW5kZXIoc3RhdGUpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50VHVybik7XG59KTtcblxuZnVuY3Rpb24gY2hlY2tGb3JXaW5uZXIgKCkge1xuICBjb25zdCBzcXVhcmVzID0gc3RhdGUuYm9hcmQ7XG5cbiAgY29uc3Qgd2lubmluZ0NvbWJvcyA9IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdO1xuICAvLyBBcnJheS5wcm90b3R5cGUuZmluZCByZXR1cm5zIGF0IG1vc3Qgb25lIGVsZW1lbnQgLSB0aGUgZmlyc3Qgb25lIGl0IGZpbmRzXG4gIHJldHVybiB3aW5uaW5nQ29tYm9zLmZpbmQoZnVuY3Rpb24gKGNvbWJvKSB7XG4gICAgaWYgKHNxdWFyZXNbY29tYm9bMF1dID09PSBzcXVhcmVzW2NvbWJvWzFdXSAmJiBzcXVhcmVzW2NvbWJvWzFdXSA9PT0gc3F1YXJlc1tjb21ib1syXV0pIHtcbiAgICAgIHJldHVybiBzcXVhcmVzW2NvbWJvWzBdXTtcbiAgICAgIGNvbnNvbGUubG9nKHNxdWFyZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=