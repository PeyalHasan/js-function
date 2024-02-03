//1 st task

function multiply(a, b, c, d){
   const multi= a * b * c * d;
    return multi;
}

// let total= multiply(4, 5, 3, 2);
// console.log(total)

//Task-2

function numbers(number){
        if(number % 2 !== 0){
            number = number * 2;
            return number ;
        }
        else{
            number = number / 2;
            return number ;
        }
}
// const num =  numbers(40);
// console.log(num)

// Task-3

function make_avg(arr, size){
    let sum = 0;
    let avg = 0;
    for(let item of arr){
        sum = sum + item;
        avg = sum / arrSize;
        
    }
    return avg;
}
// let element = [12, 11, 23, 43, 54];
// let arrSize = element.length
// const avg = make_avg(element, arrSize);
// console.log(avg)

// Task - 4

function count_zero(count){
    let counts = 0;
    for(let i = 0 ; i < count.length; i++){
        if(count[i] === '0'){
            counts++
        }
    }
    return counts 
}
const binary = '10011100010';
const data = count_zero(binary);
console.log(data)

//Task - 5

function odd_even(numbers){
    if(numbers % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

// const value = "30";
// const input = odd_even(value);
// console.log(input);