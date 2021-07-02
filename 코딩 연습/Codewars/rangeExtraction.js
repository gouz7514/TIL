// my
// 진짜 그지같은 문제네
function solution(list) {
  let final = [] // 최종 배열
  let arr = [] // 중간 배열

  for (let i in list) {
    if (!arr.length) {
      arr.push(list[i])
    } else {
      if (list[i] == arr[arr.length - 1] + 1) {
        arr.push(list[i])
      } else {
        if (arr.length >= 3) {
          final.push(arr)
        } else {
          while (arr.length) {
            final.push(arr.shift())
          }
        }
        arr = [list[i]]
      }
    }
  }
  if (arr.length >= 3) {
    final.push(arr)
  } else {
    while (arr.length) {
      final.push(arr.shift())
    }
  }

  return final.map(f => f.length > 1 ? f[0] + '-' + f[f.length - 1] : String(f)).join(',')
}

let list = [-31, -29, -28]
let answer = solution(list)
console.log(answer)

// clever
// 진짜 개똑똑하네....
function solution(list){
  for(var i = 0; i < list.length; i++){
    var j = i;
    while(list[j] - list[j+1] == -1) j++;
    if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}