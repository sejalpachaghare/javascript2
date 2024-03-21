// function permute(nums) {
//     if (nums.length === 1) return [nums];

//     let permutations = [];

//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i];
//         const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
//         const innerPermutations = permute(remainingNums);

//         for (let j = 0; j < innerPermutations.length; j++) {
//             permutations.push([currentNum].concat(innerPermutations[j]));
//         }
//     }

//     return permutations;
// }

// console.log(permute([1, 33, 5]));
// console.log(permute([1, 3, 5, 7]));
// console.log(permute([2, 4]));


// function gcd_two_numbers(x, y) {
//     // Use Euclidean algorithm to find GCD
//     while (y !== 0) {
//         var temp = y;
//         y = x % y;
//         x = temp;
//     }
//     // x contains the GCD
//     return x;
// }

// function lcm_two_numbers(x, y) {
//     // LCM(x, y) = (x * y) / GCD(x, y)
//     return (x * y) / gcd_two_numbers(x, y);
// }

// // Test cases
// console.log(lcm_two_numbers(12, 13)); // Output: 156
// console.log(lcm_two_numbers(9, 3));   // Output: 9

// Finding the greatest common divisor (GCD) of two numbers
// const gcd = (x, y) => {
//     while (y !== 0) {
//         let temp = y;
//         y = x % y;
//         x = temp;
//     }
//     return x;
// };

// // Function to find the least common multiple (LCM) of an array of numbers
// const findLCM = (arr) => {
//     let lcm = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         let currentNumber = arr[i];
//         let gcdValue = gcd(lcm, currentNumber);
//         lcm = (lcm * currentNumber) / gcdValue;
//     }
//     return lcm;
// };

// // Example array
// const numbers = [12, 15, 18, 24];

// // Finding LCM
// const lcm = findLCM(numbers);
// console.log("LCM:", lcm);



let A=[12,15,18,24];
function gcd(x,y){
    while(y!==0){
        let temp=y;
        y=x%y;
        x=temp;
    }
    return x;
}
function find_lcm(A){
    let lcm=A[0];
    for(let i=1;i<A.length;i++){
        let current_value=A[i];
        let find_gcd=gcd(current_value,lcm)
        lcm=(current_value*lcm)/find_gcd;
    }
    return lcm;
}
function gcd_list(A) {
    let result = A[0];
    for (let i = 1; i < A.length; i++) {
        result = gcd(result, A[i]);
    }
    return result;
}

console.log(find_lcm(A));  
console.log(gcd_list(A));


function longestPalindromicSubstring(s) {
    let maxLength = 1;
    let start = 0;

    // Helper function to expand around center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }

    // Main logic
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // For odd-length palindromes
        expandAroundCenter(i, i + 1); // For even-length palindromes
    }

    return s.substring(start, start + maxLength);
}

console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
