// 문제를 아예 잘못 이해했네...
let a = [8, 9, 2, 0, 1, 4, 7, 5, 2, 10];
let b = [64, 25, 1, 81, 49, 4, 4, 1, 16, 100];

// function comp(array1, array2){
//   if (!array1 || !array1.length) return false;
//   array1.sort((a,b) => a-b);
//   array2.sort((a,b) => a-b);
//   console.log(array1, array2);

//   for (let x of array2) {
//     let check = false;
//     for (let y of array1) {
//       if (x == y ** 2) {
//         check = true;
//         break
//       }
//     }
//     if (!check) return false;
//   }
//   return true;
// }

// my
function comp(array1, array2){
  if(!array1 || !array2) return false;
  array1 = array1.sort((a,b)=>a-b);
  array2 = array2.sort((a,b)=>a-b);

  for (let i in array1) {
    if (array2[i] !== array1[i] ** 2) return false;
  }
  return true;
}

let result = comp(a, b);
console.log(result);

// clever
function comp(array1, array2){
  if(!array1 || !array2) return false;
  array1 = array1.map(t => t**2).sort((a,b)=>a-b);
  array2 = array2.sort((a,b)=>a-b);

  for(let i=0;i<array1.length;i++){if(array1[i] !== array2[i])return false}
  return true;
}