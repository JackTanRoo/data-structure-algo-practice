
minSubArrayLen([2,3,1,2,4,3], 7) // 2
minSubArrayLen([2,1,6,5,4], 9) // 2
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1
minSubArrayLen([2,3,1,2,4,3], 95) // 0


function minSubArrayLen(array, num){

	var distance = 0;
	
	// set left pointer at 0 and right pointer at left + distance

	var left = 0;
	var right = left + distance;

	// iterate through array and sum elements in between left and right inclusive
	var temp = 0;

	if (distance === 0 ) {
		for (var i =0; i< array.length; i++) {
			if (array[i] >= num) { 
				console.log(array[i], num, distance + 1)
				return distance + 1
			}
		}
	}
	
	distance = 1
	right = left + distance;

	while (distance < array.length && distance > 0) {

		temp = 0;

		if (left === 0 ) {
			for (var j = 0; j < right + 1; j++) {
				
				temp = temp + array[j]

			}
			// console.log("before", array[left], array[right], temp)

			if (temp >= num) { 
				console.log("first", array, num, array[left], array[right], distance + 1)
				return distance + 1 
			}
		}

		// console.log("before while loop", array[left], array[right], distance, temp)

		while (right < array.length && array[right + 1] !== undefined) {
			// console.log("before", array[left], array[right], distance, temp, array)

			temp = temp - array[left] + array[right+1]
			left++;
			right++;

			// console.log("after", array[left], array[right], temp, array)

			if (temp >= num) { 
				console.log("second", array, num, array[left], array[right], distance + 1)
				return distance + 1
			}
		}

		left = 0
		distance++;
		right = left + distance;
	}
	// if the the sum is greater or equal to num, then return distance


	// if the sum is not smaller than num, then shift left +1 and right +1


	// once we iterate to end of the array, iterate the distance up by 1, reset left to 0 and right to left + distance
	console.log(array, num, 0)
	return 0;
};


