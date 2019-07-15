findLongestSubstring("") // 0

findLongestSubstring("rithmschool") // 7

findLongestSubstring("thisisawesome") // 6

findLongestSubstring("thecatinthehat") // 7

findLongestSubstring("bbbbbb") // 1

findLongestSubstring("substring") // 8



// set a left pointer at 0, distance at full length of string, right pointer at length

// iterate between left and right pointer

// create an object with keys being the chars from the string

// if left starts at 0, then set the keys as chars from string, property as frequency of letter

// start counter of all unique chars

// start counter of all actual chars

// if counter of all unique chars < counter of all actual chars - then it is not longest sub string

// if not longest sub string, then move left pointer to left by 1, and right by 1. 

// If right pointer is at end of the string, reset left to 0, distance reduce by 1, right = left + distance

	// reduce the counter of actual chars by 1

	// if the counter of the chars removed from left is 0 (eg it was a unique char), then reduce the delete the key, and reduce the unique chars obj

	// then add the counter of actual chars by 1, then add the chars of the right pointer

	// check for unique chars





function findLongestSubstring(str) {



	// if length of string is 0 then return 0

	if (str.length === 0 || !str.length) {
		console.log (0)
		return 0
	}

	// set a left pointer to 0

	var left = 0;
	var distance = str.length - 1;
	var right = left + distance;

	// set a right pointer to length - 1


	// iterate from left to right for the string
	var container = {};
	var character;


	// start counter of all unique chars
	// start counter of all actual chars

	var totalCharsCounter = 0;
	var uniqueCharsCounter = 0;

	// set a left pointer at 0, distance at full length of string, right pointer at length


	while (distance >= 0 && right < str.length) {


		// if left starts at 0, then set the keys as chars from string, property as frequency of letter


		if (left === 0) {
			console.log(left, right, str.charAt(left), str.charAt(right), str, distance, container, totalCharsCounter, uniqueCharsCounter)
			for (var i = left; i <= right; i ++) {
				character = str.charAt(i);

				// each str character becomes a key in the object if there no existing key

				if (!container[character]) {
					
					container[character] = 1;
					uniqueCharsCounter++;
					totalCharsCounter++;
				
				} else {
					
					container[character] ++;
					totalCharsCounter++;
				
				}

			}

			// check if unique string

			if (totalCharsCounter === uniqueCharsCounter) {
				console.log ("longest unique string", str, Object.keys(container).length)
				return Object.keys(container).length
			}
		}

		// if counter of all unique chars < counter of all actual chars - then it is not longest sub string

		// if not longest sub string, then move left pointer to left by 1, and right by 1. 

		if (right + 1 < str.length) {
			left++
			right++

			character = str.charAt(left-1)

			// reduce the counter for character on the left 
			container[character]--
			totalCharsCounter-- 

			if (container[character] === 0) { 
				delete container[character] 
				uniqueCharsCounter-- 
			}

			character = str.charAt(right)

			if (!container[character]) {
					
				container[character] = 1;
				uniqueCharsCounter++;
				totalCharsCounter++;
			
			} else {
				
				container[character] ++;
				totalCharsCounter++;
			
			}

			// check if unique string

			if (totalCharsCounter === uniqueCharsCounter) {
				console.log ("longest unique string", str, Object.keys(container).length)
				return Object.keys(container).length
			}

		}

		// If right pointer is at end of the string, reset left to 0, distance reduce by 1, right = left + distance

		if (right + 1 >= str.length) {
			left = 0
			container = {}
			distance --
			right = left + distance;
			totalCharsCounter = 0;
			uniqueCharsCounter = 0;
		}

	}

	console.log ("finished", 1)
	return 1

}


		// reduce the counter of actual chars by 1

		// if the counter of the chars removed from left is 0 (eg it was a unique char), then reduce the delete the key, and reduce the unique chars obj

		// then add the counter of actual chars by 1, then add the chars of the right pointer

		// check for unique chars





	// while (right - left >=0 && right < str.length) {
	
	// 	if (left === 0) {

	// 		for (i = left; i <= right; i ++) {
	// 			character = str.charAt(i);

	// 			// each str character becomes a key in the object if there no existing key

	// 			if (!container[character]) {
	// 				container[character] = 1;
	// 			} else {
	// 				container[character] ++;
	// 				repeatCounter ++;
	// 			}

	// 			// if there is all unique values then return the number of characters
	// 		}

	// 		if (repeatCounter === 0) {
	// 			console.log (str, container, str.length)
	// 			return str.length
	// 		}
	// 	}

	// 	// if there are duplicating values - then iterate the left pointer up by 1 and the right pointer up by 1
	// 	if (right + 1 < str.length) {
	// 		left++
	// 		right++
	// 		repeatCounter = 0
			
	// 		// use window pattern to eliminate the earlier characters and add later characters to container

	// 		var charToEliminate = str.charAt(left-1)
	// 		var charToAdd = str.charAt(right)

	// 		if (container[charToEliminate] > 1 ) {
	// 			container[charToEliminate]--
	// 		} else if (container[charToEliminate] === 1) {
	// 			delete container[charToEliminate];
	// 		}

	// 		// check for repeats

	// 	} else {
	// 		distance--
	// 		left = 0
	// 		right = left + distance
	// 	}

	// }
