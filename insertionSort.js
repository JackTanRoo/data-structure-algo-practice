// insertion sort = keep the left side sorted 

// this is good when you need to keep a portion sorted and then there is real time data coming through

console.log(insertionSort([8,1,2,3,4,5,6,7])); // 1,2,3,4,5,6,7
console.log(insertionSort([1,7,6,5,4,3])); // 1,2,3,4,5,6,7


// O(N^2) complexity

function insertionSort(array) {


	// iterate through every item in the array

	for (var i = 1; i < array.length; i++) {

		// for every item

		// check through all the previous items - each item called check item, insert into correct place

		var currentItem = array[i];

		for (var j = i-1; j >= 0; j--) {

			// if current item is smaller than the check item

			// move check item to the right by 1 place


			if (array[j] >= currentItem) {
				array[j+1] = array[j]
			} else {
				break;
			}

		}
		array[j+1] = currentItem
	}


	

	// insert into correct place by





	// at the check item where the current value is greater than the check item, then check item + 1 is current value



	return array
}



	// // create a pointer for which it represents the sorted part of the array

	// var sortedEnd = 0

	// // start from the end of the array 

	// for (var i = array.length - 1; i > 0; i--) {
	// 	// as you iterate to the left

	// 	// move every element to the right

	// 	var temp = array[i]

	// 	array[i+1] = temp

	// 	// save the 1 element into temp

	// 	// and loop over the sorted part of the array and insert it

	// 	for (var j = 0; j <= sortedEnd; j ++ ) {
	// 		if (temp >= array[j] && temp <= array [j+1]) {
	// 			array[j+1] = temp
	// 		}

	// 		if (temp <= array[j] && temp >= array [j-1]) {
	// 			array[j+1] = temp
	// 		}
	// 	}

	// 	// then move the sortedEnd Pointer up by 1

	// 	sortedEnd++

	// }

	




	// // have an sortedEnd pointer that starts at 0

	// var sortedEnd = 0

	// // create 2 loops

	// // while (sortedEnd < array.length ) {
	
	// // first loop iterates between sortedEnd start and end pointer pointer

	// 	for (var i = sortedEnd; i < array.length; i++ ) {
	// 		var temp = array[i]

	// 		// loop through start and Sorted End, and insert the element


	// 		for (var j = sortedEnd; j >= 0; j--) {

	// 			// shift every element down by 1

	// 			var toBeMoved = array[j]

	// 			array[j+1] = toBeMoved

	// 			if (temp <= array[j] && temp >= array[j-1]) {

	// 				array[j] = temp

	// 			} 

	// 		}

	// 	// then move the sorted end pointer to the right by 1

	// 	}


	// // }



	// return array