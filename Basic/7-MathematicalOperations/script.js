// Arithmethic

{
  let result = 1 + 2; // Use + in two Number = 3
  document.writeln("<p>1 + 2 = " + result + "</p>"); // 1 + 2 = 3
  let originalResult = result; // it's 3

  result = result - 1; // result(3) - 1 = 2, so result now 2
  document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>"); // originalResult(3) - 1 = result(2)
  originalResult = result; // originalResult(2)

  result = result * 2; // 2 * 2 = 4
  document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>");
}

document.writeln("</br>"); // Enter
document.writeln("</br>"); // Enter
/* Definetely we can see that the operation up here is bit complex cause the name of variable
that is why we use Augmented Assignments */

// Augmented: Operation by itself

{
  let result = 1 + 2; // 3
  document.writeln("<p>1 + 2 = " + result + "</p>");
  let originalResult = result; // 3

  // OVER HERE FOR AUGMENTED (try compare with arithmethic above)
  result -= 1; // 2
  document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>");
  originalResult = result; // 2

  // HERE TOO
  result *= 2; // 4
  document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>");
}

document.writeln("</br>"); // Enter
document.writeln("</br>"); // Enter

// Unary

{
  let result = +1;
  document.writeln("<p>" + result + "</p>"); // shows that 1 is positive

  result--; // result = result - 1; result -= 1; 0
  document.writeln("<p>" + result + "</p>"); // 1 decrement, that means 1 - 1 = 0
  // just as simply as nameVariable++

  result++; // result = result + 1; result += 1; 1
  document.writeln("<p>" + result + "</p>"); // 1 increment, that means 0 + 1 = 1

  result = -result; // -1
  document.writeln("<p>" + result + "</p>"); // turn 1 into negative
}
