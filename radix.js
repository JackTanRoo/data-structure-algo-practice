// compares the digits of the number into buckets of those digits

// start with last digit in the number

// then arraynge the numbers based on last digit

// then go to the second last digit

// classify to the bucket again based on new order of the nunmbers

//  then rearrange again

// then do it until the number with highest number of digits



// FIRST HELPER FUNCTION

// GET DIGIT

// returns the actual digit in num at a given place value

// getDigit (num, place)

function getDigit (num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

// for 7323
// = 7323 / 100 = 73.23 = 73 (because of Math.floor) = 3 (remainder after dividing by 10)
