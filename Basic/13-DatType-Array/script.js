// Empty Array
let emptyArray = [];

// Array with value
let valueArray = ["Rama", true, 1]; // We can have str or num or even boolean

// Edit an array:
{
  const names = []; // empty array
  names.push("Rama1"); // add Rama1 to array names in index 0
  names.push("Rama2", "Rama3"); // add Rama2 to array names in next index which is 1, and next Rama3 index 2

  console.table(names); // check the console output will be 3 length of array with Rama1, Rama2, Rama3

  document.writeln(names.length); // know length of array
  document.writeln("</br>");
  document.writeln(names[2]); // index 2 is Rama3
  document.writeln("</br>");
  document.writeln((names[2] = "Assela2")); // changes Rama2 to Assela2
  document.writeln("</br>");
  document.writeln(names); // the prove that Rama2 changed to Assela2
  document.writeln("</br>");
  document.writeln(delete names[2]); // delete the data not the index
  document.writeln(names); // the DATA of index 2 is gone, but the INDEX still there, in case you got another value to use that index in the future
  document.writeln("</br>");
}
