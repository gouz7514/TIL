// 16진법
// 예외처리가 관건이었던 문제. 그렇게 좋은 문제는 아닌 것 같다
// my
function cal(x) {
  if (x >= 255) x = 255;
  if (x <= 0) x = 0;
  let arr = ['A','B','C','D','E','F']
  let res = parseInt(x / 16); // 몫
  let remainder = parseInt(x % 16); // 나머지
  if (res >= 10) {
    res = arr[res % 10];
  }
  if (remainder >= 10) {
    remainder = arr[remainder % 10];
  }
  return String(res) + String(remainder);
}

function rgb(r, g, b) {
  return cal(r) + cal(g) + cal(b);
}

// clever
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
  if(d < 0 ) {return "00";} // 이 부분 나랑 다르네
  if(d > 255 ) {return "FF";}
  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase() // so clever
}