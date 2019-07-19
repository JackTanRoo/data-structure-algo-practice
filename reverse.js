// reverse function that accepts a string and returns a new string in reverse

console.log(reverse("awesome")) // emosema
console.log(reverse("whatisgood")) // doogsitahw


function reverse(str) {
	// if the string has 1 chars then return the char
	if (str.length === 1) {
		return str
	}

	return reverse(str.substr(1)) + str.charAt(0)
	// recurse so the string is a concatenation of the reverse of the body of the string followed by concatenation of the first char
}