function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  document.writeln(`<p>Total ${name} is ${total}</p>`);
}

sum("Orance", 10, 20, 30, 40, 50, 60);
sum("Apple", 10, 20, 30, 40, 50, 60);
sum("Banana", 10, 20, 30, 40, 50, 60);

const values = [10, 10, 10, 10, 10];
sum("Test", ...values);

function oldSum() {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  document.writeln(`<p>Total is ${total}</p>`);
}

oldSum(1, 2, 3, 4, 5);

//
{
  var expect = function (val) {
    return {
      toBe: function (otherVal) {
        if (val === otherVal) {
          return true;
        } else {
          return false;
        }
      },
      notToBe: function (otherVal) {
        if (val !== otherVal) {
          return true;
        } else {
          return false;
        }
      },
    };
  };
}

{
  var expect = function (val) {
    return {
      toBe: function (otherVal) {
        if (val === otherVal) {
          return true;
        } else {
          return false; // Instead of returning "Not Equal"
        }
      },
      notToBe: function (otherVal) {
        if (val !== otherVal) {
          return true;
        } else {
          return false; // Instead of returning "Equal"
        }
      },
    };
  };
}

//
{
  var createCounter = function (init) {
    let initNow = init; // Store the initial value in a separate variable

    return {
      increment: function () {
        return initNow++; // Increment the value and return the old value
      },
      decrement: function () {
        return initNow--; // Decrement the value and return the old value
      },
      reset: function () {
        initNow = init; // Reset to the original initial value
        return initNow;
      },
    };
  };

  const counter = createCounter(5);
  console.info(counter.increment()); // 5
  console.info(counter.increment()); // 6
  console.info(counter.decrement()); // 5
  console.info(counter.reset()); // 5
}
