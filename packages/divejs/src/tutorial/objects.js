// Creating new objects
// Using object initializers
const obj = {
  property1: 'value1',
  2: 'value2',
  'property n': 'value3',
};

const myHonda = {
  color: 'red',
  wheels: 4,
  engine: {
    cyclinder: 4,
    size: 2.2,
  },
};

// Objects created with initializers are called plain objects,
// because they are instances of Object, not any other object type.

// Using a constructor function


function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const rand = new Person('Rand McKinnon', 33, 'M');
const ken = new Person('Ken Jones', 39, 'M');

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

const myCar = new Car('Eagle', 'Talon TSi', 1993, rand);
const kenscar = new Car('Nissan', '300ZX', 1992, ken);
const vpgscar = new Car('Mazda', 'Miata', 1990, rand);

myCar.color = 'black';

// Enumerating properties.
// for...in traverses all of the enumerable string properties
// of an object as well as its prototype chain.
// You can use the bracket notation with for...in to iterate over
// all the enumerable properties of an object.
function showProps(obj, objName) {
  let result = '';

  for (const i in obj) {
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }

  console.log(result);
}

showProps(myCar, 'myCar');

function listAllProperties(myObj) {
  let objectToInspect = myObj;
  let result = [];

  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }

  return result;
}

const myObj = {
  myMethod: function(params) {

  },

  myOtherMethod(params) {

  },
};

// Object.keys() returns an array with only the enumerable own
// string property names in the object, but not those in the
// prototype chain.

// Object.getOwnPropertyNames() returns an array containing all
// the own string property names in the object, regardless of 
// if they are enumerable or not.
