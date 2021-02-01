'use strict';

// Shorthand properny names
{
    const name = 'kim';
    const age = 26;

    const me = {
        name,
        age,
    }
    console.log(me);
}

// Destructuring Assignment
{
    const student = {
        name : 'kim',
        level : 5,
    }

    const {name, level} = student;
    console.log(name, level);

    const {name:studentName, level:studentLevel} = student;
    console.log(studentName, studentLevel);

    // 배열의 경우도 동일
    const nums = [1,2];

    const [first, second] = nums;
    console.log(first, second);
}

// Spread Syntax
{
    const obj1 = {key:'key1'};
    const obj2 = {key:'key2'};
    const array = [obj1 ,obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(arrayCopy);

    const arrayCopy2 = [...array, {key:'key3'}];
    console.log(arrayCopy2);

    // object copy
    const obj3 = {...obj1};
    console.log(obj3);

    // array concatenation
    const nums1 = [1,2];
    const nums2 = [3,4];
    const nums = [...nums1, ...nums2];
    console.log(nums);
}

// Default parameters
{
    function printMessage(message = 'hello world') {
        console.log(message);
    }
    printMessage('hi');
    printMessage();
}

// Template literals
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals