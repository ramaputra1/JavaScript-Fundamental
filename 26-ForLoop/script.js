// for loop never stop
for (;;) {
  alert("Hello there");
}

// Use condition
let counter = 1;
for (; counter <= 10; ) {
  document.writeln(`<p>Hello World ${counter}</p>`);
  counter++; // we need that to have false condition so it will be stop
}