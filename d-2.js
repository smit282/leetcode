// 6+ word count
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);
// console.log(result);


// multiplication
let a = 10; 
let b = 10; 
// let result = a * b; 
// console.log(result); 


// Array Prototype Last
Array.prototype.last = function() {
    if (this.length === 0) {
      return -1;
    } else {
      return this[this.length - 1];
    }
};