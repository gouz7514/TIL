// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/62048
function solution(w, h) {
  function gcd(w, h) {
      let R;
      if (w < h) {
          [w,h] = [h,w];
      }
      while((w%h) > 0) {
          R = w % h;
          w = h;
          h = R;
      }
      return h;
  }
  let x = gcd(w,h);
  return w*h - (w+h-x);
}
// https://taesan94.tistory.com/55
// w * h 크기의 사각형을 대각선으로 잘랐을 때 영향을 받는 블록은 (w + h -1) 개이다.
// {(w / 최대공약수) + (h / 최대공약수) - 1} * 최대공약수 = w + h - 최대공약수