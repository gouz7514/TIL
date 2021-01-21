// 1. String concatenation
console.log('my' + 'cat');
console.log(`1 + 2 = ${1+2}`);

// 2. Numeric operators
// 사칙연산 : 나누기 : /, 곱하기 *, 나머지 : %
// 3. ++, --
// 4. += , -=
// 5. 대소관계
// 6. 논리 연산자 : ||(or), &&(and), !(not)
// 연산이 오래 걸리는 expression, 함수의 경우 제일 뒤에 배치하는 것이 효율적임

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// loose equlity : == 
// 피연산자가 모두 객체라면, JavaScript는 내부 참조를 보고, 둘 다 메모리의 같은 객체를 바라보고 있는지 판별
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// strict equliaty : ===
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// object equliaty
const kim1 = {name: 'kim'};
const kim2 = {name: 'kim'};
const kim3 = kim1;
console.log(kim1 == kim2); // 다른 reference
console.log(kim1 === kim2);
console.log(kim1 === kim3);

// 8. if문
const name = 'kim';
if (name === 'kim') {
    console.log(name);
} else if (name === 'eric') {
    console.log('who are you?');
} else {
    console.log('unknown');
}

// 9. 삼항 연산자
console.log(name === 'kim' ? 'yes' : 'no');

// 10. switch문
// switch, case, break
// 11. loop
// while, do-while
// for
for(let i = 0; i <= 10; i += 2) {
    console.log(i);
}
for(let i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 8) {
        break;
    }
}