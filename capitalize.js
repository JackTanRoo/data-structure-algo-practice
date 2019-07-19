function capitalizeFirst (array) {
  // add whatever parameters you deem necessary - good luck!

  var result = []

  if (array.length === 1) {
  	return array[0].charAt(0).toUpperCase() + array[0].slice(1);
  }

  var input = Array.prototype.slice.call(arguments)[0];

  var word = input.shift()

  word = word.charAt(0).toUpperCase() + word.slice(1);
  
  return result.concat(word, input);

}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
