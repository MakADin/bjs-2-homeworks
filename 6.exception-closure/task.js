function parseCount(input) {
  const parseNumber = Number.parseFloat(input);

  if (isNaN(parseNumber)) {
    throw new Error("Невалидное значение");
  }

  return parseNumber;
}

function validateCount(input) {
  try {
    return parseCount(input);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this._perimeter = this.a + this.b + this.c;
  }

  get perimeter() {
    return this._perimeter;
  }

  get area() {
    const p = this._perimeter / 2;
    let triangleArea = Number(
      Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c))).toFixed(3)
    );

    return (this._area = triangleArea);
  }
}

function getTriangle(a, b, c) {
  const error = "Ошибка! Треугольник не существует";
  try {
    let triangle = new Triangle(a, b, c);
    return triangle;
  } catch (err) {
    return {
      get area() {
        return error;
      },
      get perimeter() {
        return error;
      },
    };
  }
}

let newTriagnle = new Triangle(5, 5, 7);
