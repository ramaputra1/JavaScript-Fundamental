/*

Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true

*/

let is_array = function (input) {
  if (Array.isArray(input)) {
    return "Trueeee";
  } else {
    return "Falseeee";
  }
};

console.log(is_array("hahaha"));
console.log(is_array([1, 2, 4, 0]));

/*

 Answer: 
Use method:

Array.isArray

*/
