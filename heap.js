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

}

var newHeap = new Heap()

newHeap.insert(55)

console.log(newHeap.values)