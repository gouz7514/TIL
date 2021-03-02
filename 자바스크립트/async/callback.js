'use strict';

// 동기와 비동기
// hoisting이 된 이후부터 코드가 순서대로 동기적으로 실행됨
// hoisting : var, function 선언이 제일 위로 끌어올려지는 현상
// 콜백 : 함수를 파라미터로 전달했을 때 특정 시점에 그 함수를 실행
console.log('1');
setTimeout(() => console.log(2), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

class UserStorage {
  LoginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'kim' && password === 'hj') ||
        (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found!'));
        }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'kim') {
          onSuccess({name: 'kim', role:'admin'});
        } else {
          onError(new Error('no access!'));
        }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.LoginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(user,
      (userWithRole) => {
        alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      })
  },
  error => {
    console.log(error);
  }
)

// // Practice
// class UserStorage {
//     loginUser(id, password, onSuccess, onError) {
//         setTimeout(() => {
//             if (
//                 (id === 'ellie' && password === 'dream') ||
//                 (id === 'coder' && password === 'academy')
//             ) {
//                 onSuccess(id);
//             } else {
//                 onError(new Error('not found!'));
//             }
//         }, 2000);
//     }

//     getRoles(user, onSuccess, onError) {
//         setTimeout(() => {
//             if (user === 'ellie') {
//                 onSuccess({name : 'ellie', role : 'admin'});
//             } else {
//                 onError(new Error('no access'));
//             }
//         }, 1000);
//     }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');

// userStorage.loginUser(
//     id,
//     password,
//     (user) => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error => {
//                 console.log(error);
//             }
//         );
//     },
//     error => {
//         console.log(error);
//     }
// );