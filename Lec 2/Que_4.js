function reverseString(s) {
    return s.split('').reverse().join('');
}

let str = 'hello';
let reversedStr = reverseString(str);
console.log(reversedStr); 
