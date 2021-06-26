// my
// 공통 구간 구하는 문제. 전에 풀어본 적 있어서 바로 풀음
// https://velog.io/@gouz7514/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A8%EC%86%8D%EC%B9%B4%EB%A9%94%EB%9D%BC
function sumIntervals(intervals){
  let answer = 0;
  intervals.sort((a,b) => a[0] - b[0]);
  
  let start = intervals[0][0];
  let final = intervals[0][1];
  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= final) {
      final = Math.max(final, intervals[i][1]);
    } else {
      answer += final - start;
      start = intervals[i][0];
      final = intervals[i][1];
    }
  }
  answer += final - start;
  return answer;
}