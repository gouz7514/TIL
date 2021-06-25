// my
// 처음에 이해를 잘못해서 이틀이나 걸렸네
function nextBigger(n){
  let arr = n.toString().split('')
  if (arr.length == 1) return -1
  let flag = -1;

  // flag 기점으로 끊어서 뒤에 정렬하고 탐색하면서 큰 애 나오면 바꾸고 break
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i-1]) { // 뒤에 애 보다 앞에 애가 작은 순간이 기점
      flag = i - 1;
      break
    }
  }

  if (flag == -1) return -1;
  let change = 0; // 바꿀 자리 기억하는 변수

  arr = arr.slice(0, flag + 1).concat(arr.slice(flag + 1).sort());
  for (let i = flag + 1; i < arr.length; i++) {
    if (arr[i] > arr[flag]) {
      change = i;
      break
    }
  }

  let temp = arr[flag];
  arr[flag] = arr[change];
  arr[change] = temp;
  
  return parseInt(arr.join(''));
}

// clever 버전은 나중에 시간내서 읽어보자

let n = 9628879;
let answer = nextBigger(n);
console.log(answer);