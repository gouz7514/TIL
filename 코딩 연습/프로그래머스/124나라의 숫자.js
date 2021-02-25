// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12899
function solution(n) {
  let answer = '';
  let numbers = ['4','1','2'];
  while (n > 0) {
      let remainder = n % 3;
      n = parseInt(n/3);
      if (remainder == 0) n -= 1;
      answer = numbers[remainder].concat(answer);
  }
  return answer;
}
// 다시 풀어도 참신하구만..
// 나머지가 0이면 4이다. 그래서 '4','1','2'