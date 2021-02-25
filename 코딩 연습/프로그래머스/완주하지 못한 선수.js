// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  while(participant.length) {
      let p = participant.pop();
      if (p != completion.pop()) return p;
  }
}

// 문제의 조건이 '단 1명만 완주하지 못했다' 니까 이렇게 풀수 있음.
// python에서는 Collection을 사용했는데 여기서도 비슷한 게 있는지 찾아보자.