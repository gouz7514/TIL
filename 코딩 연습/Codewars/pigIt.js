// my
// 문장부호 처리하는 부분을 놓쳐서 시간이 소요됨
function pigIt(str){
  return str.split(' ')
            .map(s => s.slice(1) + s.slice(0,1))
            .map(s =>  s.match(/[a-z]/i) ? s + 'ay' : s)
            .join(' ')
}

// clever
// 정규식과 매칭되는 문자에 대해서 아예 replace 처리
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}