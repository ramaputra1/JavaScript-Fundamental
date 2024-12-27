const examValue = 50; // the value is 50, we need to use that for some condition

if (examValue > 80) {
  // if this true
  document.writeln("<p>Good Job : A</p>"); // execute this.
} else if (examValue > 70) {
  // if this true
  document.writeln("<p>Good Job : B</p>"); // execute this.
} else if (examValue > 60) {
  // if this true
  document.writeln("<p>Good Job : C</p>"); // execute this.
} else {
  // then if not true
  document.writeln("<p>Try Again Next Year</p>"); // execute this.
}
