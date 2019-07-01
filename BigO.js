
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