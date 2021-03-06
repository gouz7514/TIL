var subsets = function(nums) {
  let res = [[]]
  for (let i = 0; i < nums.length; ++i) {
    let length = res.length;
    for (let j = 0; j < length; ++j) {
      res.push([...res[j],nums[i]])
    }  
  }
 return res
};
// 
var subsets = function(nums) {
	let res = [[]]
	for (let i = 0; i < nums.length; i++) {
		res.forEach(item => {
			res.push([...item, nums[i]])
		})
	}
	return res
}