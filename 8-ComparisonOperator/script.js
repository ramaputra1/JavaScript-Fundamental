let result = 5 == "5"; // use == and the output is TRUE, even the data type is different.
document.writeln("<p>" + result + "</p>");

result = 5 === "5"; // False because === (the powerful one)
document.writeln("<p>" + result + "</p>");

result = 5 > 10; // false
document.writeln("<p>" + result + "</p>");

result = 5 < 10; // true
document.writeln("<p>" + result + "</p>");
