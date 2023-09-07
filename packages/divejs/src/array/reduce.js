// reduce without an initial value.
const array = [15, 16, 17, 18, 19];

array.reduce((accum, currentVal, index) => {
  const returns = accum + currentVal;
  console.log(`accumulator: ${accum}, currentValue: ${currentVal}, index: ${index}, returns: ${returns}`);

  return returns;
});
console.log('-------------');

// reduce with an initial value
array.reduce((accum, currentVal, index) => {
  const returns = accum + currentVal;
  console.log(`accumulator: ${accum}, currentValue: ${currentVal}, index: ${index}, returns: ${returns}`);

  return returns;
}, 10);
console.log('--------------');

// To sum up values contained in an array of objects,
// you must supply an `initialValue`.
const objects = [
  {x: 1},
  {x: 2},
  {x: 3},
];

const sum = objects.reduce((accum, curVal, index) => {
  const returns = accum + curVal.x;

  console.log(`accumulator: ${accum}, current value: ${curVal}, index: ${index}, returns: ${returns}`);

  return returns;
}, 0);
console.log(sum);
