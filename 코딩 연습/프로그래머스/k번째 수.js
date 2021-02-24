// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
  var answer = [];

  for(let command of commands) {
      answer.push(array.slice(command[0]-1, command[1]).sort((a,b) => a-b)[command[2]-1]);
  }
  
  return answer;
}

// 처음엔 그냥 sort()만 사용해서 왜 틀린지 몰랐음.
// 그냥 sort()와 sort(function)의 차이를 잘 알고 사용할 것!