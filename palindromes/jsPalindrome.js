function palindrome(str) {
    var re = /[^A-Za-z0–9]/g,
        lowRegStr = str.toLowerCase().replace(re, ''),
        reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

palindrome("A man, a plan, a canal. Panama") //should evaluate to True

