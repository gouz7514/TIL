// my
// 풀기는 했는데 이게 왜 4kyu인지도 모르겠고 좋은 문제도 아닌거 같다.
function sumStrings(a,b) {
  return String(BigInt(a) + BigInt(b))
}

// clever
// 뭐 이런 풀이가 다 있냐
// ~~을 붙이면 String이 Number가 된다
// Number + String = String
let a = '123';
let b = '456';
function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}