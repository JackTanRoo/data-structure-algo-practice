// // designate an element as a pivot

// all elements that is smaller than, move to the left of privot

// same as right

// but order on left and right does not matter

// very space efficient, all elements are moved in place, e.g no new array is created

// then recursively do the same thing on the left side

// then recursively do the right side

// pivot helper function:

// also called partition

// ideally should be the median, has some implications for Big 0

// but we can choose first element is the start of the pivot

// pivot pseudo code

// accept 3 arguments = array, start index, end index

// grab the pivot from start of the array

// store the current pivot index in a variable - this will keep track of where the pivot should end up

// as you iterate from start to end

// if the pivot is greater than current element, increment the pivot index variable and then swap the current element with the pivot index

// swap the position of the the pivot with the element at pivot index

// pivot index is basically the number of elements that is smaller than the pivot

// then you swap the pivot and the element at the pivot index