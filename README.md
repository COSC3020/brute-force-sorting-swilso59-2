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

In our permutationSort function we have two main steps generating all the permutations and checking if the permutation is sorted. 
1. generatePermutations: We know that there are $n!$ possible permutations for an array of size $n$. The function uses recursions to swap the elements and generate each permrutation. Since every possible permutation is generated the number of recursive calls the reach the base case is $n!$. Each time a permutation is created we add it to the results which is linear and does not change the dominant $n!$ complexity.
2. isSorted: This function checks each element of the permutation to determine if the array is in ascending order. For each permutation, isSorted has to go through $n$ elements.

This leaves us with the overall time complexity of $O(n*n!)$. 

The best case input for this implementation would be if the array was already sorted. This would cause the function to terminate once the sorted array is discovered based of the first permutation of the array that is checked. However the time complexity would not be effect because the getPermutation finds all the permutations prior to checking them if they are sorted.  

The worst case input for this implementation would be if the array was in decending order. This would cause the the would cause the sorted permutation to be the last one generated and checked. This would still not effect the overall time complexity.

If we genereated permutations randomly and didn't use memory to store all the permutations. We would need to check if each current permutation is sorted, This means that if we randomly genereated the sorted permutation on the first try we would terminate the permutationSort. This would give use a best case time complexity of $O(n)$. The worst case time complexity would be expected to be $O(n*n!)$, Although if we were to take random permutations this could lead to a time complexity of $O(\infty)$, if it were to randomly never generate the sorted permutation. 

## Plagiarism Acknowledgement

For this assignment. I used some previous repositories to help complete the assignment and gain a better understanding of the implementation and how the generation of random permutations and no memory would impact the time complexity. 
https://github.com/COSC3020/brute-force-sorting-ross223, https://github.com/COSC3020/brute-force-sorting-swilso59-1

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
