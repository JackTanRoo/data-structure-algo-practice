// // designate an element as a pivot

// all elements that is smaller than, move to the left of privot

// same as right

// but order on left and right does not matter

// very space efficient, all elements are moved in place, e.g no new array is created

// then recursively do the same thing on the left side

// then recursively do the right side

// pivot helper function:

// also called partition

// ideally should be the median, has some implications for Big 0

// but we can choose first element is the start of the pivot

// pivot pseudo code

// accept 3 arguments = array, start index, end index

// grab the pivot from start of the array

// store the current pivot index in a variable - this will keep track of where the pivot should end up

// as you iterate from start to end

// if the pivot is greater than current element, increment the pivot index variable and then swap the current element with the pivot index

// swap the position of the the pivot with the element at pivot index

// pivot index is basically the number of elements that is smaller than the pivot

// then you swap the pivot and the element at the pivot index


console.log(pivot([4,8,2,1,5,7,6,3])) // 3


function pivot(array, start, end) {

	var start = start ? start : 0
	var end = end ? end : array.length-1

	// console.log(start, end)

	// select a pivot as first element
	var pivotIndex = 0;

	var pivot = array[0];

	// create a pivot index starting at 0

	// iterate through the array

	// if the pivot is greater than the current element, swap the element at the pivot index +1 with the current element
	var currentElement

	for (var i = start + 1; i <= end; i ++) {
		currentElement = array[i]

		if ( currentElement <= pivot) {


			var pivotIndexElementToSwap = array[pivotIndex + 1]
			array[pivotIndex + 1] = currentElement;
			array[i] = pivotIndexElementToSwap

			// then increment the pivot index up by 1

			pivotIndex++
			console.log(currentElement, pivotIndex, array)


		}
	}


	// at the end of the iteration swap the pivot and the element at the current index

	array[0] = array[pivotIndex];
	array[pivotIndex] = pivot;

	return pivotIndex
}