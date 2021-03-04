'use strict';

// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'kim';
let name2 = name;
console.log(name, name2);
name = 'park';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'kim';
console.log('-----');
console.log(team);
console.log(players);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log(team2);
team2[3] = 'park';
console.log(team2);
console.log(players);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'lee';
console.log(team3);
console.log(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'choi';
console.log(team4);
console.log(players);

const team5 = Array.from(players);
team5[3] = 'oh';
console.log(team5);
console.log(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
console.clear();
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
// 비어있는 object 선언하고, person 집어넣은 뒤, 3번째 인자 삽입
// 즉, 값만 가져오고 추가함
const captain2 = Object.assign({}, person, {number : 99});
console.log(captain2);

// We will hopefully soon see the object ...spread
const captain3 = {...person};
console.log(captain3);
captain3['sex'] = 'male';
console.log(captain3);
console.log(person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const kim = {
    name : 'kim',
    age : 26,
    social : {
        twitter : '@kim',
        facebook : 'kim.developer'
    }
}

console.log(kim);

const kim2 = Object.assign({}, kim);
console.log(kim2);

// array나 obejct 복사해서 쓸 때는 JSON.parse(JSON.stringify(~~)) 사용 하면 full copy 가능하다.