let currentBoard = [[2, 1, 1],  
                    [1, 2, 2],
                    [2, 1, 1]];

function ticTacToeChecker(boardState) {
  if (isExistEmptyCells(boardState)) {
    return -1;
  } else {   
    console.log(isWon(boardState));
    if (isWon(boardState)[1] === 1) {
      return 1;
    } else if (isWon(boardState)[1] === 2) {
      return 2;
    } else {
      return 0;
    }
  }
}

function isWon(board) {
  for (let i = 0; i < board.length; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return [true, board[i][0]] ;
      }
  }

  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return [true, board[0][0]];
  }

  if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return [true, board[0][0]];
  }

  if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
    return [true, board[0][0]] ;
  }

  if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
    return [true, board[0][1]] ;
  }

  if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
    return [true, board[0][2]] ;
  }

  return [false, false];
}

function isExistEmptyCells(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
           return true;
        }
      }
  }
  return false;
}

let result = ticTacToeChecker(currentBoard);
console.log(result);


