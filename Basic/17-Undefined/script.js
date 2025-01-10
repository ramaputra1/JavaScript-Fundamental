// Checking if the data is undefined or NOT

let name;
if (name === undefined) {
  document.writeln("It is Undefined"); // It's showed up, so variable "name" is undefined cause it's NOT yet initialized
} else {
  document.writeln("NOT Undefined");
}

document.writeln("<br>");

{
  let name = "Rama";
  if (name === undefined) {
    document.writeln("It is Undefined");
  } else {
    document.writeln("NOT Undefined"); // It's showed up, so variable "name" is NOT undefined cause it's initialized
  }
}

document.writeln("<br>");

//In Array

{
  let name = ["Zero", "One"];
  if (name[2] === undefined) {
    document.writeln("Array Index Undefined"); // It's showed up, the names array in index 2 is undefined because it only has 0 and 1
  } else {
    document.writeln("Array Index NOT Undefined");
  }
}

document.writeln("<br>");

// Array Using Delete

{
  let name = ["Zero", "One"];
  delete name[0];
  if (name[0] === undefined) {
    document.writeln("Array Index Undefined"); // It's showed up, the names array in index 0 is undefined because we delete the index 0 already
  } else {
    document.writeln("Array Index NOT Undefined");
  }
}

document.writeln("<br>");

// In Object

{
  const person = {};
  if (person.propertyOne === undefined) {
    document.writeln("Object Undefined");
  } else {
    document.writeln("Object NOT Undefinec");
  }
}
