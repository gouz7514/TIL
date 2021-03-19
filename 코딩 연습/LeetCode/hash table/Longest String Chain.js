// 문제 링크 : https://leetcode.com/problems/longest-string-chain/
var longestStrChain = function(words) {
  let dp = {};
  words = words.sort((a,b)=>a.length - b.length);
  for (let word of words) {
      let longest = 0;
      for (let i=0;i<word.length;i++) {
          let pre = word.slice(0,i) + word.slice(i+1);
          longest = Math.max(longest, (dp[pre]||0) + 1);
      }
      dp[word] = longest;
  }
  return Math.max(...Object.values(dp));
};