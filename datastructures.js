// ES 2015 Syntax

// - syntax to help define OOP in javascript

// what is a class -
// a blueprint for creating objectives with pre defined properties and methods
// and an instance would be a element of the class that inherts the properties and methods

// we are going to implement data structures as classes

// but note that classes dont exist in Javascript per se, they are just synatitical sugar to help implement

// does not change javascript into OOP

// example


class Student {
	constructor (firstName, lastName, year) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade
	}
}

let firstStudent = new Student ("jack", "lu", "8")

console.log(firstStudent)

// in this case

// this refers to the current individual instance of the class

