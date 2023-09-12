// The typeof operator returns a string indicating
// the type of the operand's value.
console.log(`typeof 42 is ${typeof 42}`);
console.log(`typeof 'blubber' is ${typeof 'blubber'}`);
console.log(`typeof true is ${typeof true}`);
console.log(`typeof undeclaredVariable is ${typeof undecalredVariable}`);

console.log(`typeof NaN\t\t${typeof NaN}`);
console.log(`typeof 42n\t\t${typeof 42n}`);
console.log(`typeof Symbol()\t\t${typeof Symbol()}`);
console.log(`typeof undefined\t${typeof undefined}`);
console.log(`typeof {a: 1}\t\t${typeof {a: 1}}`);

console.log(`typeof [1, 2, 4]\t${typeof [1, 2, 4]}`);

console.log(`typeof null\t\t${typeof null}`);
