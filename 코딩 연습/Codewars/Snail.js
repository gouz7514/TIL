// my
// 방향 정말 헷갈리네
snail = function(array) {
  let answer = []
  let arrLen = array.length
  let row = 0
  let col = 0
  let start = 0
  
  if (array[0].length == 0) return []
  
  while (answer.length < array.length ** 2) {
    for (let i = col; i < arrLen; i++) { // row 그대로, col 증가
      answer.push(array[row][i])
      if (i == arrLen - 1) col = i
    }
    
    row += 1
    for (let i = row; i < arrLen; i++) { // row 증가, col 그대로
      answer.push(array[i][col])
      if (i == arrLen - 1) row = i
    }
    
    col -= 1
    for (let i = col; i >= start; i--) { // row 그대로, col 감소
      answer.push(array[row][i])
      if (i == start) col = i
    }
    
    start += 1
    row -= 1
    for (let i = row; i >= start; i--) { // row 감소, col 그대로
      answer.push(array[i][col])
      if (i == start) row = i
    }
    
    col += 1
    arrLen -= 1
  }
  
  return answer
}

// clever
// 미쳤네 이거 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}