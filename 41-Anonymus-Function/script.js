// normal function:
{
  function say(name) {
    document.writeln(`<p>Hello ${name}</p>`);
  }
}

// anonymus function
const say = function (name) {
  // first, we need variable then use function without a name (anonymus function)
  document.writeln(`<p>Hello ${name}</p>`);
};

// then call as usual
say("Rama");
say("Assela");

// in the case when we have a function which is giveMeName, then..
function giveMeName(callback) {
  callback("Eko");
}

giveMeName(say);

// then our giveMeName function want a function as parameter in there, just use anonymus function
giveMeName(function (name) {
  document.writeln(`<p>Hi ${name}</p>`);
});
