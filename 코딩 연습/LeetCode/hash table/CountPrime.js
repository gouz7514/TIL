// 문제 링크 : https://leetcode.com/problems/count-primes/
var countPrimes = function(n) {
  let hash = new Array(n).fill(true);
  hash[0] = false;
  hash[1] = false;
  for (let i = 2; i * i < n; i++) {
      if (hash[i]) {
          for(let j = i * 2; j < n; j += i){
              hash[j] = false;
          }
      }
  }
  return hash.filter((val) => val).length;
};