// same as singly linked list
// except every node has a operation to point to previous node
// more flexibility
// but more memory


class Node {
	constructor (val){
		this.val = val;
		this.next = null
		this.prev = null
	}
}

class SinglyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	
	// push

	// create new node with value passed in

	// if the head is null  then set the head and tail to be newly created node

	// if not, set 
		// the next property on the tail to be that node and set the previous
		// set the previous property of that node to be the old tail
		// set the tail property to be that node
		// increment length by 1

	// return the entire list

		push(val) {
			var newNode = new Node(val)

			if (!this.head) {
				this.head = newNode
				this.tail = newNode
			} else {
				this.tail.next = newNode
				newNode.prev = this.tail
				this.tail = newNode
			}

			this.length++
			return this;
		}
	}
}

