function solution(scores) {
  let answer = '';
  for (let i = 0; i < scores.length; i++) {
    let arr = [];
    for (let j = 0; j < scores.length; j++) {
      arr.push(scores[j][i]);
    }

    if (scores[i][i] == Math.max(...arr) || scores[i][i] == Math.min(...arr)) { // 최고점수나 최저점수이고
      if (arr.filter(x => x == scores[i][i]).length == 1) { // 유일하면
        arr.splice(i, 1);
      }
    }

    let total = arr.reduce(function add(sum, curValue) {
      return sum + curValue;
    }, 0);

    answer += grade(total / arr.length);
  }
  return answer;
}

function grade(avr) {
  if (avr >= 90) {
      return 'A';
  } else if (avr >= 80) {
      return 'B';
  } else if (avr >= 70) {
      return 'C';
  } else if (avr >= 50) {
      return 'D';
  } else {
      return 'F';
  }
}

let scores = [[70,49,90],[68,50,38],[73,31,100]];
let result = solution(scores);
console.log(result);