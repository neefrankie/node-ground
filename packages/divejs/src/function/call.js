// Using call to invoke a function and specifying the this value

function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cat",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj);

// Using call() to invoke a function without the first argument.

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call();

// Transforming methods to utility functions
const slice = Array.prototype.slice;
slice.call(arguments);
