let nums = [4,3,2,7,8,2,3,1];
let res = [];

// 한번이라도 나타난 애들은 음수로 바뀐다?
for (let i = 0; i < nums.length; i++) {
  let num = Math.abs(nums[i]);
  let idx = num-1;
  nums[idx] = Math.abs(nums[idx]) * -1;
}
console.log(nums)

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) res.push(i+1);
}
console.log(res);