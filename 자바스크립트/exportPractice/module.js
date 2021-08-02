// export let thing = 'initial';

// setTimeout(() => {
//   thing = 'changed';
// }, 500);

// ---------------------

// let thing = 'initial';

// export { thing };
// export default thing;
// // export default의 경우 뒤 구문을 exporession으로 처리해서 값에 의한 전달 발생
// // 즉, export 되기 바로 전 일종의 숨어있는 변수에 할당되서 변화가 export 시에 반영되지 않음

// setTimeout(() => {
//   thing = 'changed';
// }, 500);

// ---------------------

// let thing = 'intial';

// export { thing, thing as default };

// setTimeout(() => {
//   thing = 'changed';
// }, 500);

// export default thing과 다르게 export { thing as default } 는 thing을 live reference로 넘겨준다.

// ---------------------
// export default function thing() {}

// setTimeout(() => {
//   thing = 'changed';
// }, 500);
// export default function은 고유한 구문이므로 changed가 그대로 출력
// export default function은 특이 케이스라 가능
function thing() {}

export default thing;

setTimeout(() => {
  thing = 'changed';
}, 500);
// 이 경우 [Function: thing]이 출력된다.

// 결론은 export default의 사용을 자제하자