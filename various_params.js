/**
 * for given string tell me whether it has even number of characters or not
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str,size);
    if(size % 2 === 0){
        console.log('Even');
        return true;
    }
    else{
        console.log('Odd');
        return false;
    }
}
evenSizedString('Dhaka')
evenSizedString('Faka')

// function doubleOrTriple(number, doubled){
//     if(doubled === true){
//         const result = number * 2;
//         return result;
//     }
//     else{
//         const result = number * 3;
//         return result;
//     }
// }
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false))

// function numberOfElements(numbers){
//     const len = numbers.length;
//     return len;
// }
// const know = numberOfElements([12, 45, 78, 45, 122433,54]);
// console.log(know)

// function getAge(person){
//     const age = person.age;
//     return age;
// } 
// let know = {age: 23};
// let total = getAge(know);
// console.log(total)
function getMenu() {
    console.log("Burger, Pizza, Pasta");
   }