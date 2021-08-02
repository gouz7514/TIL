// export let thing = 'initial';

// setTimeout(() => {
//   thing = 'changed';
// }, 500);

let thing = 'initial';

export { thing };
export default thing;
// export default의 경우 뒤 구문을 exporession으로 처리해서 값에 의한 전달 발생
// 즉, export 되기 바로 전 일종의 숨어있는 변수에 할당되서 변화가 export 시에 반영되지 않음

setTimeout(() => {
  thing = 'changed';
}, 500);