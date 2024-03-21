// 1. **Valid Palindrome:**
//    Check if a given string is a valid palindrome.
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true 

let str="A man, a plan, a canal: Panama";
function palindrome(str){
    let reg=/[^a-z0-9]/g;
    let m=str.toLowerCase()
    let k=m.replace(reg,"");
    let k1=k.split("").reverse().join("");
    if(k===k1){
        return true;
    }
    else{
        return false;
    }
    // return k1;
}
// console.log(palindrome(str)); 


// 2. **Word Abbreviation:**
//    Abbreviate each word in a given sentence to its first character followed by the count of characters omitted.
// console.log(wordAbbreviation("Internationalization is too long to write.")); 
   // Output: "I18n is t2o l2g to w3e." 

// let stri="Internationalization is too long to write. is";
// let k=[]
// let A=stri.split(" ");
// for (let i of A){
//     if(i.length<2){
//         k.push(i);
//     }
//     else{
//         let p=i.charAt(0)+((i.length)-2)+i.slice(-1);
//         k.push(p);
//     }
// }
// let z=k.join(" ")
// console.log(z);


// **String Rotation:**
//    Check if one string is a rotation of another string
// console.log(isRotation("waterbottle", "erbottlewat")); // Output: true
// let str1="waterbottle";
// let str2="erbottlewat";

// function check(str1,str2){
//     if(str1.length!=str2.length){
//         return false;
//     }
//     else if((str1+str2).includes(str2)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(check(str1,str2));  

function isValidParentheses(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of s) {
        if (pairs[char]) {
            stack.push(char); // Push opening brackets onto the stack
        } else {
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false; // If stack is empty or the corresponding opening bracket doesn't match, return false
            }
        }
    }

    return stack.length === 0; // Return true if the stack is empty
}

console.log(isValidParentheses("()[]{}")); // Output: true
