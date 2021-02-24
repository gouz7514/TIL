// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
  let answer = '';
  let date = 0;
  let MonthDate = [30,29,31,30,31,30,31,31,30,31,30,31]
  let yoil = ['FRI','SAT','SUN','MON','TUE','WED','THU']
  if(a == 1) {
      date = b-1;
  } else {
      for(let day of MonthDate.slice(0,a-1)) {
          date += day;
      }
      date += b;
  }
  answer = yoil[date%7];
  return answer;
}

// for ... in 과 for ... of를 헷갈려서 좀 헤맸다.