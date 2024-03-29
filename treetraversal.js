// BFS - visit all the parents at same level before going to the child


// create a queue 

// and also create a a variable to store the values of the nodes visited

// place the root node in the queue

// loop as long as there something in the queue

// dequeue a node and push the value of the node into the array that stores the nodes

// if there is a left property on the node dequeued - add it to the queue

// if there is a right property on the node dequeued - add it to the 


// DFS - goes down to the lowest level before going to the sibling nodes

// PreOrder - visit the node first, before going to the left child



// WHY BFS OVER DFS??

// if you have a big and wide tree - BFS has higher space complexity because you are storing a queue

// DFS - you only need to take up a left most branch, call stack is recursive and hence only need 1 operation stored

// Time Complexity is same as BFS and DFS

// When to Pre, Post and Inorder for DFS

// In Order - for Binary Search Tree sorted - then it is in ascending order.

// Pre Order - for sorted BST  -then it is good for duplicating or flattening out the tree


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    BFStraverse() {
    	var visited = [];
    	var queue = [];
    	var node;

    	queue.push(this.root)

    	if (queue.length === 0) {
    		return visited;
    	}

    	while(queue.length > 0){
    		node = queue.shift()
    		visited.push(node.value);
    		if (node.left) { queue.push(node.left) };
    		if (node.right) { queue.push(node.right) };
    	}
    }

    DFSPreOrder(){
    	// visit the node first, the visit the left, then right
    	// create a variable to store the values of nodes visited
    	// store teh root of the BST in a node called current

    	// Write a helper function called current
    	// 	push the value of the node to the variable that stores the values
    	// 	if the node has a left property call the helper function with the left property on the node
    	// 	if the node has a right property call the helper function with the right property on the node

    	// invoke the helper function on the current variable

    	// return the array of values

    	var data = [];

    
	    function traverse(node) {
	    	// if (!node.left && !node.right) {
	    	// 	return data;
	    	// } because this ends the tree early

	    	data.push(node.value)
	    	if (node.left) { traverse(node.left) };
	    	if (node.right) { traverse(node.right) };
	    }

    	traverse(this.root);
    	return data

    }

    DFSPostOrder(){

    	// go all the way to the left first, then right visit both, then visit the parent
    	// 
    	// create a variable to store the values of nodes visited
    	// store teh root of the BST in a node called current

    	// Write a helper function called current
    	// 	if the node has a left property call the helper function with the left property on the node
    	// 	if the node has a right property call the helper function with the right property on the node
    	// 	push the value of the node to the variable that stores the values

    	// invoke the helper function on the current variable

    	// return the array of values

    	var data = [];

    
	    function traverse(node) {
	    	// if (!node.left && !node.right) {
	    	// 	return data;
	    	// } because this ends the tree early

	    	if (node.left) { traverse(node.left) };
	    	if (node.right) { traverse(node.right) };
	    	data.push(node.value)

	    }

    	traverse(this.root);
    	return data

    }

    DFSInOrder(){

    	// go all the way to the left first, visit the node, then visit the right side
    	// 
    	// create a variable to store the values of nodes visited
    	// store teh root of the BST in a node called current

    	// Write a helper function called current
    	// 	if the node has a left property call the helper function with the left property on the node
    	// 	if the node has a right property call the helper function with the right property on the node
    	// 	push the value of the node to the variable that stores the values

    	// invoke the helper function on the current variable

    	// return the array of values

    	var data = [];

    
	    function traverse(node) {
	    	// if (!node.left && !node.right) {
	    	// 	return data;
	    	// } because this ends the tree early

	    	if (node.left) { traverse(node.left) };
	    	data.push(node.value)

	    	if (node.right) { traverse(node.right) };

	    }

    	traverse(this.root);
    	return data

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

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log("DFS", tree.DFSPostOrder())