function outer() {
  // outner or parent function

  function inner() {
    // inner as function inside our outer or as child from inner
    console.info("Inner");
  }

  inner();
  inner();
}

outer(); // we can acces outer
inner(); // not defined, cause it's outside
