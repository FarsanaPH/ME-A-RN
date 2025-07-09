// display()

// function display(){
//     console.log(`Inside display function`);   
//     sum = 0
//     sum = 30 + 20
//     console.log(sum);

// }

// function display(arg1, arg2) {
//     console.log(`Inside display function`);
//     sum = 0

//     return sum = arg1 + arg2
//     console.log(`end of function`);

// }

// console.log(display(20, 30));
// console.log(`---------------------------------------------`);
// // w.a.p to find the cube of a given number using function.
function cube(num) {
    return num ** 3
}
console.log(cube(3));
// console.log(`---------------------------------------------`);

// // w.a.p to find a given number is odd or even.

// // function oddEven(num) {
// //     if (num % 2 == 0) {
// //         console.log(`${num} is even number`);

// //     } else {
// //         console.log(`${num} is odd number`);
// //     }

// //     // return num%2 == 0 ? `${num} is even number` : `${num} is odd number`
// // }
// // console.log(oddEven(5));
// // oddEven(5)

// const oddEven = (num) => num % 2 == 0 ? `even` : `Odd`

// console.log(oddEven(7));


// //w.a.p to find the given number is positive or negative using function.

const demo = (num)=> num<0 ? `Negative` : num==0 ? `Positive nor Negative` : `Positive`


console.log(demo(-10));
