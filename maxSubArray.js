// 
maxSubarraySum([100,200,300,400],2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20],4) // 39
maxSubarraySum([-3,4,0,-2,6,-1],2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3],3) // NULL


function maxSubarraySum(array, num){

	// set up left pointer at 0 and right pointer at num

	var left = 0;

	var right = num - 1;

	// add first num elements together to get sum
	var result = 0;

	if (array.length < num) {
		console.log(array, num, null)
		return null;
	}

	for (var i = 0; i < num; i++) {
		result = result + array[i];
	}

	// console.log("first",array, num, result)
	var temp = result;
	while (right < array.length) {
		
		
		right++;


		if (array[right] !== undefined) {
			temp = temp - array[left] + array[right]
			// console.log("temp", array[left+1], array[right], array, temp)

			result = Math.max(result, temp)

		}
		left++;
	}

	// while right pointer is lower than length of array


	// iterate left pointer up and right pointer up by 1

	// add up a new sum = take the bigger of the two

	// 
	console.log(array, num, array[left], array[right],result)
	return result;
}