
var result = []

// function flatten(){
//   // add whatever parameters you deem necessary - good luck!

//   // create a result array

//   // concat that result array as we circle through each element of the array

//   // when element is an array with length 1 or a single element, then return that element
//   var inputs =  Array.prototype.slice.call(arguments)[0];

//   // console.log("first", inputs)

//   if (!Array.isArray(inputs[0]) && inputs.length === 1) {
//   	return inputs[0]
//   }

//   if (Array.isArray(inputs[0])) {
//   	return flatten(inputs[0])
//   }
  

//   var firstElement = inputs.shift();
  
//   // console.log("second", inputs)
  
//   return result.concat(firstElement, flatten(inputs))


// }

function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}


console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3