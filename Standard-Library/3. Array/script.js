{
  // array loop // use forEach instead forOf
  const array = ["Eko", "Kurnniawan", "Khannedy"];

  array.forEach(function (value, index) {
    console.info(`${index} : ${value}`);
  });

  array.forEach((value, index) => console.info(`${index} : ${value}`));

  array.forEach((value) => console.info(value));
}

{
  // array queue

  const queue = [];

  queue.push("Eko"); // to the last
  queue.push("Kurniawan");
  queue.push("Khannedy");

  console.info(queue.shift()); // take the first
  console.info(queue.shift());
  console.info(queue.shift());
  console.info(queue.shift());
}

{
  // array stack

  const stack = [];

  stack.push("Eko"); // to the last
  stack.push("Kurniawan");
  stack.push("Khannedy");

  console.info(stack.pop()); // to the last
  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
}

{
  // array search
  // checking is there a ... here?

  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.info(source.find((value) => value > 3)); // 4
  console.info(source.findIndex((value) => value > 3)); // 3
  console.info(source.includes(7)); // false
  console.info(source.indexOf(5)); // 4
  console.info(source.lastIndexOf(5)); // 9
}

{
  // array filter

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const odd = numbers.filter((value) => value % 2 === 1); // filters the odd
  const even = numbers.filter((value) => value % 2 === 0); // filters the even

  console.info(numbers);
  console.info(odd);
  console.info(even);
}

{
  // array transform

  const names = ["Eko", "Kurniawan", "Khannedy"];
  const namesUpper = names.map((value) => value.toUpperCase()); // 'map' help to make a transform
  console.info(namesUpper); // make it uppper all

  const namesReduce = names.reduce((before, value) => before + " " + value);
  console.info(namesReduce); // left to right

  const namesRight = names.reduceRight((before, value) => before + " " + value);
  console.info(namesRight); // right to left

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const total = numbers.reduce((before, value) => before + value);
  console.info(total); // 55
}
