// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42746
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}