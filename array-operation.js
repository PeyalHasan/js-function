/***
 * Objective: write a function to give me the sum of all numbers in an array.
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter
 * step-4: pass the parameter, check whether parameter is passed in a proper format.
 * 
 */

function sumOfNumbers(numbers){
    let sum = 0;
    for(const numb of numbers){
        sum = sum + numb;
        
    }
    return sum;
}

const nums = [12, 34, 4, 54, 654, 6]
let sum = sumOfNumbers(nums);
console.log('sum of numbers is', sum);