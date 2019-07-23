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

console.log(merge([1,2], [3,5,6, 100,200]))


function merge(array1, array2) {
	var result = [];



	// whilst array1 and array2 length is not 0

	while (array1.length > 0 && array2.length > 0) {

		if (array1[0] <= array2[0]) {
			result.push(array1[0]);
			array1.shift()
		} else {
			result.push(array2[0]);
			array2.shift();
		}


	}
	// compare first element of array1 and array2


	// push the smaller one into the result array


	// pop it out of the array

	// determine the longer array

	if (array1.length >= array2.length) {
		 var longArray = array1;
		 var shortArray = array2;
	} else {
		 var longArray = array2;
		 var shortArray = array1;
	}

	for (var i = 0; i < longArray.length; i++) {
		result.push(longArray[i])
	}

	return result;

}
