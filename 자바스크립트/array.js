'use strict';

// 1. 선언
const arr1 = new Array();
const arr2 = [];

// 2. 인덱싱
const arr = ['a', 'b', 'c'];
console.log(arr[arr.length - 1]);

// 3. Looping
for(let fru in arr) {
    console.log(arr[fru]);
}
arr.forEach((n, i) => console.log(n, i));

// 4. 연산
arr.push('d');
console.log(arr);

arr.pop();
console.log(arr);

// shift와 unshift는 느리다.
// unshift : 앞에서부터 데이터 삽입
arr.unshift('e');
console.log(arr);
// shift : 앞에서부터 데이터 삭제
arr.shift();
console.log(arr);

// splice : startnumber, deletecount
// deletecount 지정하지 않으면 startnumber부터 다 지움
arr.push('g','h','i');
console.log(arr);
arr.splice(1,2);
console.log(arr);
arr.splice(1,1,'x');
console.log(arr);

// combine two arrays
const arrr = ['aa','bb'];
const narr = arr.concat(arrr);
console.log(narr);

// 5. Searching
// indexOf
console.log(arr.indexOf('a'));
// include
console.log(narr.includes('aa'));
// lastindexOf
narr.push('a');
console.log(narr);
console.log(narr.lastIndexOf('a'));