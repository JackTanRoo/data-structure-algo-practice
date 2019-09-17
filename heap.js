// heap - max heap, where the parent is always larger than a heap, larger than its 2 children
// no guaratnees between the siblings
// every left and right are filled 
// left is filled out first
// no ordering, so a child for a peer parent can be bigger than a peer sibling of their parent

// vice versa for min heap


// Insert pseudo code

// push balues into the values property

// Bubble Up:
// - create a variable called index which is the length of the property -1
// - create a variable called parentIndex which is the floor of (index - 1) / 2
// - Keep looping as long as the values element at ParentIndex is less than the element at the Child index
// --- Swap the value of the  values element at parent index with the value of the element property at the child index
// --- Set the index to be the parentIndex and start over
// --- swap whenever the parentIndex value is smaller than childIndex
// --- and also stop if there is no parent index


// Extract max
// Remove the max or the root

// Swap the first value in the values property with the last one

// Pop the values property so you can return the value at the end

// Sink down the new root to the correct spot
// - start index at 0
// - compare to children
// ---- find index of left child, make sure it is in bound
// ---- find index of right child, make sure it is in bound
// ---- swap with the largest child
// - the child index of swapped element is now parent index
// - keep looping until either child is larger than the element

// Return old root





class Heap {
	constructor(){
		this.values = [41,39,33,18,27,12];
	}

	insert(val) {
		this.values.push(val)
		return this.bubbleUp ()
	}

	bubbleUp(){
				// console.log(this.values)
		var index = this.values.length-1;
		let child = this.values[index]

		while (true) {
			
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex]

			// swap
			if (parent >= child || parentIndex < 0) {
				break
			}

			this.values[parentIndex] = child;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	remove(){
		// swap first and last value


		if (this.values.length === 0) {
			return undefined;
		}

		if (this.values.length === 1) {
			return this.values.pop()
		}

		var temp = this.values[0]
		this.values[0] = this.values[this.values.length-1];
		this.values[this.values.length-1] = temp;

		var result = this.values.pop();
		let index = 0

		while (true) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;

			let leftChild = this.values[leftChildIndex];
			let rightChild = this.values[rightChildIndex];

			let parent = this.values[index];

			if (parent > leftChild && parent > rightChild) {
				break
			}

			if (!leftChild && !rightChild) {
				break
			}

			if (leftChild > rightChild && parent < leftChild) {
				this.values[index] = leftChild;
				this.values[leftChildIndex] = parent
				index = leftChildIndex;
			}


			if (leftChild < rightChild && parent < rightChild) {
				this.values[index] = rightChild;
				this.values[rightChildIndex] = parent
				index = rightChildIndex;
			}
		}
		return result
	}

}

var newHeap = new Heap()

newHeap.insert(55)
newHeap.insert(45)


console.log(newHeap.values)