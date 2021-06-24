function nextBigger(n){
  let arr = n.toString().split('')
  if (arr.length == 1) return -1
  let flag = -1;
  
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i-1]) { // 뒤에 애 보다 앞에 애가 작은 순간이 기점
      flag = i - 1;
      break
    }
  }
  console.log("flag : ", flag);

  if (flag == -1) return -1;
  arr = arr.slice(0, flag + 1).concat(arr.slice(flag + 1).sort());
  
  // let y = arr.indexOf(arr2[0]); // 여기가 문제

  // let temp = arr[flag];
  // arr[flag] = arr[y];
  // arr[y] = temp;
  // arr = arr.slice(0, flag + 1).concat(arr.slice(flag + 1).sort());
  // return parseInt(arr.join(''));
  return arr;
}

// flag 기점으로 끊어서 뒤에 정렬하고 탐색하면서 큰 애 나오면 바꾸고 break

let n = 414;
let answer = nextBigger(n);
console.log(answer);