/**
 * splice() changes the contents of an array by removing or
 * replacing existing elements and/or adding new elements in place.
 * 
 * To create a new array with a segement removed and/or
 * replaced without mutating the original array, use `toSpliced()`.
 * 
 * To access part of an array without modifying it, see slice();
 */

function trySplice() {
  const months = ['Jan', 'March', 'April', 'June'];
  // Inserts at index 1
  months.splice(1, 0, 'Feb'); 
  // ['Jan', 'Feb', 'March', 'April', 'June']
  console.log(months); 

  // Replaces 1 element at index 4
  months.splice(4, 1, 'May');
  // ['Jan', 'Feb', 'March', 'April', 'May']
  console.log(months);
}

trySplice();
