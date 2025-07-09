// w.a.p to print numbers from 1 - 5

for (i = 1; i <= 5; i++) {
    console.log(i);
}
console.log(`---------------------------`);

// w.a.p to find the factorial of a given number using for loop.
num = 4
fact = 1
for (i = 1; i <= num; i++) {
    fact = fact * i
}
console.log(fact);
console.log(`---------------------------`);

// w.a.p that have ability to itterate upto 10 but print only upto 5
for (i = 1; i <= 10; i++) {
    // if (i < 6) {
    //     console.log(i);
    // }
    console.log(i);
    if(i>=5){
        break
    }
}

// HW
// 1. w.a.p to print a given number is prime or not.
// 2. w.a.p to find GCD/HCF of two given numbers.
// 3. w.a.p to display all the prime numbers between 2 to 50.
// 4. w.a.p to display all the amrstrong number between 8 to 500.