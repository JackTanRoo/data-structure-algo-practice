// data structure that contains a head, tail and length property

// linked Lists consist of nodes and each node has a value and a pointer to another node or null


// comparison with arrays

// LL

// dont have  inde3x
// conected via nodes with a next pointer
// random access is not allowed - have to traverse from beginning
// but good at insertion and deletion

// arrays

// Indexed in order
// insertion and deletion can be expensive
// can be 	quickly accessed at a specific index

// pop - remove last element

// push - add item to the end



class Node {
	constructor (val){
		this.val = val;
		this.next = null
	}
}

class SinglyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		
		// accept a value

		let node = new Node (val);

		// create a new node from the value

		// if the head is null

		if (this.head === null) {
			this.head = node;
			this.tail = node;
			this.length ++;
		}


			// assign the node to the head
			// also assign the node to the tail
			// then increment length by 1


		// else

		else {
			this.tail.next = node;
			this.tail = node;
			this.length++
		}

			// find the tail node
			// update next in the tail node
			// update the tail element in the class to this node
			// increment length by 1

		// then assign the val to the head

		return this;
	}

	pop(){
		// if the tail is null then return undefined
		if (!this.tail) {
			return undefined
		}

		if (length === 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;

		}

		// otherwise iterate through every element in the list
		var current = this.head
		var previous

		while (current.next) {

			previous = current;
			current = current.next

		}
		// track the current and previous element



		// if the current element is the last element of the list

		this.tail = previous
		previous.next = null;
		// delete current
		this.length--
		// delete the current element


		// set this.tail to the previous element

		// change the next proeprty of the previous element to null

		// reduce length by 1


		return current;

	}

	// shift - remove first element to the list


	shift () {
		// if there are no nodes, then return undefined

		if (!this.head) {
			return undefined
		}

		// else take the head, store it in a variable - oldhead

		var oldHead = this.head

		// head.next -> assign this to head

		this.head = oldHead.next

		// reduce length by 1

		this.length--

		// if length = 0, then set this.tail to null
		if (this.length === 0) {
			this.tail = null
		}
		// return old head

		return oldHead
	}


}