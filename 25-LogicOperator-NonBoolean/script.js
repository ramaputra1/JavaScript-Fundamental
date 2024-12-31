let data;

if (data) {
  document.writeln("TRUE");
} else {
  document.writeln("FALSE"); // False, because data is not yet init, so considered as falsy = false
}

document.writeln("<br>");

{
  let data = "";

  if (data) {
    document.writeln("TRUE");
  } else {
    document.writeln("FALSE"); // False, because data is empty string "", so considered as falsy = false
  }
}

document.writeln("<br>");

{
  let data = "false";

  if (data) {
    document.writeln("TRUE"); // True, even it's says "false", cause the string is not empty, considered as true
  } else {
    document.writeln("FALSE");
  }
}
