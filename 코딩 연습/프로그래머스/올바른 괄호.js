// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12909
function solution(s){
  let a = 0;
  for(let i of s) {
      a += i == '(' ? 1 : -1;
      if(a < 0)
          return false;
  }

  return a == 0;
}

// 자바스크립트 배열에서는 빈 배열에서 pop()을 해도 오류가 나지 않고 undefined가 return된다.
// 파이썬으로 같은 방식으로 풀었더니 오류 발생함.