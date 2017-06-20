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

  if (clicked === 9 ) {
    checkForWinner();
  }
}

function checkForWinner () {
  var squares = Array.prototype.slice.call(document.querySelectorAll('.square'), 0);
  var symbols = squares.map(function (square) {
    return square.innerHTML;
  });
  console.log(symbols);
}

board.addEventListener('click', checkForTurn);
