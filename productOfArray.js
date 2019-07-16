console.log(productofArray([1,2,3])) // 6
console.log(productofArray([1,2,3,10])) // 60

function productofArray(array) {
	if (array[0] === undefined) {
		return 1
	}

	return array.shift() * productofArray(array)

}