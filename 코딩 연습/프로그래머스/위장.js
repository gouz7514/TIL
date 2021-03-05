// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
  let answer = 1;
  let arr = [];
  for(let c of clothes){
      if(!arr[c[1]]) arr[c[1]] = 0;
      arr[c[1]] += 1;
  }
  for(let i in arr) {
      answer *= (arr[i] + 1);
  }
  return answer - 1;
}