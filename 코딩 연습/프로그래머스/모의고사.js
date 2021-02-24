// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
  let person1 = [1,2,3,4,5];
  let person2 = [2,1,2,3,2,4,2,5];
  let person3 = [3,3,1,1,2,2,4,4,5,5];
  let correct = [0,0,0];
  let answer = [];
  
  for(let i = 0; i < answers.length; i++) {
      if(answers[i] == person1[i%person1.length]) {
          correct[0] += 1;
      }
      if(answers[i] == person2[i%person2.length]) {
          correct[1] += 1;
      }
      if(answers[i] == person3[i%person3.length]) {
          correct[2] += 1;
      }
  }
  for(let i in correct) {
      if(correct[i] == Math.max.apply(null, correct)) {
          answer.push(parseInt(i)+1);
      }
  }
  
  return answer;
}

// filter를 사용하는 좋은 답안도 존재한다. 연습해볼것!