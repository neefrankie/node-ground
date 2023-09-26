class MyClass {
  myField = 'foo';
  #myPrivateField = 'bar';

  constructor() {}

  myMethod() {

  }

  static myStaticField = 'bar';
  static myStaticMethod() {

  }

  static {

  }
}

// Equivalent to
function MyClassB() {
  this.myField = "foo";
}
MyClassB.myStaticField = 'bar';
MyClassB.MyStaticMethod = function() {

};
MyClassB.prototype.myMethod = function() {

};

const myInstance = new MyClass();
console.log(myInstance.myField);
myInstance.myMethod();

// Class declarations are not hoisted.
// Class declarations also have their expression counterparts.
// Within a class constructor, the value of this points to the newly
// created instance.
// The this value will be automatically returned as the result of new.
// Do not return any value from the constructor.

class Color {
  #values;

  
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
  /**
   * @param {number} r 
   * @param {number} g 
   * @param {number} b 
   */
  constructor(r, g, b) {
    this.#values = [r, g, b];
    // This also works. However, this creates a new function every
    // time a Color instance is created, even when they all do the
    // same thing!
    // this.getRed = function() {
    //   return this.values[0];
    // }
  }

  /**
   * @description A method is shared between all instances.
   * It's defined on the prototype of all instances, or Color.prototype.
   * @returns {number}
   */
  get red() {
    return this.#values[0];
  }

  /**
   * @param {number} value 
   */
  set red(value) {
    if (value < 0 || value > 255) {
      throw new RangeError('Invalid R value');
    }
    this.#values[0] = value;
  }

  /**
   * A class method can read the private fields of other instances,
   * as long as they belong to the same class.
   * @param {Color} anotherColor 
   * @returns {number}
   */
  redDifference(anotherColor) {
    if (!(#values in anotherColor)) {
      throw new TypeError('Color instance expected');
    }
    return this.#values[0] - anotherColor.#values[0];
  }

  toString() {
    return this.#values.join(', ');
  }
}

const red = new Color(255, 0, 0);
console.log(red);
console.log(red.red);
red.red = 0;
console.log(red.red);
console.log(Color.isValid(255, 0, 0));
console.log(Color.isValid(1000, 0, 0));

class MyClassC {
  luckyNumber = Math.random();
}

console.log(new MyClassC().luckyNumber);
console.log(new MyClassC().luckyNumber);

// A calss can only extend from one class.
// Multiple inheritance can be achieved through class composition and mixins.
class ColorWithAlpha extends Color {
  // Derived classes don't have access to the parent class's
  // private fields.
  #alpha;

  constructor(r, g, b, a) {
    // Call super() before accessing this.
    // The super() call calls the parent class's constructor to initialize this.
    super(r, g, b);
    this.#alpha = a;
  }

  get alpha() {
    return this.#alpha;
  }

  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError('Alpha value must be between 0 and 1');
    }
    this.#alpha = value;
  }

  toString() {
    return `${super.toString()}, ${this.#alpha}`;
  }

  // When you use extends, the static methods inherit fro meach other as well.
  static isValid(r, g, b, a) {
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

// class Counter extends HTMLElement {
//   #xValue = 0;

//   constructor() {
//     super();
//     this.onclick = this.#clicked.bind(this);
//   }

//   get #x() {
//     return this.#xValue;
//   }

//   set #x(value) {
//     this.#xValue = value;
//     window.requestAnimationFrame(this.#render.bind(this));
//   }

//   #clicked() {
//     this.#x++;
//   }

//   #render() {
//     this.textContent = this.#x.toString();
//   }

//   connectedCallback() {
//     this.#render();
//   }
// }
