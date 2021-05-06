n = 4;
let dp = Array(n+1).fill(0);
dp[1] = 1;
dp[2] = 2;
let answer = 0;

if (n <= 2) {
  answer = dp[n];
} else {
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
}
console.log(dp);
answer = dp[n];
console.log(answer);