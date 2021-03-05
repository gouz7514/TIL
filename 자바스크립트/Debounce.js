// 아래와 같은 방식으로 하면 엄청난 쿼리 발생 => 비용 증가
// document.querySelector('#search').addEventListener("input", (e) => {
//   console.log("서버 ajax 검색 요청", e.target.value);
// })

// 디바운싱
// 연이어 호출되는 함수들 중에서 마지막 함수 or 맨 처음 함수만 호출되도록 한다.
// 타자를 칠 때마다 타이머를 설정해, 300ms동안 입력이 없으면 입력이 끝난 것으로 간주.
// 300ms 이전에 타자 입력이 발생하면 이전 타이머는 취소하고 새로운 타이머 설정
let timer;
document.querySelector('#search').addEventListener("input", (e) => {
  if(timer) clearTimeout(timer);
  timer = setTimeout(function() {
    console.log("서버 ajax 검색 요청(Debounce) : ", e.target.value)
  }, 300);
})