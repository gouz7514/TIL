// my
// object iterate 할 때는 for ... in obj 사용
function findOdd(A) {
  let obj = {};
  for (let i of A) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }

  for (let o in obj) {
    if (obj[o] % 2 !== 0) {
      return o;
    }
  }
}

let A = [1,1,2,-2,5,2,4,4,-1,-2,5]
let res = findOdd(A);
console.log(parseInt(res));

// 위 함수 줄이기
function findOdd(A) {
  let obj = {};
  A.forEach((el) => {
    obj[el] ? obj[el]++ : obj[el] = 1;
  });

  for (prop in obj) {
    if (obj[prop] % 2 != 0) return Number(prop);
  }
}

// clever
// ^ : XOR 연산자 (이걸 사용하면 홀짝 계산이 가능하구나)
function findOdd(A) {
  return A.reduce((a,b) => a ^ b);
}