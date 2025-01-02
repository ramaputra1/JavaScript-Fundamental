// Break
{
  let counter = 1;
  while (true) {
    // while TRUE, so it will be never ending (never meet false)
    document.writeln("<p>Hello World<p>");
    counter++;

    if (counter > 3) {
      // when the counter = 3, it will stop
      break; // here we use "BREAK" instead of using > 3 in while (condition)
    }
  }
}

document.writeln("</br>");
document.writeln("</br>");

// Continue
{
  for (let counter = 1; counter <= 100; counter++) {
    if (counter % 2 === 0) {
      continue; // When the counter = Even (Skip it, and continue in the next loop)
    }
    document.writeln(`<p>It's Odd ${counter}<p>`);
  }
}
