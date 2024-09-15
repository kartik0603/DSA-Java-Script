// 7. Count Occurrences of a Character
// Instruction: Write a recursive function to count the occurrences of a specific character in a given string.
// Sample Input and Output:
// Input: "hello", 'l'
// Output: 2

const chaOcc= (str,cha)=>{
    if(str.length==0){
        return 0;
    }
    let count=0;
    if(str[0]==cha){
        count++;
    }
    return count+chaOcc(str.slice(1),cha);
}
console.log(chaOcc("hello",'l'));