Recursion

- doing a problem on a smaller piece again and again

Recursion
- a process that calls itself
- until some base case (or end point)


Someone in a movie theater asks you what row you're sitting in. You don't want to count, so you ask the person in front of you what row they are sitting in, knowing that you will respond one greater than their answer. The person in front will ask the person in front of them. This will keep happening until word reaches the front row, and it is easy to respond: "I'm in row 1!" From there, the correct message (incremented by one each row) will eventually make its way back to the person who asked.

Why is this a good explanation?

It gets across three points:

There are some questions that may be inherently recursive and that some questions are easier to solve recursively.
The question I am asking ("what row am I in?") can be rephrased recursively as: "how many people are in front of me + 1?" with a base case of zero people in front of me.
It also illustrates the idea of a recursive call stack and how calls are pushed on then popped off the stack


TWO ESSENTIAL PARTS OF THE RECURSIVE FUNCTION

1) BASE CASE - end case
2) Different input - the recursive call with a different piece of data each setTimeout(function() {}, 

TIPS

1 - always find the "layer" and "core", e.g. for 4 factorial. this is equal to 4 x factorial of 3. 3 factorial = 3 x factorial of 2
2 - therefore the layer is the 4,3,2 which can be peeled off. the core is the factorial function that can be repeated with diff input