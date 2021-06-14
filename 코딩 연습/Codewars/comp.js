let a = [8, 9, 2, 0, 1, 4, 7, 5, 2, 10];
let b = [64, 25, 1, 81, 49, 4, 4, 1, 16, 100];

// function comp(array1, array2){
//   if (!array1 || !array2 || !array1.length || !array2.length) return false;
//   array1.sort((a,b) => a-b);
//   array2.sort((a,b) => a-b);
//   console.log(array1, array2);
  
//   for (let i in array1) {
//     console.log("array2[i], array1[i] : ", array2[i], array1[i]);
//     let check = false;
    
//     if (array2[i] == array1[i] ** 2) {
//       check = true;
//     } else {
//       return false;
//     }
//     console.log("check : " ,check);
//   }
//   return true;
// }

function comp(array1, array2){
  if (!array1 || !array1.length) return false;
  array1.sort((a,b) => a-b);
  array2.sort((a,b) => a-b);
  console.log(array1, array2);

  for (let x of array2) {
    let check = false;
    for (let y of array1) {
      if (x == y ** 2) {
        check = true;
        break
      }
    }
    if (!check) return false;
  }
  return true;
}

let result = comp(a, b);
console.log(result);