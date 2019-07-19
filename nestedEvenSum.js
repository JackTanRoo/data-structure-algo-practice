

function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!

  var result = 0;

  // create a result var that is number


  // create array of keys

  var index = Object.keys(obj)

  // iterate through object using keys

  for (var i = 0; i < index.length; i++) {

    if (obj[index[i]] % 2 === 0) {
      result = result + obj[index[i]];
    } 

    if (typeof obj[index[i]] === "object") {
      return result + nestedEvenSum(obj[index[i]])
    }

  }

  return result

  // if you return through all of the keys, then return empty

  // if property is an even number - add to result

  // if property is an object then run nested evenSum on just that object
}




var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10