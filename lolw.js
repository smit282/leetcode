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
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(add(4, 9, 16, 25, 29, 100, 66, 77));



/**
 * @param {number} target * @return {number}
*/var searchInsert = function (nums, target) 
{
    let left = 0;    
    let right = nums.length;
    while (left < right) 
    {        
        const mid = (left + right) >> 1;
        if (nums[mid] >= target) 
        {            
            right = mid;
        } 
        else 
        {            
            left = mid + 1;
        }    
    }
    return left;
};



var merge = function (a, m, b, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
  
    while (i >= 0 && j >= 0) {
        if (a[i] > b[j]) {
            a[k--] = a[i--];
        } 
        
        else {
            a[k--] = b[j--];
        }
    }
  
    while (j >= 0) {
      a[k--] = b[j--];
    }
};
