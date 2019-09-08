// tree is a new type of data structure

// data structure that consists fo ndoes in a parent/child relationship

// lists are linear but trees are non linear eg tree has multiple paths

// singly linked list is like a linear version of a tree

// but a tree must only have parent child relationships for nodes. child nodes cannot point to parent nodes or ndoes at the parent level, that is not a tree it is a graph

// tree only have 1 root

// applicaitons for trees
	// HTML this is a tree
	// 


// binary search trees

// excel at searching and retrieval of data

// rules about BST
// each node only has 2 children at most, you can also only have 1
// sorted - left side is smaller than the parent, right is bigger


class BinarySearchTree {
	constructor () {
		this.root = null;
	}

	insert(val) {
		var newNode = new Node (val)

		var continue = true

		if (!this.root) {
			this.root = node;
			return
		} else {
			var current = this.root

			while (continue) {
				if (val < current.value) {
					if (!current.left) {
						current.left = newNode
						continue = false;
					} else {
						current = this.root.left
					}
				} else if (val > current.value) {
					if (!current.value) {
						current.right = newNode
						continue = false;
					} else {
						current = this.root.right
					}	
				} else {
					return undefined // for duplicated insertions
				}
			}
		}
		return this;
	}

	find(val) {
		// if the value is at the root return the root

		// else make currentNode the root

		// if val is the root then return the root

		// if val is less than the root

		// 		then change the currentNode to root.left

		// 		if there is no root left then return null

		// 		repeat the cycle

		// repeate the cycle for the right

		var current = this.root;

		var found = false

		while (!found && current) {
			if (!current.value) {
				// found = true;
				return null;
			} 

			if (val === current.value) {
				found = true;
				return current;
			}

			if (val < current.value) {
				current = current.left
			}

			if (val > current.value) {
				current = current.right
			}
		}

		return false;
	}
}


class Node {
	constructor (val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

var tree = new BinarySearchTree()

tree.root = new Node (10)
tree.root.left = new Node (7)
tree.root.right = new Node (14)

tree.root.right.left = new Node (1)


// insert

// take a value 

// create a new node with the value

// start at the root 

// if no root then set the root as newNode

// is the value of the newNode lesser than the value, then check if there is a value to the left of the root,

// if no, then insert

// if so, repeat

// repeat for right side


