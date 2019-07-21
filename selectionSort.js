// similar to bubble sort

// instead of first placing large values in sorted position

// it places small values into sorted position


console.log(selectionSort([8,1,2,3,4,5,6,7])); // 1,2,3,4,5,6,7
console.log(selectionSort([8,7,6,5,4,3])); // 1,2,3,4,5,6,7


function selectionSort(array) {

	// set a start pointer

	var start = 0

	// whilst start pointer is smaller than the end point of the array

	while (start < array.length-1) {

		// loop through the array
		var isSwap = false
		for (var i = 0; i < array.length-1; i++) {
			// if the element is smaller than the following element, swap

			var temp = array[i]
			if (temp > array[i + 1]) {
				array[i] = array[i + 1]
				array[i + 1] = temp
				isSwap = true
			}
		}

		start++;
		if (isSwap === false ) {
			break
		}
	}



	// after one iteration of the loop, move start pointer to the right by 1

	// if there is no swap after 1 iteration, break out of the loop



	return array
}