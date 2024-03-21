// let s="I am Sejal ";
// length
// let l=s.length
// let u=s.toUpperCase()
// let a=s.toLowerCase()

// let b=s.trim()
// let c=s.slice(2,5)
// let d=s.charCodeAt(0);
// let e=s.indexOf("am")

// let f=s.padStart(15,"/");
// let g=s.padEnd(15,"/");
// let h=s.concat("girl");
// let j=s.split(" ")

// let k=s.includes("Sejal");
// let i=s.replace("Sejal",'girl');
// let l=s.startsWith("I")
// let m=s.endsWith(" ");
// console.log(m);


// 1. **Longest Substring Without Repeating Characters:**
//    This problem requires finding the length of the longest substring without repeating characters in a given string.
let s='abcabc';
function longest(s){
    let a=s.split("");
    let s1=new Set(a);
    let A=[...s1]
    return A.length
}
console.log(longest(s));


// 2. **String Compression:**
//    This problem involves compressing a string by replacing consecutive repeating characters with their count.

let s1='aabcccccaaa';
function consecutive(s1){
    let A=s1.split("");
    let a=[]
    let c=1;
    for (let i=0;i<A.length;i++){
        if(A[i]==A[i+1]){
            c=c+1 
        }
        else{
            a.push(A[i]);
            a.push(c);
            c=1
        }
    }
    let k=a.join("")
    return k;
}
console.log(consecutive(s1));


// function groupAnagrams(strs) {
//     const anagrams = {};

//     for (const str of strs) {
//         const sortedStr = str.split('').sort().join('');
//         if (!anagrams[sortedStr]) {
//             anagrams[sortedStr] = [];
//         }
//         anagrams[sortedStr].push(str);
//     }

//     return Object.values(anagrams);
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]


let A=["eat", "tea", "tan", "ate", "nat", "bat"]

function anagram(A){
    let obj={}
    for (let i of A){
        let k=i.split("").sort().join("")
        if(!obj[k]){
            obj[k]=[];
        }
        obj[k].push(i);
    }
    return Object.values(obj);
}
console.log(anagram(A));

const strings = ["apple", "banana", "cat", "dog", "elephant", "fish", "grape"];
function len(string){
    let obj={}
    for(let i of string){
        let k=i.length;
        if(!obj[k]){
            obj[k]=[]
        }
        obj[k].push(i);
    }
    return obj;
}
console.log(len(strings));


// let a=12;
// function sample(a){
//     function greed(a){
//         return a;
//     }
//     let k=greed(a);
//     return k;
// }
// console.log(sample(a));


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
