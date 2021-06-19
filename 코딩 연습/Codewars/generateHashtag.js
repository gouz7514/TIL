// my
// 다양한 메소드 써서 잘 풀은 것 같다.
// charAt 사용하면 더 간결해질듯
function generateHashtag (str) {
  let res = str.split(' ').map(s => s.substring(0,1).toUpperCase() + s.substring(1)).join('')
  if (!res || res.length >= 140) return false;
  return '#' + res;
}

// clever
function generateHashtag (str) {
  if(!str || str.length < 1) return false;
  
  let r = '#' + str.split(' ').map(function(el) {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  }).join('');
  return r.length > 140?false:r;
}