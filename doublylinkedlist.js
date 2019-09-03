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
	
	// push - add a node to the end of the doubly linked list

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

	// pop - remove end of the doubly linked list and return it

		// if length is 0, return null

		// length increment down by 1

		// else if length = 1
			// save current head in temp

			// set head and tail to null 

			// return temp

		// else 
			// save tail as temp

			// go to prev of tail and define next property on prev of tail as null

			// update this.tail to prev

			// return temp

		pop(){
			if (this.length === 0) { 
				return null
			}

			this.length--;
			var temp;

			if (this.length === 1) {
				temp = this.head
				this.head = null;
				this.tail = null
				return temp
			}

			else {
				temp = this.tail;
				this.tail = temp.prev;
				this.tail.next = null;
				temp.prev = null
			}
			return temp
		}

		// shift - removes the node from the beginning

		// if length is 0, return null

		// same head as temp

		// length increment down by 1

		// if length = 1
			// set head and tail to null 
			// return temp

		// else 
			// go to next of temp and set this.head as the next of temp

			// update this.head.prev to null
			// update temp.next to null
			// return temp


		shift(){
			var temp = this.head

			if (!this.head) {
				return undefined
			}

			if (this.length === 0) {
				this.head = null;
				this.tail = null
			
			} else {
				this.head = temp.next;
				this.head.prev = null;
				temp.next = null;
			}

			this.length--
			return head
		}

		// unshift

		// add a node to the front of the list

		// if length is 0, pop value

		// else 

			// create a newNode

			// save oldHead as this.head

			// oldHead.prev = newNode

			// newNode.next = oldHead

			// this.head = newNode

		// return list


		unshift(val){
			if (this.length === 0) {
				return this.push(val)
			} else {
				var newHead = new Node (val)

				var oldHead = this.head

				this.head = newHead;
				newHead.next = oldHead;
				oldHead.prev = newHead;	
				this.length ++
				return this
			}
		}

		// get - access a node in a doubly linked list using its position

		// if index is less than or equal to half of the length,
		// start from the head
		// create a for loop, starter a counter at 1, increment for each loop
			// stop the loop when you reach index
			// for each loop, assign the currentNode to currentNode.next
			// at end of the loop return the currentNode

		// if index is more than half then start from tail

		get (index) {
			// var counterEnd = 0;
			// var counterIncrement;
			// var counter;

			if (index <0 || index >= this.length) {
				return null
			}

			if (index <= this.length / 2 ) {
				var currentNode = this.head

				for (var counter = 0; counter < index; counter++) {
					currentNode = currentNode.next
				}
				return currentNode

			} else {
				var currentNode = this.tail

				for (var counter = this.length - 1 ; counter > index; counter--) {
					currentNode = currentNode.prev
				}
				return currentNode
			}
		}


		// set - takes index and val and update the node at the index with the value 
		set (index, val) {
			// get the node at the index and save into result

			var result = get(index)

			if (result) {
				result.val = val;
				return true;

			} else {
				return false
			}

			// update val of result with val, return true

			// return false

		}


	}
}

