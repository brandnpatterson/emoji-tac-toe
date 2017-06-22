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
	    this.turn = this.players[0].value;
	    (0, _utils.forEach)(game.cells, function (index, value) {
	      _this.board.push('');
	      value.innerHTML = game.board[index];
	      value.dataset['clicked'] = 'false';
	    });
	  }
	}; /**
	    * Tic Tac Toe
	   **/
	
	(0, _utils.forEach)(game.cells, function (index, value) {
	  value.addEventListener('click', function (e) {
	    var data = e.target.dataset;
	
	    if (data['clicked'] === 'false') {
	      data['clicked'] = 'true';
	      game.board.splice(index, 1, game.turn);
	      e.target.innerHTML = game.board[index];
	      game.turn = game.turn === game.players[0].value ? game.players[1].value : game.players[0].value;
	      console.log(game.turn);
	    }
	  });
	});
	game.start();
	
	var results = function results() {};
	results();
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGY1ZGFjNWRlZDYwNTI5NDQwYmYiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJjZWxscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBsYXllcnMiLCJ2YWx1ZSIsInNlbGVjdGlvbiIsInN0YXJ0IiwiYm9hcmQiLCJ0dXJuIiwiaW5kZXgiLCJwdXNoIiwiaW5uZXJIVE1MIiwiZGF0YXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGF0YSIsInRhcmdldCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwicXVlcnlTZWxlY3RvciIsInV0aWxzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwic2NvcGUiLCJpIiwibGVuZ3RoIiwiY2FsbCIsIndpbm5pbmdDb21ib3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLHdCOzs7Ozs7OztBQ0FBOztBQUVBLEtBQU1BLE9BQU87QUFDWEMsVUFBT0MsU0FBU0MsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FESTtBQUVYQyxZQUFTLENBQ1A7QUFDRUMsWUFBTyxHQURUO0FBRUVDLGdCQUFXO0FBRmIsSUFETyxFQUtQO0FBQ0VELFlBQU8sR0FEVDtBQUVFQyxnQkFBVztBQUZiLElBTE8sQ0FGRTtBQVlYQyxRQVpXLG1CQVlGO0FBQUE7O0FBQ1AsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLQyxJQUFMLEdBQVksS0FBS0wsT0FBTCxDQUFhLENBQWIsRUFBZ0JDLEtBQTVCO0FBQ0EseUJBQVFMLEtBQUtDLEtBQWIsRUFBb0IsVUFBQ1MsS0FBRCxFQUFRTCxLQUFSLEVBQWtCO0FBQ3BDLGFBQUtHLEtBQUwsQ0FBV0csSUFBWCxDQUFnQixFQUFoQjtBQUNBTixhQUFNTyxTQUFOLEdBQWtCWixLQUFLUSxLQUFMLENBQVdFLEtBQVgsQ0FBbEI7QUFDQUwsYUFBTVEsT0FBTixDQUFjLFNBQWQsSUFBMkIsT0FBM0I7QUFDRCxNQUpEO0FBS0Q7QUFwQlUsRUFBYixDLENBTkE7Ozs7QUE2QkEscUJBQVFiLEtBQUtDLEtBQWIsRUFBb0IsVUFBQ1MsS0FBRCxFQUFRTCxLQUFSLEVBQWtCO0FBQ3BDQSxTQUFNUyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFDQyxDQUFELEVBQU87QUFDckMsU0FBTUMsT0FBT0QsRUFBRUUsTUFBRixDQUFTSixPQUF0Qjs7QUFFQSxTQUFJRyxLQUFLLFNBQUwsTUFBb0IsT0FBeEIsRUFBaUM7QUFDL0JBLFlBQUssU0FBTCxJQUFrQixNQUFsQjtBQUNBaEIsWUFBS1EsS0FBTCxDQUFXVSxNQUFYLENBQWtCUixLQUFsQixFQUF5QixDQUF6QixFQUE0QlYsS0FBS1MsSUFBakM7QUFDQU0sU0FBRUUsTUFBRixDQUFTTCxTQUFULEdBQXFCWixLQUFLUSxLQUFMLENBQVdFLEtBQVgsQ0FBckI7QUFDQVYsWUFBS1MsSUFBTCxHQUFZVCxLQUFLUyxJQUFMLEtBQWNULEtBQUtJLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxLQUE5QixHQUFzQ0wsS0FBS0ksT0FBTCxDQUFhLENBQWIsRUFBZ0JDLEtBQXRELEdBQThETCxLQUFLSSxPQUFMLENBQWEsQ0FBYixFQUFnQkMsS0FBMUY7QUFDQWMsZUFBUUMsR0FBUixDQUFZcEIsS0FBS1MsSUFBakI7QUFDRDtBQUNGLElBVkQ7QUFXRCxFQVpEO0FBYUFULE1BQUtPLEtBQUw7O0FBRUEsS0FBTWMsVUFBVSxTQUFWQSxPQUFVLEdBQU0sQ0FDckIsQ0FERDtBQUVBQTs7QUFFQW5CLFVBQVNvQixhQUFULENBQXVCLFFBQXZCLEVBQWlDUixnQkFBakMsQ0FBa0QsT0FBbEQsRUFBMkQ7QUFBQSxVQUFNZCxLQUFLTyxLQUFMLEVBQU47QUFBQSxFQUEzRCxFOzs7Ozs7OztBQ2hEQTs7OztBQUlBLEtBQU1nQixRQUFRQyxPQUFPQyxPQUFQLEdBQWlCO0FBQzdCQyxVQUQ2QixtQkFDcEJDLEtBRG9CLEVBQ2JDLFFBRGEsRUFDSEMsS0FERyxFQUNJO0FBQy9CLFVBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxNQUFNSSxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDckNGLGdCQUFTSSxJQUFULENBQWNILEtBQWQsRUFBcUJDLENBQXJCLEVBQXdCSCxNQUFNRyxDQUFOLENBQXhCO0FBQ0Q7QUFDRixJQUw0Qjs7QUFNN0JHLGtCQUFlLENBQ2IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEYSxFQUNGLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREUsRUFDUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURULEVBQ29CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHBCLEVBQytCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRC9CLEVBQzBDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRDFDLEVBQ3FELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHJELEVBQ2dFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGhFO0FBTmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZjVkYWM1ZGVkNjA1Mjk0NDBiZiIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogVGljIFRhYyBUb2VcbioqL1xuXG5pbXBvcnQgeyBmb3JFYWNoLCB3aW5uaW5nQ29tYm9zIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGdhbWUgPSB7XG4gIGNlbGxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLFxuICBwbGF5ZXJzOiBbXG4gICAge1xuICAgICAgdmFsdWU6ICdYJyxcbiAgICAgIHNlbGVjdGlvbjogW11cbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnTycsXG4gICAgICBzZWxlY3Rpb246IFtdXG4gICAgfVxuICBdLFxuICBzdGFydCAoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMudHVybiA9IHRoaXMucGxheWVyc1swXS52YWx1ZTtcbiAgICBmb3JFYWNoKGdhbWUuY2VsbHMsIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaCgnJyk7XG4gICAgICB2YWx1ZS5pbm5lckhUTUwgPSBnYW1lLmJvYXJkW2luZGV4XTtcbiAgICAgIHZhbHVlLmRhdGFzZXRbJ2NsaWNrZWQnXSA9ICdmYWxzZSc7XG4gICAgfSk7XG4gIH1cbn07XG5cbmZvckVhY2goZ2FtZS5jZWxscywgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICBpZiAoZGF0YVsnY2xpY2tlZCddID09PSAnZmFsc2UnKSB7XG4gICAgICBkYXRhWydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gICAgICBnYW1lLmJvYXJkLnNwbGljZShpbmRleCwgMSwgZ2FtZS50dXJuKTtcbiAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IGdhbWUuYm9hcmRbaW5kZXhdO1xuICAgICAgZ2FtZS50dXJuID0gZ2FtZS50dXJuID09PSBnYW1lLnBsYXllcnNbMF0udmFsdWUgPyBnYW1lLnBsYXllcnNbMV0udmFsdWUgOiBnYW1lLnBsYXllcnNbMF0udmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhnYW1lLnR1cm4pO1xuICAgIH1cbiAgfSk7XG59KTtcbmdhbWUuc3RhcnQoKTtcblxuY29uc3QgcmVzdWx0cyA9ICgpID0+IHtcbn1cbnJlc3VsdHMoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnYW1lLnN0YXJ0KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiLyoqXG4gKiBHZW5lcmFsIFV0aWxzXG4qKi9cblxuY29uc3QgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9yRWFjaCAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcbiAgICB9XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=