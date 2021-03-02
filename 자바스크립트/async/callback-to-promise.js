'use strict';

class UserStorage {
  LoginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(
          (id === 'kim' && password === 'hj') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found!'));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'kim') {
          resolve({name: 'kim', role: 'admin'});
        } else {
          reject(new Error('no access!'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.LoginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);