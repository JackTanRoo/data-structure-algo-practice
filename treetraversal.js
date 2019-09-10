// BFS - visit all the parents at same level before going to the child


// create a queue 

// and also create a a variable to store the values of the nodes visited

// place the root node in the queue

// loop as long as there something in the queue

// dequeue a node and push the value of the node into the array that stores the nodes

// if there is a left property on the node dequeued - add it to the queue

// if there is a right property on the node dequeued - add it to the 


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