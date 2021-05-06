function moveZeroes(nums) {
  //two pointers
  var pos = 0;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[pos++] = nums[i];
      }
  }
  for (i = pos; i < nums.length; i++) {
      nums[i] = 0;
  }
}