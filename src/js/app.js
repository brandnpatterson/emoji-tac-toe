/**
 * Tic Tac Toe vs AI
**/

var playerOneSymbol = 'X';
var playerTwoSymbol = 'O';
var currentTurn = playerOneSymbol;
var board = document.querySelector('.board');

board.addEventListener('click', function (e) {
  e.target.innerHTML = currentTurn;
  currentTurn = currentTurn === playerOneSymbol ? playerTwoSymbol : playerOneSymbol;
});
