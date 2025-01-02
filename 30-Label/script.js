// using label but without the continue or break
{
  loopOne: for (let firstLoop = 0; firstLoop < 10; firstLoop++) {
    loopTwo: for (let secondLoop = 0; secondLoop < 100; secondLoop++) {
      console.info(`${firstLoop} - ${secondLoop}`);
    }
  }
}

{
  loopOne: for (let firstLoop = 0; firstLoop < 10; firstLoop++) {
    loopTwo: for (let secondLoop = 0; secondLoop < 100; secondLoop++) {
      if (secondLoop > 10) {
        continue loopOne; // we want to continue only for loopOne
      }
      console.info(`${firstLoop} - ${secondLoop}`);
    }
  }
}
