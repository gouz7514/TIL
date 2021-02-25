// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42862
function solution(n, lost, reserve) {
  let answer = 0;
  let total = Array(n).fill(1);
  for(let i of lost) {
      total[i-1] -= 1;
  }
  for(let i of reserve) {
      total[i-1] += 1;
  }
  for(let i of reserve) {
      if(lost.includes(i-1) && total[i-1] == 2 && total[i-2] == 0) {
          total[i-1] -= 1;
          total[i-2] += 1;
      } else if(lost.includes(i+1) && total[i-1] == 2 && total[i] == 0) {
          total[i-1] -= 1;
          total[i] += 1;
      }
  }
  for(let i = 0; i < total.length; i++) {
      if (total[i] > 0) answer += 1;
  }
  return answer;
}

// greedy를 이용한 풀이긴 한데 다른 사람들 풀이 보니까 어마무시하다.