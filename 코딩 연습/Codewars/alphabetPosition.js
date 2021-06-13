// my
// 초반에 문제를 잘못 이해함
function alphabetPosition(text) {
  let text2 = text.toLowerCase();
  let answer = [];
  for (let i in text2) {
    let ascii = text2.charCodeAt(i);
    if (97 <= ascii && ascii <= 122) answer.push(String(ascii - 96))
  }
  return answer.join(' ');
}

// clever
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(' ');
}