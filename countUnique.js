count([1,1]) // 1

count([1,1,3,5,6,8,10]) // 6

count([1,2,2,5,6,8,10]) // 6

count([1,1]) // 2

count([]) // 2

count([2]) // 1

count([-2,-2,-1,1,1,0,2]) // 5

count([1,1,4]) // 2

function count(array) {
	var result=1;

	var left = 0;
	var right = 1;

	// create 2 pointers next to each other

	// because this is a sorted array, you compare elements at left and right

	// if the right is not unique, move to right by 1 step

	// if the right is unique, move the left to the original right position - incrementing the latest unique value up by 1, and incrementing result up by 1

	if (array.length === 0) {
		console.log(array, 0)

		return 0;
	}

	if (array.length === 1) {
		console.log(array, 1)

		return 1;
	}

	while (right < array.length) {
		if (array[left] === array[right]) {
			right++
			if (array.length === 2) {
				result++
			}
		} else {
			console.log(array[left], array[right], result)
			left = right;
			result++;

			console.log(array[left], array[right], result)
		}
	}
	console.log(array, result)
	return result
}
