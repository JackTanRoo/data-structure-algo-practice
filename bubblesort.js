// bubble sort

// takes an array and outputs sorted array



// after first iteration, second iteration is to iterate through the full loop except last element, and shorten

// for already sorted arrays, check if there was a swap after 1 iteration of the loop if no, break out of the loop

// 


console.log(bubbleSort([8,1,2,3,4,5,6,7])); // 1,2,3,4,5,6,7
console.log(bubbleSort([8,7,6,5,4,3])); // 1,2,3,4,5,6,7


function bubbleSort(array) {

	// iterate from end to front

	// create pointer for end point

	var end = array.length - 1;

	// for every iteration through the loop, move end point to the left by 1 spot

	while (end > 0) {

		// iterates through array

		for (var i = 0; i < array.length-1; i ++) {
			var temp = array[i];

			if (temp > array[i+1]) {
				// swaps the bigger number with smaller number

				array[i] = array[i+1];
				array[i+1] = temp
			}
		}

		end--;

	}
	// finish the loop when the end point is 0



	return array
}