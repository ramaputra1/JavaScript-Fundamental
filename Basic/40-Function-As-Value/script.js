function sayHello(name) {
  // we have sayHello function
  document.writeln(`<p>Hello ${name}</p>`);
}

sayHello("Eko");

// store in variable:
const say = sayHello; // now variable say is sayHello function

// now we have 2 ways to call that function

// 1st, use sayHello:
sayHello("Rama");

//2nd, use say variable:
say("Rama");

// then, we can use that to send as parameter

function giveMeName(callback) {
  // giveMeName need 1 parameter callback
  callback("Rama");
}

giveMeName(sayHello); // here, we call giveMeName function and use the argument sayHello function, so we can use function as argument from callback parameter
giveMeName(say); // same, we can use say which store sayHello function
