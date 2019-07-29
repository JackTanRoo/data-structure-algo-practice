// compares the digits of the number into buckets of those digits

// start with last digit in the number

// then arraynge the numbers based on last digit

// then go to the second last digit

// classify to the bucket again based on new order of the nunmbers

//  then rearrange again

// then do it until the number with highest number of digits


// HELPER FUNCTIONS

// 	get digits - getDigit
//  find number of digits = digitCount
//  find num with maxDigits


// FIRST HELPER FUNCTION

// GET DIGIT

// returns the actual digit in num at a given place value

// getDigit (num, place)

function getDigit (num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

// for 7323
// = 7323 / 100 = 73.23 = 73 (because of Math.floor) = 3 (remainder after dividing by 10)

function digitCount (num) {
// what number to power of base 10 will give us the number

	if (num === 0) { return 1 }

	return Math.floor(Math.log10(Math.abs(num))) + 1;

}

function mostDigits(num) {
// given an array of number return the nummber of the digits for the largest number in the array

	let maxDigits = 0;

	for (let i = 0; i < num.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(num[i]))
	}

	return maxDigits;

}

// RADIX SORT FUNCTION

// define a function that accepts a list of numbers

// figure out how many digits the largest number has

// loop from k=0 up to this largest number of digits

// for each iteration of the loop
	// create buckets for each digit - 0 to 9
	// place each number in the corresponding bucket based on its kth digit

// replace our existing array with values in our buckets starting with 0 and going up to 9
// return list at the end

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])

// BIG O = 
// TIME COMPLEXITY = O(NK) - k is the num digits of the largest  number - so the numbers can get very large and high character count, then need to keep in mind
// space complexity = O(n+K)