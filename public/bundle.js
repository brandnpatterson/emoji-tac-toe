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
	
	var playerOneSymbol = 'X';
	var playerTwoSymbol = 'O';
	var currentTurn = playerOneSymbol;
	var board = document.querySelector('.board');
	var clicked = 0;
	
	function checkForTurn(e) {
	  e.target.innerHTML = currentTurn;
	  currentTurn = currentTurn === playerOneSymbol ? playerTwoSymbol : playerOneSymbol;
	  clicked++;
	  console.log(clicked);
	
	  if (clicked === 9) {
	    checkForWinner();
	  }
	}
	
	function checkForWinner() {
	  var squares = Array.prototype.slice.call(document.querySelectorAll('.square'), 0);
	  var symbols = squares.map(function (square) {
	    return square.innerHTML;
	  });
	  console.log(symbols);
	}
	
	board.addEventListener('click', checkForTurn);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGE0MGYyMzhmM2E5YjlkZTY0MjMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIl0sIm5hbWVzIjpbInBsYXllck9uZVN5bWJvbCIsInBsYXllclR3b1N5bWJvbCIsImN1cnJlbnRUdXJuIiwiYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGlja2VkIiwiY2hlY2tGb3JUdXJuIiwiZSIsInRhcmdldCIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0Zvcldpbm5lciIsInNxdWFyZXMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzeW1ib2xzIiwibWFwIiwic3F1YXJlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esd0I7Ozs7Ozs7O0FDSkE7Ozs7QUFJQSxLQUFJQSxrQkFBa0IsR0FBdEI7QUFDQSxLQUFJQyxrQkFBa0IsR0FBdEI7QUFDQSxLQUFJQyxjQUFjRixlQUFsQjtBQUNBLEtBQUlHLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLEtBQUlDLFVBQVUsQ0FBZDs7QUFHQSxVQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUN2QkEsS0FBRUMsTUFBRixDQUFTQyxTQUFULEdBQXFCUixXQUFyQjtBQUNBQSxpQkFBY0EsZ0JBQWdCRixlQUFoQixHQUFrQ0MsZUFBbEMsR0FBb0RELGVBQWxFO0FBQ0FNO0FBQ0FLLFdBQVFDLEdBQVIsQ0FBWU4sT0FBWjs7QUFFQSxPQUFJQSxZQUFZLENBQWhCLEVBQW9CO0FBQ2xCTztBQUNEO0FBQ0Y7O0FBRUQsVUFBU0EsY0FBVCxHQUEyQjtBQUN6QixPQUFJQyxVQUFVQyxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJkLFNBQVNlLGdCQUFULENBQTBCLFNBQTFCLENBQTNCLEVBQWlFLENBQWpFLENBQWQ7QUFDQSxPQUFJQyxVQUFVTixRQUFRTyxHQUFSLENBQVksVUFBVUMsTUFBVixFQUFrQjtBQUMxQyxZQUFPQSxPQUFPWixTQUFkO0FBQ0QsSUFGYSxDQUFkO0FBR0FDLFdBQVFDLEdBQVIsQ0FBWVEsT0FBWjtBQUNEOztBQUVEakIsT0FBTW9CLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDaEIsWUFBaEMsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YTQwZjIzOGYzYTliOWRlNjQyMyIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogVGljIFRhYyBUb2UgdnMgQUlcbioqL1xuXG52YXIgcGxheWVyT25lU3ltYm9sID0gJ1gnO1xudmFyIHBsYXllclR3b1N5bWJvbCA9ICdPJztcbnZhciBjdXJyZW50VHVybiA9IHBsYXllck9uZVN5bWJvbDtcbnZhciBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xudmFyIGNsaWNrZWQgPSAwO1xuXG5cbmZ1bmN0aW9uIGNoZWNrRm9yVHVybihlKSB7XG4gIGUudGFyZ2V0LmlubmVySFRNTCA9IGN1cnJlbnRUdXJuO1xuICBjdXJyZW50VHVybiA9IGN1cnJlbnRUdXJuID09PSBwbGF5ZXJPbmVTeW1ib2wgPyBwbGF5ZXJUd29TeW1ib2wgOiBwbGF5ZXJPbmVTeW1ib2w7XG4gIGNsaWNrZWQrKztcbiAgY29uc29sZS5sb2coY2xpY2tlZCk7XG5cbiAgaWYgKGNsaWNrZWQgPT09IDkgKSB7XG4gICAgY2hlY2tGb3JXaW5uZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvcldpbm5lciAoKSB7XG4gIHZhciBzcXVhcmVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpLCAwKTtcbiAgdmFyIHN5bWJvbHMgPSBzcXVhcmVzLm1hcChmdW5jdGlvbiAoc3F1YXJlKSB7XG4gICAgcmV0dXJuIHNxdWFyZS5pbm5lckhUTUw7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhzeW1ib2xzKTtcbn1cblxuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0ZvclR1cm4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==