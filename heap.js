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
		this.values = [];
	}

	insert(val) {
		this.values.push(val)
		var index = this.values.length-1;

		var parentIndex = Math.floor((index - 1) / 2);

		var childIndex = this.values[index]
		var parentIndex = this.values[parentIndex]

		var temp

		while (parentIndex >=0 && childIndex > parentIndex) {
			
			// swap
			temp = this.values[parentIndex];
			this.values[parentIndex] = this.values[childIndex];
			this.values[childIndex] = temp;

			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}

		return this.values;
	}

}
