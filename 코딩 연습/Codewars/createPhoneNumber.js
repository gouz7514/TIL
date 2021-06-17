// 이것도 별로 안 좋은 문제네
// my
// 전혀 js답지 않은 코드.,
function createPhoneNumber(numbers){
  let x = '(' + numbers.slice(0,3).join('') + ')'
  let y = numbers.slice(3,6).join('')
  let z = numbers.slice(6).join('')
  return x + " " + y + "-" + z
}

// clever
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

// best
function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ')'
    + numbers.substring(3, 6)
    + '-'
    + numbers.substring(6);
}