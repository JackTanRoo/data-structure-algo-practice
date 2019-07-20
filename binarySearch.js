function binarySearch(){
  // add whatever parameters you deem necessary - good luck!
}

console.log(binarySearch([1,2,3,4,5], 2)) // 1
console.log(binarySearch([1,2,3,4,5], 3)) // 2
console.log(binarySearch([1,2,3,4,5], 5)) // 4
console.log(binarySearch([1,2,3,4,5], 6)) // -1


function binarySearch(array, num) {
	// create left and right pointers
	var left = 0;

	var right = array.length - 1

	var mid
	// while left is smaller than right

	while (left < right) {
		mid = Math.round((left + right) / 2)

		if (array[mid] === num){
			return mid
		}

		if (num < array[mid]) {
			right = mid - 1
		}

		if (num > array[mid]) {
			left = mid + 1
		}
  
	}

	return -1 
	// find mid point between left and right


	// if it is num return index of mid point


	// if num < mid point, move right to mid


	// if num > mid, move left to mid

}
