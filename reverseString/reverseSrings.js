// Reverse a String With Built-In Functions

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


// Reverse a string with a decrementing loop

function loopReverse(str) { 
    var newStr = "";

    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i]; 
    } 
  // code goes here  
  return newStr; 
         
}
loopReverse("What up!");


// Reverse a string with recursion

function recursionReverse(str) { 

    if(str === ""){
        return "";
    }
    else {
        return recursionReverse(str.substr(1)) + str.charAt(0);
    }
         
}
  
recursionReverse("Whats Up!");   


// Reverse Conditional (Ternary) Operator

function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
