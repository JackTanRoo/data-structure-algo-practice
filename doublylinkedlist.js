// same as singly linked list
// except every node has a operation to point to previous node
// more flexibility
// but more memory


// Big o of Doubly Linked list
// Insertion - O(1) - 

// Removal - O(1) - not ON like singly linked list; but note that removal is a single operation and does not include searching

// Searching - ON - just like Singly Linked List, but it is ON/2

// Access - ON

// Almost identical to singly linked list but there is additional pointer so takes more memory but more flexibility



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

		// insert - takes an index and val, adds a new node at that index and val

			// if index < 0 or longer than length, then return false

			// if index is 0, unshift

			// if index is same as length, push

			// get node at current index -1, set to prevNode

			// get ndoe at index, set to nextNode

			// create newNode

			// update next of prevNode to newNode, update prev of newNode to prevNode

			// update prev of nextNode to newNodem update next of newNode to nextNode

			// increment length by 1

			// return list

		insert (index, val) {
			if (index < 0 || index > this.length) {
				return false
			}

			if (index === 0 ) {
				this.unshift(val)
			}

			if (index === this.length) { // you can still add at the end of the list
				this.push(val)
			}

			else {
				var prevNode = this.get(index-1)
				var nextNode = prevNode.next;

				var newNode = new Node(val);

				prevNode.next = newNode, newNode.prev = prevNode

				nextNode.prev = newNode, newNode.next = nextNode
				
				this.length++
			}

			return true
		}

		// remove = remove item at index

		// if index is below 0 or greater or equal to length, return undefined

		// if index is 0, unshift

		// if index is length - 1, pop

		// else

			// find currentNode at index

			// find prevNode at index-1

			// find nextNode at index + 1

			// update prev and next values

			// decrement length by 1

			// return currentNode

		remove(index) {

			if (index < 0 || index >= this.length) {
				return undefined
			}

			if (index === 0) {
				return !!shift()
			}

			if (index === this.length-1) {
				return !!pop()
			}

			var removeNode = this.get(index);
			var prevNode = removeNode.prev;
			var nextNode = removeNode.next;

			prevNode.next = nextNode, nextNode.prev = prevNode;
			removeNode.prev = null, removeNode.next = null;

			this.length--;

			return removeNode;
		}

	}
}

