/**
 * Tic Tac Toe vs AI
**/

const state = {
  playerOne: 'X',
  playerTwo: 'O',
  currentTurn: 'X',
  board: [
    '', '', '', '', '', '', '', '', ''
  ]
};

const render = (state) => {
  document.querySelector('#app').innerHTML = `
  <div class='board-container'>
    <div class='board-title'>
      <h2>Tic Tac Toe</h2>
      <h2>Can you defeat the AI?!</h2>
    </div>
    <div class='board'>
      <div class='square'> ${state.board[0]} </div>
      <div class='square'> ${state.board[1]} </div>
      <div class='square'> ${state.board[2]} </div>
      <div class='square'> ${state.board[3]} </div>
      <div class='square'> ${state.board[4]} </div>
      <div class='square'> ${state.board[5]} </div>
      <div class='square'> ${state.board[6]} </div>
      <div class='square'> ${state.board[7]} </div>
      <div class='square'> ${state.board[8]} </div>
    </div>
  </div>`;
};
render(state);

const board = document.querySelector('.board');
board.addEventListener('click', (e) => {
  let { currentTurn } = state;
  const { playerOne, playerTwo } = state;
  const squareIndex = parseInt(e.target.dataset['squareId'], 10);
  board[squareIndex] = state.currentTurn;

  currentTurn = currentTurn === playerOne ? playerTwo : playerOne;
  render(state);
  console.log(currentTurn);
});

function checkForWinner () {
  const squares = state.board;

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];
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
