function validSolution(board){
  // 가로
  for (let i = 0; i < 9; i++) {
    let arr = board[i].slice().sort()
    let set = new Set(arr)
    if (arr[0] !== 1 || set.size !== 9) {
      return false;
    }
  }
  
  // 세로
  for (let i = 0; i < 9; i++) {
    let arr = []
    for(let j = 0; j < 9; j++) {
      arr.push(board[j][i])
    }
    let arr2 = arr.slice().sort()
    let set = new Set(arr2)
    if (arr2[0] !== 1 && set.size !== 9) {
      return false;
    }
  }

  // 3 * 3
  let row = 0;
  let col = 0;
  let arr = [];
  for (let i = 0; i < 9; i++) {
    for (let j = row; j < row + 3; j++) {
      for (let k = col; k < col + 3; k++) {
        arr.push(board[j][k])
      }
    }
    let arr2 = arr.slice().sort()
    let set = new Set(arr2)

    if (arr2[0] !== 1 && set.size !== 9) {
      return false;
    }
    if (i % 3 == 2) {
      row += 3
      col = 0
    } else {
      col += 3
    }
    arr = []
  }
  
  return true;
}

let answer = validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]);
console.log(answer)