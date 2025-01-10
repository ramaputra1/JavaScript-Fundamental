{
  // !!! CASE when we do not convert it

  const inputUser = "1"; // User input is String "1"
  const value = 1; // our value is Number 1
  const sum = inputUser + value; // Our purpose is to add those 2 value, and we expect it's gonna be 1 + 1 = 2

  document.writeln(sum); // but the output is = 11
  // 11 is from "1" + 1 = 11, when you want it's 2 you need to conver the "1" to be number first.

  // POINT: STRING + NUMBER = STRING
}

document.writeln("</br>");

// parseInt
{
  // !!! CASE use convertion parseInt
  const inputUser = parseInt("1"); // use parseInt in "1" (str) so it's gonna be a number 1
  const value = 1;
  const sum = inputUser + value;

  document.writeln(sum); // 1 + 1 = 2
}

document.writeln("</br>");

// parseFloat
{
  // !!! CASE use convertion parseFloat
  const inputUser = parseFloat("1.5"); // use parseInt in "1.5" (str) so it's gonna be a number 1.5
  const value = 1;
  const sum = inputUser + value;

  document.writeln(sum); // 1 + 1.5 = 2.5
}

document.writeln("</br>");

// Number
{
  // !!! CASE use convertion Number
  const inputUser = Number("1.7"); // use parseInt in "1.7" (str) so it's gonna be a number 1.7
  const value = 1;
  const sum = inputUser + value;

  document.writeln(sum); // 1 + 1.7 = 2.7
}

document.writeln("</br>");

// toString()
{
  // !!! CASE use convertion number.toString

  const inputUser = 10;
  const value = 5;
  // When we add inputUser + value it's supposed to be 15 cause both of em are number
  const sum = inputUser.toString() + value.toString(); // but we convert it to str first,

  document.writeln(sum); // so the input here is 105
}

document.writeln("</br>");
document.writeln("</br>");
document.writeln("</br>");

// the NaN

// NaN, when you got NaN and try to use operations, it will always NaN
{
  const nan = parseInt("nah");
  const number = 1;

  const sum = nan + number;
  document.writeln(sum); // output would be NaN

  document.writeln("</br>");
  document.writeln("</br>");

  document.writeln(isNaN(nan)); // check NaN use isNaN
}
