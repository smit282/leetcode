var fruits = ["apple", "mango", "watermelon", "orange"];
var fruits_len = fruits.map((ele) => ele.length);
console.log(fruits_len);



function lengthOfLastWord(s) {
    s = s.trim();
    const words = s.split(" ");
    const lastWord = words[words.length - 1];
    return lastWord.length;
}
const s = "skill qode";
const output = lengthOfLastWord(s);
console.log(output);



function sum(...args) {
    let sum = 0;
    for(let arg of args) 
    sum += arg;
return sum;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(sum(4, 9, 16, 25, 29, 100, 66, 77));