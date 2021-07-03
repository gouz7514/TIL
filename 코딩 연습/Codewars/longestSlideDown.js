// my
function longestSlideDown (pyramid) {
  for (let i = 1; i < pyramid.length; i++) {
    for (let j = 0; j < pyramid[i].length; j++) {
      if (j == 0) {
        pyramid[i][j] += pyramid[i-1][j]
      } else if (j == pyramid[i].length - 1) {
        pyramid[i][j] += pyramid[i-1][j-1]
      } else {
        pyramid[i][j] += Math.max(pyramid[i-1][j], pyramid[i-1][j-1])
      }
    }
  }
  return Math.max(...pyramid[pyramid.length - 1])
}

let pyramid = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];
let answer = logestSlideDown(pyramid)
console.log(answer)

// clever
// reduceRight : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
// 이건 알아도 못 풀겠네 ㅋㅋㅋㅋ
function longestSlideDown (pyramid) {
  return pyramid.reduceRight((last,current)=>current.map(
    (v,i)=>v+Math.max(last[i],last[i+1])
  ))[0];
}