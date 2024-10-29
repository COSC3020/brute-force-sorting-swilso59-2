# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer 

In our permutationSort function we have two main steps. Those are generating all the permutations and checking if the permutation is sorted. 
1. generatePermutations: We know that there are $n!$ possible permutations for an array of size $n$. The function uses recursions to swap the elements to generate each permrutation. Since every possible permutation is generated the number of recursive calls the reach the base case is $n!$. each time a permutation is created we add it to the results which is linear and does not change the dominant $n!$ complexity.
2. isSorted: This function checks each element of the permutation to determine if the array is in ascending order. For each permutation, isSorted has to go through $n$ elements. This however does not effect the time as we are only interested in the dominant term as $n$ increases in size.

 This leaves user with the overall time complexity of $O(n!)$. 
