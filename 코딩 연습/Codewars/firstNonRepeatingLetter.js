// my
// 처음에 문제 잘못 이해함 + 제약사항 대환장 파티
let s = "aaaA"

function firstNonRepeatingLetter(s) {
  let arr = Array.from(new Set(s));
  s = s.toLowerCase();
  for (let i of arr) {
    // 대문자 체크
    let capital = false;
    if (65 <= i.charCodeAt() && i.charCodeAt() <= 90) {
      capital = true;
    }
    i = i.toLowerCase(); // 비교할 문자 소문자로 바꿈
    let first = s.indexOf(i); // 첫 출현 위치
    let rest = s.slice(first + 1).toLowerCase(); // 그 뒤 문자열 다 소문자로
    if (rest.indexOf(i) == -1) return capital ? i.toUpperCase() : i;
  }
  return "";
}

let answer = firstNonRepeatingLetter(s);
console.log(answer);

// clever
// 와... 위에서 한 짓을 이렇게 줄여버릴 수가 있네
function firstNonRepeatingLetter(s) {
  for(let i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}