// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

function someRecursive(array, callback){
  // add whatever parameters you deem necessary - good luck!

  if (array.length === 1) {
  	return callback(array)
  }

  if (callback(array[0]) === true) {
  	return true
  } else {
  	array.shift()
  	console.log("new array", array)
  	return someRecursive(array, callback)
  }

}