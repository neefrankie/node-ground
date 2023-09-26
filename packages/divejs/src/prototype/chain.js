// Inheriting properties
const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
  },
};

console.log('o.[[Prototype]]');
console.log(Object.getPrototypeOf(o));

console.log('o.[[Prototype]].[[Prototype]]');
console.log(Object.getPrototypeOf(Object.getPrototypeOf(o)));

console.log('[[Prototype]].[[Prototype]].[[Prototype]]');
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(o))));

console.log(`Is there an 'a' own property on o: ${o.a}`);
console.log(`Is there a 'b' own property on o: ${o.b}`);
// This won't work in typescript.
console.log(`'c' on prototype chain: ${o.c}`);
console.log(`'d' on prorotype chain: ${o.d}`);

// Inherting methods
// When an inherited function is executed,
// this value of this points to the inheriting object,
// not to the prototype object where the function is an own property.
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  }
}

console.log(parent.method());

const child = {
  __proto__: parent,
};

console.log(child.method());
child.value = 4;
console.log(child.method());

// Constructors
const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes1 = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];

function Box(value) {
  this.value = value;
}

// Box.prototype is not much different from the boxPrototype object.
Box.prototype.getValue = function() {
  return this.value;
}

// Every instance created from a contructor function will automatically
// have the constructor's prototype property as its [[Prototype]].
const boxes = [
  new Box(1),
  new Box(2),
  new Box(3),
];

console.log(Object.getPrototypeOf(new Box(1)) === Box.prototype);
console.log(Box.prototype.constructor === Box);

// Rewrite in classes:
class Box2 {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}
// Classes are syntax sugar over constructor functions.
// You can still manipulate Box.prototype to change the behavior of all instances.
// Box.prototype is only useful when constructing instances.
// It has nothing to do with Box.[[Prototype]], which is the constructor functions's own prototype.
// Object.getPrototypeOf(Box) === Box.__proto__ !== Box.prototype.


