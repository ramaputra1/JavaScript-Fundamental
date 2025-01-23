{
  class Employee {} // 'employee' class

  class Manager {} // 'manager' class

  const budi = new Employee();
  const eko = new Manager();

  console.info(typeof budi);
  console.info(typeof eko);

  console.info(budi instanceof Employee); // true // budi is from employee
  console.info(budi instanceof Manager); // false // budi not from manager

  console.info(eko instanceof Employee); // false // eko is not from employee
  console.info(eko instanceof Manager); // true // eko is from manager
}

{
  class Employee {} // 'employee' class

  class Manager {} // 'manager' class

  const budi = new Employee();
  const eko = new Manager();

  console.info(typeof budi);
  console.info(typeof eko);

  console.info(budi instanceof Employee);
  console.info(budi instanceof Manager);

  console.info(eko instanceof Employee); // TRUE // eko is not from employee but it inherited from employee so it's true
  console.info(eko instanceof Manager);
}
