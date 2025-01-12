// arrow function basic form
{
  const sayHello = (name) => {
    // name is parameter

    document.writeln(`Aloha ${name}`);
  };

  sayHello("Rama");
}

document.writeln("</br>");

// more simplier form: (without block)
// if there is only one line, just use this*
{
  const sayHello = (name) => document.writeln(`Aloha2, ${name}`);

  sayHello("Rama");
}

document.writeln("</br>");

// when we want to return a value:
// with block: use return keyword
// without block: no return keyword
{
  const sum = (first, second) => {
    return first + second; // with block: use return keyword
  };

  document.writeln(sum(20, 20));
}

document.writeln("</br>");

{
  const sum = (first, second) => first + second; // without block: no return keyword
  document.writeln(sum(20, 20));
}

document.writeln("</br>");

// more more simplier: if we only have 1 parameter we can only put the parameter without the ()
{
  const sayHello = (name) => document.writeln(`Aloha3, ${name}`);

  sayHello("Asselaaa");
} // remember, only 1 parameter can use this way

document.writeln("</br>");

// make arrow function as parameter in another function
{
  function giveMeName(callback) {
    callback("Rama9999");
  }

  giveMeName((name) => document.writeln(`Aloha ${name}`));
}
