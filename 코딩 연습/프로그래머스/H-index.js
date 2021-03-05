// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42747
function solution(citations) {
  citations.sort((a,b) => a-b);
  let l = citations.length;
  for(let i in citations) {
      if(citations[i] >= l-i) {
          return l-i;
      }
  }
  return 0;
}