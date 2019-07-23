// merge sort

// split unsorted array until you have individual element in its own array of 1 element

// then join the the sorted individual arrays into arrays of 2 but in sorted order

// then merge the arrays of 2 into sorted arrays of 4


// key splits

// split into 1s

// sort

// merge sorted arrays into larger arrays

// O(N log N)

// STEP 1

// implement merge - which takes 2 sorted arrays, then creates joint result array of sorted elements


console.log(merge([100,200], [1,2,3,5,6]))

function merge(array1, array2) {
	var result = []


	// define a pointer for array 1 and a pointer for array 2

	var shortPointer = 0;

	var longPointer = 0;

	if (array1.length >= array2.length) {
		var longArray = array1;
		var shortArray = array2;
	} else {
		var longArray = array2;
		var shortArray = array1;
	}

	// find the shorter array


	// whilest pointerShort < length of shorter array

	while (shortPointer < shortArray.length) {
		// if arrayShort[pointerShorter] <= arrayLong[pointerLonger]

		// push arrayShort element to result + iterate pointer Shorter up by 1

		if (shortArray[shortPointer] <= longArray[longPointer]) {
			result.push(shortArray[shortPointer])
			shortPointer++
		} else {
			result.push(longArray[longPointer])
			longPointer++
		}
	}

	for (var i = longPointer; i < longArray.length; i++) {
		result.push(longArray[longPointer])
	}



		// else push arrayLong element to result + iterate pointer Longer up by 1

	// loop over LongerArray from pointerLong to end of LongerArray

		// push the remaining elments into the result array



	return result;

}