sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(100,null) // false
sameFrequency(22,222) // false
sameFrequency(22,"") // false
sameFrequency(10101, 111000) // true



function sameFrequency(num1, num2) {
	// if length of num1 and num 2 are not same - then return false

	
	var objStr1 = {};
	var objStr2 = {};

	// if either of the inputs are not numbers then return false

	if (!Number.isInteger(num1) || !Number.isInteger(num2)){
		console.log(num1, num2, "false")
		return false
	}
	
	var numStr1 = num1.toString();
	var numStr2 = num2.toString();

	if (numStr1.length !== numStr2.length) { 
		
		console.log(num1, num2, "false")
		return false 
	}


	// break num1 into an object with keys being the digits, values being frequency
	
	for (const digit in numStr1) {

		if (!objStr1[digit]) {
		
			objStr1[digit] = 1
		
		} else {
		
			objStr1[digit] ++
		
		}
	};

	// break num2 into an object with keys being the digits balues

	for (const digit2 in numStr2) {

		if (!objStr2[digit2]) {
		
			objStr2[digit2] = 1
		
		} else {
		
			objStr2[digit2] ++
		
		}
	};	



	// iterate across the final 2 objects and compare digits and values to be same

	for (var property in objStr1) {
		if (objStr1[property] !== objStr2[property]) {
			console.log(num1, num2, "false")
			return false
		}
	}
	console.log(num1, num2, "true")
	return true
}