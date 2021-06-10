// my
function XO(str) {
  let cnt = 0
  for(let i of str) {
    if (i == 'o' || i == 'O') {
      cnt += 1
    } else if (i == 'x' || i == 'X') {
      cnt -= 1
    }
  }
  return cnt === 0
}

// clever
// 정규 표현식으로 전역(g), 대소문자 구분 없이(i)
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}