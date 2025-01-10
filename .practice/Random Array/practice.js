/* Write a function that takes an array of integers
as input and returns a new array that
contains the elements in reverse order. */

// {
//   // num 1
//   function reverseArray(...arr) {
//     arr.reverse();
//     return arr;
//   }

//   const data = [1, 2, 3, 4, 5];
//   document.writeln(reverseArray(...data));
// }

/* Write a function that takes an array of integers 
as input and returns a list of duplicates found in the array. 
If no duplicates are found, return an empty list. */
// {
//   // num 2
//   const data = [1, 2, 3, 2, 4, 5, 3];

//   function duplicateArray(...arr) {
//     if (arr === arr) {
//       return arr;
//     } else {
//       return [];
//     }
//   }

//   document.writeln(duplicateArray(...data));
// }

// function reverseArray(arr) {
//   let reversedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   return reversedArr;
// }

// const data = [1, 2, 3, 4, 5];
// document.writeln(reverseArray(data));

// 2
function duplicateArray(arr) {
  let eachData = arr.split();
  if (eachData === eachData) {
    return true;
  } else {
    return false;
  }

  const data = [1, 2, 3, 4, 5];
  document.writeln(duplicateArray(data));
}
