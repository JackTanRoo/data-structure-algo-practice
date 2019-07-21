// bubble sort

// takes an array and outputs sorted array



// after first iteration, second iteration is to iterate through the full loop except last element, and shorten

// for already sorted arrays, check if there was a swap after 1 iteration of the loop if no, break out of the loop

// 


// o(N^2)

console.log(bubbleSort([8,1,2,3,4,5,6,7])); // 1,2,3,4,5,6,7
console.log(bubbleSort([8,7,6,5,4,3])); // 1,2,3,4,5,6,7


function bubbleSort(array) {

	// iterate from end to front

	// create pointer for end point

	var end = array.length - 1;

	// for every iteration through the loop, move end point to the left by 1 spot

	while (end > 0) {

		// iterates through array
		var isSwap = false;
		for (var i = 0; i < array.length-1; i ++) {
			var temp = array[i];

			if (temp > array[i+1]) {
				// swaps the bigger number with smaller number

				array[i] = array[i+1];
				array[i+1] = temp
				isSwap = true
			}
		}

		end--;
		if (isSwap === false) {
			break
		}

	}
	// finish the loop when the end point is 0



	return array
}


// function bubbleSort(arr){
//   var noSwaps;
//   for(var i = arr.length; i > 0; i--){
//     noSwaps = true;
//     for(var j = 0; j < i - 1; j++){
//       if(arr[j] > arr[j+1]){
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//         noSwaps = false;         
//       }
//     }
//     if(noSwaps) break;
//   }
//   return arr;
// }

// bubbleSort([8,1,2,3,4,5,6,7]);