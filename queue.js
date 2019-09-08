// stack - FIFO - first in first out, a series of nodes


// ARRAY IMPLEMENTATION - easiest way

// again constant time for Insertion and Removal

// Use case - print queue, print 1 page at a time, background tasks - 


// should not use array because if you shift out the first element, then you have re-index all of the elements again, which means ON not O1 time complexity


class Node {
	constructor(value) {
		this.value = value;
		this.next = null
	}
}


class Queue {
	constructor () {
		this.first = null;
		this.last = null;
		this.size = 0
	}

	// add to the end


	enqueue(val) {

		var newNode = new Node (val)

		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			var temp = this.last

			this.last = newNode

			temp.next = this.last

		}

		this.size++
		return;

	}


	// remove from the end

	dequeue() {
		if (!this.first) return null

		var temp = this.first

		if (this.first === this.last ) {		
			this.first = null;
			this.last = null
		}

		this.first = temp.next;
		this.size--;
		return temp;
	}

}