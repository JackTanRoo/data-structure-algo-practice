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
}