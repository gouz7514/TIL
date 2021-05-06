function permutation(arr, num) {
  let result = [];
  if(num == 1) return arr.map(e => [e]);
  
  arr.forEach((e,i,array) => {
    let rest = [...array.slice(0,i), ...array.slice(i+1)];
    let perms = permutation(rest,num-1);
    let permArr = perms.map(x => [e, ...x])
    result.push(...permArr);
  }) 
  return result;
}

let result = permutation([1,2,3,4], 3);
console.log(result);