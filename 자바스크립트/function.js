// 1. declaration
// function은 object로 취급
function hi() {
    console.log('hi');
}
hi();

function log(message) {
    console.log(message);
}
log('hello');

// 2. Parameters
// primitive : 값 전달
// objective : 참조 전달
function chnageName(obj) {
    obj.name = 'park';
}
const kim = {name : 'kim'};
chnageName(kim);
console.log(kim);

// 3. Default parameters (ES6)
function showMessage(message, from='unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (ES6) : 배열 형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('a','b','c');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서는 밖을 볼 수 있다.
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();
// console.log(message); // 에러

// 6. return
function sum(a,b) {
    return a+b;
}
const result = sum(1,2);
console.log(result);
// 7. early return
// 쓸데 없는 로직 방지 : 조건 맞지 않을 시 빨리 return, 필요한 로직은 뒤에 작성

// 일급 함수
// 함수도 다른 변수처럼 취급이 가능하다.
// 1. function expression
// 함수의 선언도 hoisting이 가능
const print = function() { // 익명 함수
    console.log('print');
}
print();
const print2 = print;
print2();
const sum2 = sum;
console.log(sum2(2,3));

// 2. callback
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function() {
    console.log('yes');
}
const printNo = function() {
    console.log('no');
}
randomQuiz('love', printYes, printNo);
randomQuiz('live', printYes, printNo);

// Arrow function
// const test = function() {
//     console.log('test');
// }
const test = () => console.log('test');
const add = (a,b) => a+b;
console.log(add(2,3));

// IIFE : Immediatedly Invoked Function Expression 함수를 바로바로 실행
(function hello() {
    console.log('hello');
})();