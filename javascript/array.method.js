// // Certainly! Here are 10 examples showcasing different string manipulation tasks:

// // 1. **Edit Distance:**
// //    Find the minimum number of operations required to convert one string into another, where operations include insertions, deletions, and substitutions.
   
// // 2. **Longest Common Subsequence:**
// //    Find the longest subsequence present in both strings. Subsequence doesn't need to be contiguous, but the order must be maintained.

// // 3. **Regular Expression Matching:**
// //    Implement a function that checks whether a given string matches a given pattern.

// // 4. **String Rotation:**
// //    Check if one string is a rotation of another string. For example, "abcd" is a rotation of "cdab".

// // 5. **String Permutations:**
// //    Generate all permutations of a given string.

// // 6. **Smallest Substring Containing All Characters:**
// //    Find the smallest substring in a string containing all characters of another string.

// // 7. **Longest Palindromic Substring:**
// //    Find the longest substring that is a palindrome in a given string.

// // 8. **String Compression:**
// //    Compress a string by replacing consecutive repeating characters with their count.

// // 9. **Word Break Problem:**
// //    Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of one or more dictionary words.

// // 10. **Anagram Groups:**
// //     Given an array of strings, group the anagrams together.

// // These examples cover a range of string manipulation tasks that are commonly encountered in coding interviews and real-world applications. Each of them pre

// Certainly! Here's the code for each of the mentioned string manipulation tasks:

// 1. **Edit Distance:**
//    ```javascript
//    function editDistance(str1, str2) {
//        const dp = [];
//        for (let i = 0; i <= str1.length; i++) {
//            dp[i] = [i];
//        }
//        for (let j = 0; j <= str2.length; j++) {
//            dp[0][j] = j;
//        }
//        for (let i = 1; i <= str1.length; i++) {
//            for (let j = 1; j <= str2.length; j++) {
//                if (str1[i - 1] === str2[j - 1]) {
//                    dp[i][j] = dp[i - 1][j - 1];
//                } else {
//                    dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
//                }
//            }
//        }
//        return dp[str1.length][str2.length];
//    }
//    ```

// 2. **Longest Common Subsequence:**
//    ```javascript
//    function longestCommonSubsequence(str1, str2) {
//        const dp = [];
//        for (let i = 0; i <= str1.length; i++) {
//            dp[i] = [];
//            for (let j = 0; j <= str2.length; j++) {
//                if (i === 0 || j === 0) {
//                    dp[i][j] = 0;
//                } else if (str1[i - 1] === str2[j - 1]) {
//                    dp[i][j] = dp[i - 1][j - 1] + 1;
//                } else {
//                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//                }
//            }
//        }
//        let i = str1.length;
//        let j = str2.length;
//        const lcs = [];
//        while (i > 0 && j > 0) {
//            if (str1[i - 1] === str2[j - 1]) {
//                lcs.unshift(str1[i - 1]);
//                i--;
//                j--;
//            } else if (dp[i - 1][j] > dp[i][j - 1]) {
//                i--;
//            } else {
//                j--;
//            }
//        }
//        return lcs.join('');
//    }
//    ```

// 3. **Regular Expression Matching:**
//    ```javascript
//    function isMatch(s, p) {
//        const dp = [];
//        for (let i = 0; i <= s.length; i++) {
//            dp[i] = [];
//            for (let j = 0; j <= p.length; j++) {
//                if (j === 0) {
//                    dp[i][j] = i === 0;
//                } else {
//                    if (p[j - 1] === '*') {
//                        dp[i][j] = dp[i][j - 2] || (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j]);
//                    } else {
//                        dp[i][j] = i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === '.') && dp[i - 1][j - 1];
//                    }
//                }
//            }
//        }
//        return dp[s.length][p.length];
//    }
//    ```

// 4. **String Rotation:**
//    ```javascript
//    function isRotation(s1, s2) {
//        return s1.length === s2.length && (s1 + s1).includes(s2);
//    }
//    ```

// 5. **String Permutations:**
//    ```javascript
//    function generatePermutations(str) {
//        const result = [];
//        permute(str.split(''), 0);
//        return result;

//        function permute(arr, index) {
//            if (index === arr.length) {
//                result.push(arr.join(''));
//            } else {
//                for (let i = index; i < arr.length; i++) {
//                    [arr[index], arr[i]] = [arr[i], arr[index]];
//                    permute(arr, index + 1);
//                    [arr[index], arr[i]] = [arr[i], arr[index]];
//                }
//            }
//        }
//    }
//    ```

// 6. **Smallest Substring Containing All Characters:**
//    ```javascript
//    function smallestSubstringContaining(s, t) {
//        const charCount = {};
//        for (const char of t) {
//            charCount[char] = (charCount[char] || 0) + 1;
//        }
//        let start = 0;
//        let minLen = Infinity;
//        let minStart = 0;
//        let remainingChars = t.length;

//        for (let end = 0; end < s.length; end++) {
//            if (charCount[s[end]] > 0) {
//                remainingChars--;
//            }
//            charCount[s[end]] = (charCount[s[end]] || 0) - 1;

//            while (remainingChars === 0) {
//                if (end - start + 1 < minLen) {
//                    minLen = end - start + 1;
//                    minStart = start;
//                }
//                charCount[s[start]]++;
//                if (charCount[s[start]] > 0) {
//                    remainingChars++;
//                }
//                start++;
//            }
//        }
//        return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
//    }
//    ```

// 7. **Longest Palindromic Substring:**
//    ```javascript
//    function longestPalindromicSubstring(s) {
//        let maxLength = 1;
//        let start = 0;

//        function expandAroundCenter(left, right) {
//            while (left >= 0 && right < s.length && s[left] === s[right]) {
//                const currentLength = right - left + 1;
//                if (currentLength > maxLength) {
//                    start = left;
//                    maxLength = currentLength;
//                }
//                left--;
//                right++;
//            }
//        }

//        for (let i = 0; i < s.length; i++) {
//            expandAroundCenter(i, i); // odd length palindrome
//            expandAroundCenter(i, i + 1); // even length palindrome
//        }

//        return s.substring(start, start + maxLength);
//    }
//    ```

// 8. **String Compression:**
//    ```javascript
//    function compressString(s) {
//        let compressed = '';
//        let countConsecutive = 0;

//        for (let i = 0; i < s.length; i++) {
//            countConsecutive++;

//            if (i + 1 >= s.length || s[i] !== s[i + 1]) {
//                compressed += s[i] + countConsecutive;
//                countConsecutive = 0;
//            }
//        }

//        return compressed.length < s.length ? compressed : s;
//    }
//    ```

// 9. **Word Break Problem:**
//    ```javascript
//    function wordBreak(s, wordDict) {
//        const wordSet = new Set(wordDict);
//        const dp = new Array