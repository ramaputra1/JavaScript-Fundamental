{
  // 1st
  class MathUtil {
    static sum(...numbers) {
      if (numbers.length === 0) {
        throw new Error("Total parameter harus lebih dari 0");
      }

      let total = 0;
      for (const number of numbers) {
        total += number;
      }
      return total;
    }
  }

  try {
    console.info(MathUtil.sum()); // the sum is error
    console.info("Eko");
  } catch (error) {
    // then catch will execute cause we found error
    console.info(`Terjadi error : ${error.message}`);
  }

  console.info("Khannedy");
}

{
  // 2nd
  class MathUtil {
    static sum(...numbers) {
      if (numbers.length === 0) {
        throw new Error("Total parameter harus lebih dari 0");
      }

      let total = 0;
      for (const number of numbers) {
        total += number;
      }
      return total;
    }
  }

  try {
    console.info(MathUtil.sum());
    console.info("Eko");
  } catch (error) {
    console.info(`Terjadi error : ${error.message}`); // MESSAGE is default property from Error Class
  } finally {
    console.info("Program selesai"); // this one will always be execute after even for error or no error
  }

  console.info("Khannedy");
}

{
  // try finally // just to be more effective cause we do not use catch anymore instead of straight go with the finally
  class Counter {
    #counter = 1;

    next() {
      try {
        return this.#counter;
      } finally {
        this.#counter++;
      }
    }
  }

  const counter = new Counter();
  console.info(counter.next());
  console.info(counter.next());
  console.info(counter.next());
  console.info(counter.next());
  console.info(counter.next());
}
