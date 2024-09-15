// Reverse a String
// Instruction: Write a recursive function to reverse a given string.
// Sample Input and Output:
// Input: "hello"
// Output: "olleh"

const reverseString = (str) => {
    if (str === "") {
      return "";
    } else {
      return reverseString(str.slice(1)) + str[0];
    }
  }
  
  console.log(reverseString("hello"));
  