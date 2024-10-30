function permutationSort(a) {
    // Generate all permutations of the input array
    let permutations = generatePerms(a);
    // Initialize a counter to track the number of permutations tested
    let count = 0;
    
    // Loop through each permutation
    for (let i = 0; i < permutations.length; i++) {
        count++;
        
        // Check if the current permutation is sorted
        if (isSorted(permutations[i])) {
            // If sorted, copy elements from the sorted permutation back into the original array
            for (let j = 0; j < a.length; j++) {
                a[j] = permutations[i][j];
            }
            // Return the count of permutations checked until the sorted one was found
            return count;
        }
    }
    // Return 0 if somehow no sorted permutation is found
    return 0;
}

function generatePerms(a) {
    let results = [];

    // Recursive helper function to generate permutations
    function permute(index) {
        // Base case: if we've reached the end of array, store the current permutation in results
        if (index === a.length) {
            results.push([...a]);
            return;
        }

        // Loop to swap each element with the current index
        for (let i = index; i < a.length; i++) {
            [a[index], a[i]] = [a[i], a[index]]; 
            permute(index + 1);                  
            [a[index], a[i]] = [a[i], a[index]]; 
        }
    }

    // Start the recursive generation from the start of the array
    permute(0);
    return results; // Return all generated permutations
}


// Function to check if an array is sorted in ascending order
function isSorted(a) {
    // Loop through the array starting from the second element
    for (let i = 1; i < a.length; i++) {
        // If any element is greater than the next one, return false
        if (a[i - 1] > a[i]) {
            return false;
        }
    }
    // If all elements are in ascending order, return true
    return true;
}
