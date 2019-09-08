// stack - LIFO - last in first out, a series of nodes


// used to - undo and redo, routing / browser history treated like a stack

// more than one way to implement a stack

// ARRAY IMPLEMENTATION - easiest way

var stack = [1,2,3,4]

stack.pop()

// OR USE SHIFT if the last one entered was unshifted in


// donne

// linked list implementation - formal

// BIG O OF STACKS - insertion is 0(1) and removal is O(1) - this the most important advantage of stack 


class Node {
	constructor (val){
		this.val = val;
		this.next = null
	}
}

class Stack {
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// pop is diff to the singly list as this is constant time

	// push updates the first element in the Stack - this is wayt that pop can be constant time because we just remove from the beginning and hence do not need to iterate though full list

	push(val) { 
		var newNode = new Node(val)
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			var temp = this.first;
			this.first = newNode;
			this.first.next = temp
		}
		return ++this.size
	}

	pop() {
		if (!this.first) return null

		var temp = this.first

		if (this.first === this.last) {
			this.last = null
		}

		this.first = temp.next
		
		this.size--

		return temp;

	}


}


