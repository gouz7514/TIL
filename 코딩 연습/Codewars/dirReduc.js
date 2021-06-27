// my
// direction 배열 만들어서 코드 길이 줄이려 노력함
function dirReduc(arr){
  let direction = ["NORTH", "SOUTH", "EAST", "WEST"];
  let stack = [];
  
  for (let i in arr) {
    if (!stack.length) {
      stack.push(arr[i]);
      continue;
    }
    let x = direction.indexOf(arr[i]);
    if (x <= 1) {
      if (direction.indexOf(stack[stack.length - 1]) == 1 - x) {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    } else {
      if (direction.indexOf(stack[stack.length - 1]) == 5 - x) {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    }
  }
  return stack;
}

// clever
// 지리네..
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}