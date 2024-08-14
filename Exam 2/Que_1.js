// Given a paragraph of words, capitalize the first character of each word and return the updated paragraph.

// Sample Input
// `the quick Brown fox jumps over The lazy dog.`

// Sample Output 
// `The Quick Brown Fox Jumps Over The Lazy Dog.`






const  capitalFirstLetterOfWord =(paragraph)=> {
    let result = '';
    let capitalNext = true;

    for (let i = 0; i < paragraph.length; i++) {
        let char = paragraph[i];

        if (char === ' ') {
            result += char;
            capitalNext = true;
        } else {
            if (capitalNext && char >= 'a' && char <= 'z') {
                result += String.fromCharCode(char.charCodeAt(0) - 32);
            } else if (!capitalNext && char >= 'A' && char <= 'Z') {
                result += String.fromCharCode(char.charCodeAt(0) + 32);
            } else {
                result += char;
            }
            capitalNext = false;
        }
    }

    return result;
}

const input = 'the quick Brown fox jumps over The lazy dog.';
const output = capitalFirstLetterOfWord(input);
console.log(output);


