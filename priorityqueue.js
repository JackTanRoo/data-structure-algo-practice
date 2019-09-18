// min priority heap
// lowest gets served first

// same code as the max heap
// except change the direction of the comparison

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}



class PriorityQueue {
	constructor(){
		this.values = [
			{
				val: 1,
				priority: 1
			},
			{
				val: 2,
				priority: 2
			},
			{
				val: 3,
				priority: 3
			},
			{
				val: 4,
				priority: 4
			}
		];
	}

	enqueue(val, priority) {
		var node = new Node(val, priority)
		this.values.push(node)
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
			if (parent.priority <= child.priority || parentIndex < 0) {
				break
			}

			this.values[parentIndex] = child;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	sinkDown(){
		let index = 0;
		let length = this.values.length;
		let parent = this.values[index];

		while (true) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;
			let swap = null;

			let leftChild, rightChild;

			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if (parent.priority > leftChild.priority) {
					swap = leftChildIndex
				}
			}


			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];

				if (parent.priority > rightChild.priority && rightChild.priority < leftChild.priority || swap === null && parent.priority > rightChild.priority ) {
					swap = rightChildIndex
				}

			}


			// if (parent > leftChild && parent > rightChild) {
			// 	break
			// }

			// if (!leftChild && !rightChild) {
			// 	break
			// }



			if (swap === null) break

			this.values[index] = this.values[swap];
			this.values[swap] = parent
			index = swap
		}
	}

	dequeue(){
		// swap first and last value


		if (this.values.length === 0) {
			return undefined;
		}

		if (this.values.length === 1) {
			return this.values.pop()
		}

		// swap the first and last elments and return the last element

		var temp = this.values[0]
		this.values[0] = this.values[this.values.length-1];
		this.values[this.values.length-1] = temp;

		var result = this.values.pop();

		this.sinkDown();

		return result

	}

}