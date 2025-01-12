let counter = 0; // global scope

function hitMe() {
  // local scope = hitMe because it will have some block {} that gonna be local
  counter++;
}

// nested function
function first() {
  // local scope first
  let firstVariable = "First";

  function firstNested() {
    // function in function (nested), it can acces its parent scope which the first lcoal scope
    console.info(firstVariable);
    const firstNestedVariable = "First Nested";
  }
  firstNested();
  console.info(firstNestedVariable);
}

// in global scope try to access firstVariable that placed in local scope, it would be ERROR
// console.info(firstVariable); // ERROR
