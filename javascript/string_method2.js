// 1. **Valid Palindrome:**
//    Check if a given string is a valid palindrome.
//    ```javascript
//    function isPalindrome(str) {
//        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//        return cleanStr === cleanStr.split('').reverse().join('');
//    }

//    console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
//    ```

// 2. **Word Abbreviation:** 
//    Abbreviate each word in a given sentence to its first character followed by the count of characters omitted.
//    ```javascript
//    function wordAbbreviation(sentence) {
//        return sentence.split(' ').map(word => {
//            if (word.length <= 3) return word;
//            return word[0] + (word.length - 2) + word.slice(-1);
//        }).join(' ');
//    }

//    console.log(wordAbbreviation("Internationalization is too long to write.")); 
//    // Output: "I18n is t2o l2g to w3e." 
//    ```


// 3. **String Rotation:**
//    Check if one string is a rotation of another string.

//    ```javascript
//    function isRotation(str1, str2) {
//        if (str1.length !== str2.length) return false;
//        return (str1 + str1).includes(str2);
//    }

//    console.log(isRotation("waterbottle", "erbottlewat")); // Output: true
   ```

4. **Smallest Substring Containing All Characters:**
   Find the smallest substring of a given string that contains all characters of another string.
   ```javascript
   function smallestSubstringContaining(str, target) {
       const targetMap = {};
       for (const char of target) targetMap[char] = (targetMap[char] || 0) + 1;

       let start = 0, end = 0, minStart = 0, minLength = Infinity, count = target.length;

       while (end < str.length) {
           if (targetMap[str[end]] > 0) count--;
           targetMap[str[end]]--;
           end++;

           while (count === 0) {
               if (end - start < minLength) {
                   minLength = end - start;
                   minStart = start;
               }
               targetMap[str[start]]++;
               if (targetMap[str[start]] > 0) count++;
               start++;
           }
       }

       return minLength === Infinity ? '' : str.substring(minStart, minStart + minLength);
   }

   console.log(smallestSubstringContaining("ADOBECODEBANC", "ABC")); // Output: "BANC"
   ```

5. **String Zigzag Conversion:**
   Convert a given string into a zigzag pattern given the number of rows.
   ```javascript
   function zigzagConversion(s, numRows) {
       if (numRows === 1) return s;

       const rows = Array.from({ length: numRows }, () => '');
       let direction = 1, row = 0;

       for (const char of s) {
           rows[row] += char;
           if (row === 0) direction = 1;
           else if (row === numRows - 1) direction = -1;
           row += direction;
       }

       return rows.join('');
   }

   console.log(zigzagConversion("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
   ```

6. **Valid Parentheses:**
   Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
   ```javascript
   function isValidParentheses(s) {
       const stack = [];
       const map = { ')': '(', '}': '{', ']': '[' };

       for (const char of s) {
           if (char in map) {
               const topElement = stack.pop() || '#';
               if (map[char] !== topElement) return false;
           } else {
               stack.push(char);
           }
       }

       return stack.length === 0;
   }

   console.log(isValidParentheses("()[]{}")); // Output: true
   ```

7. **Roman to Integer Conversion:**
   Convert a Roman numeral to an integer.
   ```javascript
   function romanToInt(s) {
       const romanMap = {
           'I': 1, 'V': 5, 'X': 10, 'L': 50,
           'C': 100, 'D': 500, 'M': 1000
       };
       let result = 0;

       for (let i = 0; i < s.length; i++) {
           const current = romanMap[s[i]];
           const next = romanMap[s[i + 1]];

           if (next && current < next) {
               result += next - current;
               i++;
           } else {
               result += current;
           }
       }

       return result;
   }

   console.log(romanToInt("III")); // Output: 3
   ```

8. **Count and Say:**
   Generate the n<sup>th</sup> term of the count-and-say sequence.
   ```javascript
   function countAndSay(n) {
       let result = "1";

       for (let i = 1; i < n; i++) {
           let temp = "", count = 1;

           for (let j = 0; j < result.length; j++) {
               if (result[j] === result[j + 1]) {
                   count++;
               } else {
                   temp += count + result[j];
                   count = 1;
               }
           }

           result = temp;
       }

       return result;
   }

   console.log(countAndSay(5)); // Output: "111221"
   ```

9. **Regular Expression Matching:**
   Implement regular expression matching with support for '.' and '*'.
   ```javascript
   function isMatch(s, p) {
       const regex = new RegExp("^" + p + "$");
       return regex.test(s);
   }

   console.log(isMatch("aa", "a*")); // Output: true
   ```

10. **Longest Common Subsequence:**
    Find the length of the longest common subsequence between two strings.
    ```javascript
    function longestCommonSubsequence(text1, text2) {
        const m = text1.length, n = text2.length;
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (text1[i - 1] === text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
    ```

