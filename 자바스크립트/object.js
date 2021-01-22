'use strict';
// {} : object literal, new Object() : obejct constructor;
// object는 key와 value의 집합체이다.
// 1. Literals and properties
const kim = {name:'kim', age:26};

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
print(kim);

kim.handsome = true;
console.log(kim.handsome);

delete kim.handsome;
console.log(kim.handsome);

// 2. Computed properties
// 항상 string 타입으로 호출
// 런타임 시에 동적으로
console.log(kim['name']);
console.log(kim['handsome']);

// 3. Property value shorthand
const person1 = {name : 'a', age : 1};
const person2 = {name : 'b', age : 2};
const person3 = {name : 'c', age : 3};
const person4 = new Person('d', 4);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator
// object 안에 key가 있는지 확인
console.log('name' in kim);
console.log('abcd' in kim);

// 6. for..in, for..of
for (let key in kim) {
    console.log(key);
}

const arr = [1,2,3,4];
for(let i of arr) {
    console.log(i);
}

// 7. cloning
const user = {name : 'test', age : 100};
const user2 = user;
// 같은 곳 참조
user2.name = 'abcd';
console.log(user.name);
const user3 = Object.assign({}, user);
console.log(user3);