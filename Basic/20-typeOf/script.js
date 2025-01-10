//Check variable using typeof
let data;

const checkDataType = typeof data; // typeof "name of variable"
document.writeln(checkDataType); // Output = Undefined, cause variable "data" is Undefined

document.writeln("<br>");

// Array
{
  let data = [];

  const checkDataType = typeof data;
  document.writeln(checkDataType); // Output = Object, cause even it's an array, Js will not show array, will show object (see the documentation in my HTML pages)
}
