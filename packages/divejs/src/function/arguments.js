// The arguments object is useful for functions called with more
// arguments than they are formally declared to accept.
// Use arguments.length to count how many arguments the function was called with.
function longestString() {
  let longest = "";

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }

  return longest;
}

// Each argument index can also be set or reassigned.
function func(a) {
  arguments[0] = 99;
  console.log(a);
}

func(10);

function func2(a) {
  a = 99;
  console.log(arguments[0]);
}
func2(10);

// arguments is an array-like object.
// It has a length property and properties indexed from zero,
// but it doesn't have Array's built-in methods like `forEach()` or `map()`.
// It can be converted to a reay Array, using one of slice(), Array.from() or spread syntax.
function argsToArray() {
  const args1 = Array.prototype.slice.call(arguments);
  console.log(args1);

  const args2 = Array.from(arguments);
  console.log(args2);

  const args3 = [...arguments];
  console.log(args3);
}

argsToArray(1, 2, 3);

// It both is iterable and has length and number indices.
function midpoint() {
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}


console.log(midpoint(2, 4, 1, 8, 5));
