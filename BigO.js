
const {
  performance
} = require('perf_hooks');


function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed for 1st: ${(t2 - t1) / 1000} seconds.`)



function addUpTo2(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo2(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed for 2nd: ${(time2 - time1) / 1000} seconds.`)

// 

// Big O - worst case scenario
// as N grows, how does the run time or number of operations grow
// O(1) = constant
// O(n) = grows linear
// O(n2) = squared, e.g. this is the nested loop
// 


// Space complexity
// how much is the space required for output or interim calculations in the algo as n expands
// use same as O(n) notation
// numbers only have 1 byte size
// arrays have multiple bytes to the size of the elements
// 


// Objects
// Search = O(N) / the time required to check if somehting is within the Object // e.g., hasOwnProperty - this method is constant time O(N)
// Access = O(1) constant time for search, same for insertion - this is when you have the key already and need to access the value associated with the key


// Arrays
// Access = O(1)
// Search = O(N)
// Insert = 