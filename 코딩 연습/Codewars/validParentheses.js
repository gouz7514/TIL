// my
// 많이 풀어본 문제
function validParentheses(parens) {
  let stack = [];
  
  for (let i of parens) {
    if (i == '(') {
      stack.push(i);
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        return false;
      }
    }
    console.log('stack : ', stack)
  }
  if (!stack.length) {
    return true;
  } else {
    return false;
  }
}

let answer = validParentheses('()');
console.log(answer);

// clever
function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
  }
  
  return (indent == 0);
}

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}