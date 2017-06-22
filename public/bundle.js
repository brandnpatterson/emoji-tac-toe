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
	      'value': state.currentTurn
	    });
	    if (e.target.dataset['clicked'] === 'false') {
	      e.target.innerHTML = state.board[index].value;
	      state.currentTurn = state.currentTurn === playerOne ? playerTwo : playerOne;
	      console.log(state.board);
	    }
	    e.target.dataset['clicked'] = 'true';
	  });
	});
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjJlNzIzYmY5MTAzMDA4ZDA3ZmYiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIl0sIm5hbWVzIjpbInBsYXllck9uZSIsInBsYXllclR3byIsImNlbGxOdW1iZXJzIiwic3RhdGUiLCJjdXJyZW50VHVybiIsImJvYXJkIiwiaSIsInB1c2giLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwibGVuZ3RoIiwiY2FsbCIsImNlbGxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5kZXgiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3BsaWNlIiwidGFyZ2V0IiwiZGF0YXNldCIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLHdCOzs7Ozs7OztBQ0pBOzs7O0FBSUEsS0FBTUEsWUFBWSxHQUFsQjtBQUNBLEtBQU1DLFlBQVksR0FBbEI7QUFDQSxLQUFNQyxjQUFjLENBQXBCO0FBQ0EsS0FBTUMsUUFBUTtBQUNaQyxnQkFBYUosU0FERDtBQUVaSyxVQUFPO0FBRkssRUFBZDs7QUFLQSxNQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosV0FBcEIsRUFBaUNJLEdBQWpDLEVBQXNDO0FBQ3BDSCxTQUFNRSxLQUFOLENBQVlFLElBQVosQ0FBaUI7QUFDZixjQUFTO0FBRE0sSUFBakI7QUFHRDs7QUFFRCxLQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxLQUFsQixFQUE0QjtBQUMxQyxRQUFLLElBQUlMLEtBQUksQ0FBYixFQUFnQkEsS0FBSUcsTUFBTUcsTUFBMUIsRUFBa0NOLElBQWxDLEVBQXVDO0FBQ3JDSSxjQUFTRyxJQUFULENBQWNGLEtBQWQsRUFBcUJMLEVBQXJCLEVBQXdCRyxNQUFNSCxFQUFOLENBQXhCO0FBQ0Q7QUFDRixFQUpEOztBQU1BLEtBQU1RLFFBQVFDLFNBQVNDLGdCQUFULENBQTBCLE9BQTFCLENBQWQ7O0FBRUFSLFNBQVFNLEtBQVIsRUFBZSxVQUFDRyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDL0JBLFNBQU1DLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNDLENBQUQsRUFBTztBQUNyQ2pCLFdBQU1FLEtBQU4sQ0FBWWdCLE1BQVosQ0FBbUJKLEtBQW5CLEVBQTBCLENBQTFCLEVBQTZCO0FBQzNCLGdCQUFTZCxNQUFNQztBQURZLE1BQTdCO0FBR0EsU0FBSWdCLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixTQUFqQixNQUFnQyxPQUFwQyxFQUE2QztBQUMzQ0gsU0FBRUUsTUFBRixDQUFTRSxTQUFULEdBQXFCckIsTUFBTUUsS0FBTixDQUFZWSxLQUFaLEVBQW1CQyxLQUF4QztBQUNBZixhQUFNQyxXQUFOLEdBQW9CRCxNQUFNQyxXQUFOLEtBQXNCSixTQUF0QixHQUFrQ0MsU0FBbEMsR0FBOENELFNBQWxFO0FBQ0F5QixlQUFRQyxHQUFSLENBQVl2QixNQUFNRSxLQUFsQjtBQUNEO0FBQ0RlLE9BQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixTQUFqQixJQUE4QixNQUE5QjtBQUNELElBVkQ7QUFXRCxFQVpEOztBQWNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGYyZTcyM2JmOTEwMzAwOGQwN2ZmIiwiLyoqXHJcbiAqICBXZWJwYWNrIGVudHJ5IHBvaW50XHJcbioqL1xyXG5cclxuaW1wb3J0ICcuL2FwcC5qcyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBUaWMgVGFjIFRvZVxuKiovXG5cbmNvbnN0IHBsYXllck9uZSA9ICdYJztcbmNvbnN0IHBsYXllclR3byA9ICdPJztcbmNvbnN0IGNlbGxOdW1iZXJzID0gOTtcbmNvbnN0IHN0YXRlID0ge1xuICBjdXJyZW50VHVybjogcGxheWVyT25lLFxuICBib2FyZDogW11cbn07XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgY2VsbE51bWJlcnM7IGkrKykge1xuICBzdGF0ZS5ib2FyZC5wdXNoKHtcbiAgICAndmFsdWUnOiAnJ1xuICB9KTtcbn1cblxuY29uc3QgZm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gIH1cbn07XG5cbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcblxuZm9yRWFjaChjZWxscywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc3RhdGUuYm9hcmQuc3BsaWNlKGluZGV4LCAxLCB7XG4gICAgICAndmFsdWUnOiBzdGF0ZS5jdXJyZW50VHVyblxuICAgIH0pO1xuICAgIGlmIChlLnRhcmdldC5kYXRhc2V0WydjbGlja2VkJ10gPT09ICdmYWxzZScpIHtcbiAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IHN0YXRlLmJvYXJkW2luZGV4XS52YWx1ZTtcbiAgICAgIHN0YXRlLmN1cnJlbnRUdXJuID0gc3RhdGUuY3VycmVudFR1cm4gPT09IHBsYXllck9uZSA/IHBsYXllclR3byA6IHBsYXllck9uZTtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmJvYXJkKTtcbiAgICB9XG4gICAgZS50YXJnZXQuZGF0YXNldFsnY2xpY2tlZCddID0gJ3RydWUnO1xuICB9KTtcbn0pO1xuXG4vLyAxLiBSZXNldCBnYW1lXG4vLyAyLiBDaGVjayBmb3Igd2lubmVyIGFuZCByZXBvcnQgdG8gdmlld1xuXG4vLyBmdW5jdGlvbiBjaGVja0Zvcldpbm5lciAoKSB7XG4vLyAgIGNvbnN0IHdpbm5pbmdDb21ib3MgPSBbXG4vLyAgICAgWzAsIDEsIDJdLCBbMywgNCwgNV0sIFs2LCA3LCA4XSwgWzAsIDMsIDZdLCBbMSwgNCwgN10sIFsyLCA1LCA4XSwgWzAsIDQsIDhdLCBbMiwgNCwgNl1cbi8vICAgXTtcbi8vICAgcmV0dXJuIHdpbm5pbmdDb21ib3MuZmluZChmdW5jdGlvbiAoY29tYm8pIHtcbi8vICAgICBjb25zdCBjZWxscyA9IHN0YXRlLmJvYXJkO1xuLy8gICAgIGlmIChjZWxsc1tjb21ib1swXV0gPT09IGNlbGxzW2NvbWJvWzFdXSAmJiBjZWxsc1tjb21ib1sxXV0gPT09IGNlbGxzW2NvbWJvWzJdXSkge1xuLy8gICAgICAgcmV0dXJuIGNlbGxzW2NvbWJvWzBdXTtcbi8vICAgICAgIGNvbnNvbGUubG9nKGNlbGxzKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG4vLyBjaGVja0Zvcldpbm5lcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==