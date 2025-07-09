//1. w.a.p to print the given input corresponding to given output
//input : 2    3    4
//output: 24   369  4936
// 2 - 2*12, 3 - 3*123, 4 - 4*1234 , 5 - 5*12345
// input = 3
// i=1
// str = ""
// while(i<=input){//1<=3 // 2<=3 // 3<=3 //4<=3
//     str = str+i // ""+1 = "1" // "1"+2 = "12" // "12"+3 = "123"
//     i++ // 2 //3 //4
// }
//     console.log(str*input); //  "1"*3 // "12"*3 // "123"*3
// console.log(`------------------------------------------------------------`);

// input = 3
// i=1
// str = ""
// while(i<=input){//1<=3 //2<=3 //3<=3
//     str = str*10+i // 1 // 1*10+2 = 12 // 12*10+3 = 123
//     i++ // 2 //3
// }
//     console.log(str*input); //  

// console.log(`------------------------------------------------------------`);
//      2 - 2+22, 3 - 3+33+333, 4 - 4+44+444+4444

// input = 3
// i = 1
// pro = 0
// sum = 0
// while (i <= input) { // 1// 2 // 3
//     pro = pro * 10 + input //0-  0*10+3  = 3 //3- 3*10+3 = 33 // 33- 33*10+3 = 333
//     sum = sum + pro // 0+3 = 3 // 3+33 = 36 // 36+333 = 369
//     i++
// }
// console.log(sum);
// console.log(`------------------------------------------------------------`);



// 2. w.a.p to display reverse of a given number
// input: 236
// output : 632

// hint: 236/10 = 23.6 236%10 = 6
// remove decimal = math.floor()

// input = 236
// lastDigit = 0
// rev = 0

// while (input > 0) {
//     lastDigit = input % 10 //6 // 23%10 = 3 // 2%10 = 2
//     rev = rev * 10 + lastDigit // 6 // 6*10=60+3 = 63 // 63*10 = 630+2 = 632
//     input = Math.floor(input / 10) // 236/10 = 23.6 = 23 // 23/10 = 2 // 2/10 = .2 = 0
// }
// console.log(rev);






// 3. w.a.p to check the given number is palindrome or not.

// input = 236 //332  //232 // 232
// temp = input
// console.log(temp);

// lastDigit = 0
// rev = 0

// while (input > 0) {
//     lastDigit = input % 10 //6 // 23%10 = 3 // 2%10 = 2
//     rev = rev * 10 + lastDigit // 6 // 6*10=60+3 = 63 // 63*10 = 630+2 = 632
//     input = Math.floor(input / 10) // 236/10 = 23.6 = 23 // 23/10 = 2 // 2/10 = .2 = 0
// }
// // if(rev == temp){
// //     console.log(`palindrome`);
// // }else{
// //     console.log(`Not palindrome`); 
// // }
// console.log(temp==rev? `palindrome` : `Not palindrome`);


// 4. w.a.p to find factorial of given  number.
// factorial - 4! = 1*2*3*4
    // num= 4
    // i=1
    // fact = 1
    // while(i<=num){ // 1<=4?  // 2<=4 //3<=4 4<=4 
    //     fact = fact*i // 1*1=1 // 1*2=2 // 2*3=6 //6*4=24
    //     i++ // 2 // 3 // 4 // 5
    // }
    // console.log(fact);
    
 
// 5. w.a.p to find the given 3digits is armstrong or not
// armstrong - 153 - 1**3 + 5**3 + 3**3 = 153
// not armstrong -  23 - 2**2 + 3**2 = 13
num = 153
temp = num
rem =0
sum = 0
while(num> 0){ // 153>0 // 15>0 // 1>0 0>0
    rem = num%10 // 153%10 = 3 // 15%10 = 5 // 1%10=1
    sum = sum+(rem**3) // 0 +27=27 // 27+125 = 152 // 152+1=153
    num = Math.floor(num/10) // 153/10=15.3 = 15 // 15/10 = 1.5 = 1 // 1/10= .1 = 0
}

console.log(temp == sum? `Armstrong` : `Not Armstrong`);



