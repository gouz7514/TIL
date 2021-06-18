// my
// dp로 많이 풀어봤던 문제
// 제약사항을 초반에 파악하지 못함
var maxSequence = function(arr) {
  let answer = 0;
  let dp = [];
  if (!arr.length) return answer; // when array is empty
  
  dp.push(arr[0]);
  
  for(let i = 1; i < arr.length; i++) {
    dp.push(Math.max(arr[i], dp[i-1] + arr[i]));
  }
  
  return Math.max(...dp, 0); // when array has only negative numbers, return 0
}

// clever
var maxSequence = function(arr) {
  var currentSum = 0;
  return arr.reduce(function(maxSum, number) {
      currentSum = Math.max(currentSum+number, 0);
      return Math.max(currentSum, maxSum);
  }, 0);
}