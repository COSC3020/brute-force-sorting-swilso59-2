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
1. generatePermutations: We know that there are $n!$ possible permutations for an array of size $n$. The function uses recursions to swap the elements to generate each permrutation. Since every possible permutation is generated the number of recursive calls the reach the base case is $n!$. each time a permutation is created we add it to the results which is linear and does not change the dominant $n!$ complexity.
2. isSorted: This function checks each element of the permutation to determine if the array is in ascending order. For each permutation, isSorted has to go through $n$ elements. This however does not effect the time as we are only interested in the dominant term as $n$ increases in size.

This leaves user with the overall time complexity of $O(n!)$. 

The best case input for this implementation would be if the array was already sorted. This would cause the function to terminate once the sorted array is discovered based of the first permutation of the array that is checked. However the time complexity would not be effect because the getPermutation finds all the permutations prior to checking them if they are sorted.  

The worst case input for this implementation would be if the array was in decending order. This would cause the the would casue the sorted permutation to be the last one generated and checked. This would still not effect the overall time complexity.

If we genereated permutations randomly and didn't use memory to store all the permutations. We would need to check if each current permutation is sorted, This means that if we randomly genereated the sorted permutation on the first try we would terminate the permutationSort. This would give use a best case time complexity of $O(n)$. The worst case would be still be $O(n!)$. 
