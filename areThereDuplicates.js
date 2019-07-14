areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,2) //true
areThereDuplicates("a","b","a") // true

function areThereDuplicates(){
	// arguments = array of arguments

	var result = {}

	for (var i =0; i < arguments.length; i++) {

		// if the argument already exists as a key, then return false
		if (!result[arguments[i]]) {
			result[arguments[i]] = 1
		} else {
			console.log(arguments, "true")
			return true
		}

	}
	console.log(arguments, result, "false")
	return false
	// iterate through arguments and save into object if the argument does not yet exist as a key

};