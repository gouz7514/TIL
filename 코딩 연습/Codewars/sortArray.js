// my : 홀수만 따로 빼내서 정렬한 다음 집어넣음
function sortArray(array) {
  // Return a sorted array.
  let array2 = array.filter(x => x % 2 != 0);
  array2.sort((a,b) => a-b);
  let cnt = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      array[i] = array2[cnt];
      cnt += 1;
    }
  }
  return array;
}

// clever
// 내 풀이랑 골조는 똑같지만 여러 함수 잘 사용
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a-b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}