// In If Else:
{
  const value = "R";

  if (value === "A") {
    document.writeln("It's R");
  } else if (value === "B" || value === "C") {
    document.writeln("It's R");
  } else if (value === "D") {
    document.writeln("It's R");
  } else {
    document.writeln("No R here");
  }
}

document.writeln("<br>");

// In Switch:
let value = "R";
switch (
  value // Start with "switch" keyword
) {
  case "A": // Case if IF
    document.writeln("It's R");
    break;
  case "B":
  case "C":
    document.writeln("It's R");
  case "D":
    document.writeln("It's R");
  default: // Default is ELSE
    document.writeln("No R here");
}
