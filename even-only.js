function evenOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [4, 5, 3, 45, 67, 22, 67,88];
// const evens = evenOnly(numbers)
// console.log('even numbers are:',evens)

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if( number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumOfEvenNumbers(numbers);
console.log('sum of the even numbers:', sum)
