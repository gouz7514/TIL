'use strict';

// synchronous
[1,2,3,4].forEach(function(i) {
  console.log(i);
});

// asynchronous
function asyncForEach(array, cb) {
  array.forEach(function(i) {
    setTimeout(cb(i), 0);
  })
}

asyncForEach([1,2,3,4], function(i) {
  console.log('asyncForEach 실행')
  console.log(i);
})

// function asyncTest(array) {
//   array.forEach(setTimeout(function(i) {
//     console.log(i);
//   }, 1000));
// }

// asyncTest([1,2,3,4]);