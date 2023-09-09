// Sorts the elements of an array in place and returns
// the same reference to the same array.
// The default sort order is ascending.
// To sort the elements in an array without mutating 
// the original array, use `toSorted()`.
// sort()
// sort(compareFn)
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);

// compareFn: a function that defines the sort order.
// The return value should be a number whose sign
// indicates teh relative order of the two elements:
// negative if a < b sort a before b: [a, b]
// positive if a > b, sort a after b: [b, a]
// zero if they are equal.
// NaN is treated as 0.
let numberArray = [40, 1, 5, 200];
numberArray.sort((a, b) => {
  return a - b;
});
console.log(numberArray);

numberArray = [40, 1, 5, 200];
numberArray.sort((a, b) => {
  return b - a;
});
console.log(numberArray);
