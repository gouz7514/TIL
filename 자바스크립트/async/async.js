// async & await
// clear style of using promise

// 1. async
// Promise 키워드를 쓰지 않아도 자동으로 Promise를 return
async function fetchUser() {
    return 'kim';
}

const user = fetchUser();
console.log(user);

// 2. await
// async가 붙은 함수 안에서만 쓸 수 있음
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}
// function getBanana() {
//     return delay(3000)
//     .then(() => '🍌');
// }

// const apple = getApple();
// console.log(apple);
// const banana = getBanana();
// console.log(banana);

// Promise도 중첩 사용시 콜백 지옥의 형태 발생 가능
// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     })
// }

async function pickFruits() {
    // 이렇게만 선언하면 연관 없는 두 Promise가 1초 + 1초가 걸림
    // const apple = await getApple();
    // const banana = await getBanana();

    // 아예 Promise 객체를 만들어서 병렬적으로 실행
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. Promise API
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);