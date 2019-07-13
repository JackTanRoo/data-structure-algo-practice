// averagePair

// find if there is a pair in the input of sorted array and if there is a pair of values equals target average


averagePair([1,2,3], 2.5) //true
averagePair([1,3,3,5,6,7,10,12,19], 8) //true
averagePair([-1,0,3,4,5,6], 4.1) //false
averagePair([], 4) //false

function averagePair (array, targetAvg) {

	// multiply the target avg by 2 to get the target Sum

	var targetSum = targetAvg * 2;

	// have left pointer at first number and right pointer at last number

	var left = 0
	var right = array.length - 1;

	// while loop where left is always smaller than right 

	if (array.length === 0) {
		console.log(array, targetAvg, "false")
		return false
	}

	if (array.length === 1) {
		return (array[0] === targetAvg ? true : false);
	}
	
	var sum;

	while (left < right) {
		
		sum = array[left] + array[right];
		
		if (sum === targetSum) {

			console.log(array[left], array[right], targetAvg, "true");
			
			return true;	

		} else if (sum < targetSum) {
		
			left++ ;
		
		} else {
			right--;
		}

	}
	// add left and right check
		// if sum is the target - return true

		// if sum is smaller than the target - then iterate the left pointer to the right by 1

		// if the sum is larger than the target - then iterate the right pointer to the left by 1 space

		// then perform same check



	// space O(1) = only create new numbers which have constant space
	console.log(array, targetAvg, "false")
	return false;
}