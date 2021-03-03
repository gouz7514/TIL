// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  let answer = []; // 최종 결과
  let days = []; // 각 기능이 완료되는데 걸리는 시간
  for(let i in progresses) {
      let day = 0;
      let cur_progress = progresses[i];
      while(cur_progress < 100) {
          cur_progress += speeds[i];
          day += 1;
      }
      days.push(day);
  }
  let s = days[0]; // 기준
  let x = 0;
  
  // 기준보다 큰 숫자 나오면 다른 날짜에 배포해야 함
  for(let i of days) {
      if (i <= s) {
          x += 1;
      } else {
          answer.push(x);
          x = 1;
          s = i;
      }
  }
  answer.push(x);
  
  return answer;
}