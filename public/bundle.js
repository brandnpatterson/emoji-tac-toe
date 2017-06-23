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
	  start: function start() {
	    var _this = this;
	
	    this.players = [{
	      value: 'X',
	      selection: [],
	      secondArray: []
	    }, {
	      value: 'O',
	      selection: [],
	      secondArray: []
	    }];
	    this.board = [];
	    this.turn = this.players[0];
	    // custom forEach used for elements selected with querySelectorAll
	    (0, _utils.forEach)(this.cells, function (index, value) {
	      _this.board.push('');
	      value.innerHTML = _this.board[index];
	      value.dataset['clicked'] = 'false';
	    });
	  }
	}; /**
	    * Tic Tac Toe Game
	   **/
	// import { arraysEqual, forEach, winningCombos } from './utils';
	
	
	(0, _utils.forEach)(game.cells, function (index, value) {
	  value.addEventListener('click', function (e) {
	    var board = game.board,
	        players = game.players;
	
	    var player1 = players[0];
	    var player2 = players[1];
	    var selection = game.turn.selection;
	    var secondArray = game.turn.secondArray;
	    var data = e.target.dataset;
	
	    if (data['clicked'] === 'false') {
	      data['clicked'] = 'true';
	      board.splice(index, 1, game.turn.value);
	      e.target.innerHTML = board[index];
	      game.turn = game.turn === player2 ? player1 : player2;
	      selection.push(index);
	      selection.sort(function (a, b) {
	        return a - b;
	      });
	
	      // winningCombos.map((combo) => {
	
	      // if selection includes any combos
	      // end game declare winner
	
	      //   if (contains(combo, selection) === true) {
	      //     alert(`${game.turn.value} Wins!`);
	      //     game.start();
	      //   }
	      //   game.turn = game.turn === player2 ? player1 : player2;
	      // });
	    }
	  });
	});
	game.start();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzZkNGQ4MzYyNGEzMTI1MDU1NzkiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJjZWxscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInN0YXJ0IiwicGxheWVycyIsInZhbHVlIiwic2VsZWN0aW9uIiwic2Vjb25kQXJyYXkiLCJib2FyZCIsInR1cm4iLCJpbmRleCIsInB1c2giLCJpbm5lckhUTUwiLCJkYXRhc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwbGF5ZXIxIiwicGxheWVyMiIsImRhdGEiLCJ0YXJnZXQiLCJzcGxpY2UiLCJzb3J0IiwiYSIsImIiLCJ1dGlscyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsInNjb3BlIiwiaSIsImxlbmd0aCIsImNhbGwiLCJ3aW5uaW5nQ29tYm9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSx3Qjs7Ozs7Ozs7QUNBQTs7QUFFQSxLQUFNQSxPQUFPO0FBQ1hDLFVBQU9DLFNBQVNDLGdCQUFULENBQTBCLE9BQTFCLENBREk7QUFFWEMsUUFGVyxtQkFFRjtBQUFBOztBQUNQLFVBQUtDLE9BQUwsR0FBZSxDQUNiO0FBQ0VDLGNBQU8sR0FEVDtBQUVFQyxrQkFBVyxFQUZiO0FBR0VDLG9CQUFhO0FBSGYsTUFEYSxFQU1iO0FBQ0VGLGNBQU8sR0FEVDtBQUVFQyxrQkFBVyxFQUZiO0FBR0VDLG9CQUFhO0FBSGYsTUFOYSxDQUFmO0FBWUEsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLQyxJQUFMLEdBQVksS0FBS0wsT0FBTCxDQUFhLENBQWIsQ0FBWjtBQUNBO0FBQ0EseUJBQVEsS0FBS0osS0FBYixFQUFvQixVQUFDVSxLQUFELEVBQVFMLEtBQVIsRUFBa0I7QUFDcEMsYUFBS0csS0FBTCxDQUFXRyxJQUFYLENBQWdCLEVBQWhCO0FBQ0FOLGFBQU1PLFNBQU4sR0FBa0IsTUFBS0osS0FBTCxDQUFXRSxLQUFYLENBQWxCO0FBQ0FMLGFBQU1RLE9BQU4sQ0FBYyxTQUFkLElBQTJCLE9BQTNCO0FBQ0QsTUFKRDtBQUtEO0FBdkJVLEVBQWIsQyxDQU5BOzs7QUFHQTs7O0FBNkJBLHFCQUFTZCxLQUFLQyxLQUFkLEVBQXFCLFVBQUNVLEtBQUQsRUFBUUwsS0FBUixFQUFrQjtBQUNyQ0EsU0FBTVMsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsU0FDN0JQLEtBRDZCLEdBQ1ZULElBRFUsQ0FDN0JTLEtBRDZCO0FBQUEsU0FDdEJKLE9BRHNCLEdBQ1ZMLElBRFUsQ0FDdEJLLE9BRHNCOztBQUVyQyxTQUFNWSxVQUFVWixRQUFRLENBQVIsQ0FBaEI7QUFDQSxTQUFNYSxVQUFVYixRQUFRLENBQVIsQ0FBaEI7QUFDQSxTQUFNRSxZQUFZUCxLQUFLVSxJQUFMLENBQVVILFNBQTVCO0FBQ0EsU0FBTUMsY0FBY1IsS0FBS1UsSUFBTCxDQUFVRixXQUE5QjtBQUNBLFNBQU1XLE9BQU9ILEVBQUVJLE1BQUYsQ0FBU04sT0FBdEI7O0FBRUEsU0FBSUssS0FBSyxTQUFMLE1BQW9CLE9BQXhCLEVBQWlDO0FBQy9CQSxZQUFLLFNBQUwsSUFBa0IsTUFBbEI7QUFDQVYsYUFBTVksTUFBTixDQUFhVixLQUFiLEVBQW9CLENBQXBCLEVBQXVCWCxLQUFLVSxJQUFMLENBQVVKLEtBQWpDO0FBQ0FVLFNBQUVJLE1BQUYsQ0FBU1AsU0FBVCxHQUFxQkosTUFBTUUsS0FBTixDQUFyQjtBQUNBWCxZQUFLVSxJQUFMLEdBQVlWLEtBQUtVLElBQUwsS0FBY1EsT0FBZCxHQUF3QkQsT0FBeEIsR0FBa0NDLE9BQTlDO0FBQ0FYLGlCQUFVSyxJQUFWLENBQWVELEtBQWY7QUFDQUosaUJBQVVlLElBQVYsQ0FBZSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxnQkFBVUQsSUFBSUMsQ0FBZDtBQUFBLFFBQWY7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGLElBNUJEO0FBNkJELEVBOUJEO0FBK0JBeEIsTUFBS0ksS0FBTCxHOzs7Ozs7OztBQy9EQTs7OztBQUlBLEtBQU1xQixRQUFRQyxPQUFPQyxPQUFQLEdBQWlCO0FBQzdCQyxVQUQ2QixtQkFDcEJDLEtBRG9CLEVBQ2JDLFFBRGEsRUFDSEMsS0FERyxFQUNJO0FBQy9CLFVBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxNQUFNSSxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDckNGLGdCQUFTSSxJQUFULENBQWNILEtBQWQsRUFBcUJDLENBQXJCLEVBQXdCSCxNQUFNRyxDQUFOLENBQXhCO0FBQ0Q7QUFDRixJQUw0Qjs7QUFNN0JHLGtCQUFlLENBQ2IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEYSxFQUNGLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREUsRUFDUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURULEVBQ29CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHBCLEVBQytCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRC9CLEVBQzBDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRDFDLEVBQ3FELENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRHJELEVBQ2dFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRGhFO0FBTmMsRUFBL0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNmQ0ZDgzNjI0YTMxMjUwNTU3OSIsIi8qKlxyXG4gKiAgV2VicGFjayBlbnRyeSBwb2ludFxyXG4qKi9cclxuXHJcbmltcG9ydCAnLi9hcHAuanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogVGljIFRhYyBUb2UgR2FtZVxuKiovXG4vLyBpbXBvcnQgeyBhcnJheXNFcXVhbCwgZm9yRWFjaCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZm9yRWFjaCwgd2lubmluZ0NvbWJvcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBnYW1lID0ge1xuICBjZWxsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSxcbiAgc3RhcnQgKCkge1xuICAgIHRoaXMucGxheWVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6ICdYJyxcbiAgICAgICAgc2VsZWN0aW9uOiBbXSxcbiAgICAgICAgc2Vjb25kQXJyYXk6IFtdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogJ08nLFxuICAgICAgICBzZWxlY3Rpb246IFtdLFxuICAgICAgICBzZWNvbmRBcnJheTogW11cbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLnR1cm4gPSB0aGlzLnBsYXllcnNbMF07XG4gICAgLy8gY3VzdG9tIGZvckVhY2ggdXNlZCBmb3IgZWxlbWVudHMgc2VsZWN0ZWQgd2l0aCBxdWVyeVNlbGVjdG9yQWxsXG4gICAgZm9yRWFjaCh0aGlzLmNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLnB1c2goJycpO1xuICAgICAgdmFsdWUuaW5uZXJIVE1MID0gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICB2YWx1ZS5kYXRhc2V0WydjbGlja2VkJ10gPSAnZmFsc2UnO1xuICAgIH0pO1xuICB9XG59O1xuXG5mb3JFYWNoIChnYW1lLmNlbGxzLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB7IGJvYXJkLCBwbGF5ZXJzIH0gPSBnYW1lO1xuICAgIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXJzWzBdO1xuICAgIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXJzWzFdO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGdhbWUudHVybi5zZWxlY3Rpb247XG4gICAgY29uc3Qgc2Vjb25kQXJyYXkgPSBnYW1lLnR1cm4uc2Vjb25kQXJyYXk7XG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICBpZiAoZGF0YVsnY2xpY2tlZCddID09PSAnZmFsc2UnKSB7XG4gICAgICBkYXRhWydjbGlja2VkJ10gPSAndHJ1ZSc7XG4gICAgICBib2FyZC5zcGxpY2UoaW5kZXgsIDEsIGdhbWUudHVybi52YWx1ZSk7XG4gICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBib2FyZFtpbmRleF07XG4gICAgICBnYW1lLnR1cm4gPSBnYW1lLnR1cm4gPT09IHBsYXllcjIgPyBwbGF5ZXIxIDogcGxheWVyMjtcbiAgICAgIHNlbGVjdGlvbi5wdXNoKGluZGV4KTtcbiAgICAgIHNlbGVjdGlvbi5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgICAgIC8vIHdpbm5pbmdDb21ib3MubWFwKChjb21ibykgPT4ge1xuXG4gICAgICAvLyBpZiBzZWxlY3Rpb24gaW5jbHVkZXMgYW55IGNvbWJvc1xuICAgICAgLy8gZW5kIGdhbWUgZGVjbGFyZSB3aW5uZXJcblxuICAgICAgLy8gICBpZiAoY29udGFpbnMoY29tYm8sIHNlbGVjdGlvbikgPT09IHRydWUpIHtcbiAgICAgIC8vICAgICBhbGVydChgJHtnYW1lLnR1cm4udmFsdWV9IFdpbnMhYCk7XG4gICAgICAvLyAgICAgZ2FtZS5zdGFydCgpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGdhbWUudHVybiA9IGdhbWUudHVybiA9PT0gcGxheWVyMiA/IHBsYXllcjEgOiBwbGF5ZXIyO1xuICAgICAgLy8gfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuZ2FtZS5zdGFydCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiLyoqXG4gKiBHZW5lcmFsIFV0aWxzXG4qKi9cblxuY29uc3QgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9yRWFjaCAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcbiAgICB9XG4gIH0sXG4gIHdpbm5pbmdDb21ib3M6IFtcbiAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLCBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLCBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=