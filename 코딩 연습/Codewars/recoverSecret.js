// my
// 정렬, 경우의 수로 푸는 문제가 아니다 이건
// 어케 풀지?
// set으로 만들고 배열로 만든 뒤 하나하나 체크하면서 재배열
// 아 이런 문제 개시렁
// 이렇게 풀면 순서 보장이 안 돼서 풀 수가 없다
// 실패
let recoverSecret = function(triplets) {
  let set = new Set()
  for (let triplet of triplets) {
    triplet.forEach(t => set.add(t))
  }
  let arr = Array.from(set)

  for (let triplet of triplets) {
    let a = arr.indexOf(triplet[0])
    let b = arr.indexOf(triplet[1])
    let c = arr.indexOf(triplet[2])
    
    // 1 2 3 은 패스
    if (a < b) {
      if (c < a) { // 2 3 1
        let x = arr.splice(c, 1)[0]
        arr.splice(b, 0, x)
      } else if (c < b) { // 1 3 2
        let x = arr.splice(b, 1)[0]
        arr.splice(c, 0, x)
      }
    }
  
    if (a > b) {
      if (c > a) { // 2 1 3
        let x = arr.splice(a, 1)[0]
        arr.splice(b, 0, x)
      } else if (c > b) { // 3 1 2
        let x = arr.splice(a, 1)[0]
        if (b == 0) {
          arr.unshift(x)
        } else {
          arr.splice(b, 0, x)
        }
      } else if (b > c) { // 3 2 1
        console.log('-----------')
        let x = arr.splice(a, 1)[0]
        arr.splice(b, 0, x)
        let y = arr.splice(c, 1)[0]
        arr.splice(b+1, 0, y)
      }
    }
  }

  return arr.join('')
}

let triplets = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]


let answer = recoverSecret(triplets)
console.log(answer);

// clever
// 너무 좋은 풀이다
// 1. 첫번째 글자를 탐색한다. 첫번째 글자는 무조건 triplet의 제일 왼쪽에 위치해야 한다.
// 2. 1단계에서 첫 글자가 탐색되면, 해당 글자 포함하는 튜플의 경우 shift를 수행하고
// 모든 글자를 찾을 때까지 남은 남은 문자들에 대해 재귀를 돌린다.
var recoverSecret = function(triplets) {
  for(var [first] of triplets) { // array destructuring
    if (triplets.every(tuple => tuple.indexOf(first) <= 0)) {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}