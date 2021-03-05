// 쓰로틀링
// 디바운싱과 비슷하지만 입력하는 동안에도 바로 이전에 요청한 작업을 주기적으로 실행한다.
// 타이머가 설정되어 있으면 아무 동작도 하지 않고, 타이머가 없다면 타이머를 설정.
// 타이머는 일정 시간 후에 스스로를 해제하고 ajax 요청을 날린다.
let timer;
document.querySelector("#search").addEventListener("input", (e) => {
  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
      console.log("서버 ajax 검색 요청(Throttling) : ", e.target.value);
    }, 300);
  }
})