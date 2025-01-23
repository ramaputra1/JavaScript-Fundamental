// 'shape' class
class Shape {
  paint() {
    console.info("Paint Shape");
  }
}

// 'circle' class
class Circle extends Shape {
  // circle extends shape, so circle has all the things that shape has
  paint() {
    super.paint(); // we use super to access the paint in shape
    console.info("Paint Circle");
  }
}

const circle = new Circle();
circle.paint(); // the output gonna be two from 'shape' and 'circle'

{
  // 'shape' class
  class Shape {
    paint() {
      console.info("Paint Shape");
    }
  }

  // 'circle' class
  class Circle extends Shape {
    // if we do not have anything here it will still show "paint shape" when we call circle.paint cause it did extends the shape class
  }

  const circle = new Circle();
  circle.paint(); // the output gonna be two from 'shape' and 'circle'
}
