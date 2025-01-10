// Function Generator:
function* createNames() {
  // after function *
  yield "Rama"; // yield to return
  yield "Adi";
  yield "Putra";
}

const names = createNames(); // store the function in names
console.info(names[0]); // output: undefined because it's not array

for (const name of names) {
  console.info(name); // output: each name that got returned or yield
}

// so it can be iterate, but can not access or changes

// use function generator to generate some datas:

function* createOdd(value) {
  for (let i = 1; i <= value; i++) {
    // from 1 till 100
    if (i % 2 === 1) {
      // if odd
      yield i; // return it
    }
  }

  const numbers = createOdd(100);
  // for (const odd of numbers) {
  //   document.writeln(odd);
  // }
  console.info(numbers.next().value); // everytime we call this with next() function from data generator, it will executed
  // so that what it is means by lazy, everytime we call it, it will execute
}
