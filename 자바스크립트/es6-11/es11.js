'use strict';

// Optional Chaining
{
    const person1 = {
        name: 'kim',
        job: {
            title: 'student',
            manager: {
                name: 'park',
            },
        },
    };
    const person2 = {
        name: 'lee',
    };

    function printManager(person) {
        console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
}

// Numllish Coalescing operator
// 값이 있음에도 OR 연산에 의해 다른 값이 설정되는 경우 방지
{
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);
}