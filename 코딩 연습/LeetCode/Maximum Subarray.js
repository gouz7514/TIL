// 나의 풀이
// 최소값 정해두고 비교하면서 최대값 나오는 경우 찾기 (DP)
var maxSubArray = function(nums) {
  let answer = -100000;
  
  for(let i = 0; i < nums.length; i++) {
      let tot = nums[i];
      answer = Math.max(tot, answer);
      for (let j = i + 1; j < nums.length; j++) {
          tot += nums[j];
          answer = Math.max(tot, answer);
      }
  }
  
  return answer;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
maxSubArray(nums);

// 남의 풀이
// for문 하나만 돌리면서 바로 비교 가능
function maxSubArray(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}