// Using If Else
const value = 90;
let result;

if (value >= 75) {
  result = "Congrats (If Else)";
} else {
  result = "Try Again (If Else)";
}

document.writeln(`<p>${result}</p>`);

document.writeln("<br>");

//Using Ternary
{
  const value = 90;
  const result = value >= 75 ? "Congrats (Ternary)" : "Try again (Ternary)"; // To start the ternary using ? then to seperate the value if (true) and else (false) using :

  document.writeln(`<p>${result}</p>`);
}
