// anagram : 단어 자리 바꿔서 노는 거. 즉 출현 횟수가 같아야 한다
// 처음에 이해를 완전히 잘못함. 아직 Object 에 대한 이해가 많이 부족하다.
// my : 문자열을 배열로 펼쳐서 정렬하고 다시 합쳐서 같은지 비교하기
let word = 'abba';
let words = ['aabb', 'abcd', 'bbaa', 'dada']; // 결과 : aabb, bbaa

function anagrams(word, words) {
  let answer = [];
  let x = word.split('').sort()
  for (let w of words) {
    let ww = w.split('').sort()
    if (JSON.stringify(x) == JSON.stringify(ww)) answer.push(w);
  }
  return answer;
}

console.log(anagrams(word, words));

// clever
String.prototype.sort = function() {
  return this.split("").sort().join("");
}

function anagrams(word, words) {
  return words.filter((x) => x.sort() === word.sort())
}