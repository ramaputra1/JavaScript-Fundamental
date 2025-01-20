function createAdder(value) {
  // local scope
  const owner = "Rama";

  function add(param) {
    console.info(owner);
    return value + param;
  }

  return add;
}

const addTwo = createAdder(2);
// function addTwo(param){
//     console.info("Eko");
//     return 2 + param;
// }
console.info(addTwo(10));
console.info(addTwo(20));
