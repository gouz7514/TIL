// 재귀로 풀어야할 것 같네
let nums = [1,3,4,2,2];
let slow = nums[0];
let fast = nums[nums[0]];

while (slow != fast) {
  slow = nums[slow];
  fast = nums[nums[fast]];
  console.log("slow, fast : ", slow, fast);
}

slow = 0;

while (slow != fast) {
  slow = nums[slow];
  fast = nums[fast];
}