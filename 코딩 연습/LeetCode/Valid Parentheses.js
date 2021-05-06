// 나의 풀이
let s = "[](){}"
let arr = [];
let cnt = 0;

for (let i of s) {
  if (i === '(' || i === '[' || i === '{') {
    arr.push(i);
    cnt += 1
  } else if (i === ')') {
    if (arr.length && arr[arr.length-1] == '(') {
      arr.pop();
    }
    cnt -= 1;
  } else if (i === ']') {
    if (arr.length && arr[arr.length-1] == '[') {
      arr.pop();
    }
    cnt -= 1;
  } else if (i === '}') {
    if (arr.length && arr[arr.length-1] == '{') {
      arr.pop();
    }
    cnt -= 1;
  }
}

if(!arr.length && cnt == 0) {
  console.log("True");
} else {
  console.log("False");
}

// 남의 풀이
var isValid = function(s) {
  const stack = [];
  
  for (let i = 0 ; i < s.length ; i++) {
      let c = s.charAt(i);
      switch(c) {
          case '(': stack.push(')');
              break;
          case '[': stack.push(']');
              break;
          case '{': stack.push('}');
              break;
          default:
              if (c !== stack.pop()) {
                  return false;
              }
      }
  }
  
  return stack.length === 0;
};