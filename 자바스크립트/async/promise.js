'use strict';

// Promise는 javascript object
// 비동기적 실행 시 콜백 함수 대신에 사용 가능
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// promise 만드는 순간 executor 바로 실행됨
// 불필요한 동작 방지해야 함
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, file etc)
    console.log('doing something...');
    setTimeout(() => {
        resolve('kim');
        // reject(new Error('no network'));
    }, 2000)
});

// 2. Consumer : then, cathc, finally
// then은 promise를 return하기 때문에 catch 이어서 사용 가능(chaining)
promise
    .then((value) => {
    console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

// then에서는 값이나 promise 전달 가능
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`new Error ${hen} => 🔥`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`))
    });

getHen()
.then(getEgg)
.catch(error => {
    return '🍔';
})
.then(cook)
.then(console.log)
.catch(console.log);

