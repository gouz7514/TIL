// my
// 요구 사항 잘 이해하고 한번에 풀음.
// 정수 체크는 Number.isInteger
// 정수 체크 또 다른 방법 : Math.sqrt() 값을 1로 나눠서 나머지가 0인지 체크
// Math.sqrt(sum) % 1 == 0 ?
function listSquared(m, n) {
  let answer = [];
  for (let i = m; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        sum += j ** 2;
      }
    }
    if (Number.isInteger(Math.sqrt(sum))) {
      answer.push([i, sum])
    }
  }
  return answer;
}

let result = listSquared(1, 250);
console.log(result);