/**
 * 
 * @param {number} max 
 * 
 */
function getRandomint(max) {
  return Math.floor(Math.random() * max)
}

console.log("Random int [0,3): %i", getRandomint(3))
console.log("Random int [0,1): %i", getRandomint(1))
console.log("Math.random(): %f ", Math.random())

/**
 * @description Generate a random number between [min, max)
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max-min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

console.log("Random int [6, 10): ", getRandomInt(6, 10))
