// push() adds the specified elements to the end of
// an array and returns teh new length of the array.
// push()
// push(element1)
// push(element1, element2)
// A mutating method.
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count); // 4
console.log(animals);

animals.push('chickens', 'cats', 'dogs');
console.log(animals);

// unshift() adds the specified elements to the beginning
// of an array and returns the new length of the array.
// unshift()
// unshift(element1)
// unshift(element1, element2)
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);
// If multiple elements are passed as parameters,
// they're inserted in chunk at the beginning of
// the object.
// Calling unshifit with n arguments once,
// or calling it n times with 1 argument don't yield
// the same results.
let arr = [4, 5, 6];
arr.unshift(1, 2, 3);
console.log(arr);

arr = [4, 5, 6];
arr.unshift(1);
arr.unshift(2);
arr.unshift(3);
console.log(arr);

// pop() removes the last element from an array and returns that element.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
plants.pop();
console.log(plants);

// shift() removes the first element from an array and returns that
// removed element.
const firstElement = array1.shift();
console.log(array1);
console.log(firstElement);
