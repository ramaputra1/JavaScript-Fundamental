function createFullName(firstName, middleName, lastName) {
  debugger; // debugger feature
  const fullName = `${firstName} ${middleName} ${middleName}`; // here we have our error, let's tru debugger feature
  return fullName;
}

// how to check the error?
// when you open the inspect and in sources it will show then just use each breakpoint to stop and resume each line that you want to find the error
const name = createFullName("Rama", "Adi", "Putra");
console.info(name);
