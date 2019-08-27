// same as singly linked list
// except every node has a operation to point to previous node
// more flexibility
// but more memory


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
}