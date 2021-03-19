// 문제 링크 : https://leetcode.com/problems/daily-temperatures/
var dailyTemperatures = function(T) {
  const arr = new Array(T.length).fill(0);
  
  for(let i = 0; i < T.length; i++) {
      let cnt = 0;
      let flag = false;
      for(let j = i+1; j < T.length; j++) {
          cnt += 1;
          if (T[j] > T[i]) {
              flag = true; // 더 큰게 나오면 flag를 true로
              break
          }
      }
      if (flag && cnt > 0) arr[i] = cnt;
  }
  
  return arr;
};