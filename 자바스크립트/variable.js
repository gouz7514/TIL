'use strict';

// 변수
// let (ES6)
let name = 'Kim';
console.log(name);
name = 4;
console.log(name);

// var
// 선언 하기 전에 값 할당 가능 (var hoisting : 선언을 위로 끌어 올림)
// block scope X : block 무시
console.log(age);
{
age = 4;
var age;
}
console.log(age);

// const
// 값 변경 불가

// 변수 타입
// primitive, objective
// function
const count = 17;
const size = 17.1;
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);
// bigint

// string
const char = 'c';
const kim = 'Kim';
const greeting = 'hello ' + kim;
console.log(greeting);
// template literals ``

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4);

// Dynamic typing -> TypeScript
let text = 'hello';
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);