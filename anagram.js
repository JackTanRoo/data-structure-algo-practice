// 
validAnagram("", "")
validAnagram("aaz", "zza") // false
validAnagram("anagram", "gramana") // true
validAnagram("anagram", "gramama") // false
validAnagram("awesome", "awesom") // true
validAnagram("texttwisttime", "timetwisttest") // true
validAnagram("TTXT", "XTTT") // true


function validAnagram(str1, str2) {
	// check if length of str1 and str2 is same; if different, return false

	var str1Obj = {}
	var str2Obj = {}

	if (str1.length !== str2.length) {
		return false
	}

	// count frequency of each letter in str1 and str2 and store as key-value pair in object

	for (let char1 of str1) {
		str1Obj[char1] = (str1Obj[char1]) ? str1Obj[char1] + 1 : 1
	}

	for (let char2 of str2) {
		str2Obj[char2] = (str2Obj[char2]) ? str2Obj[char2] + 1 : 1
	}

	// iterate across each key for str1, if they all exists also in str2, then return true, else return false
	console.log(str1Obj, str2Obj)

	Object.keys(str1Obj).forEach (key => {
		if (str2Obj[key] === undefined || str2Obj[key] !== str1Obj[key]) {
			// console.log(str1, str2, key, str1Obj[key], str2Obj[key], "false")
			return false
			// break
		}
	})
	console.log(str1, str2, "true")
	return true
};