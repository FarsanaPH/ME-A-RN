a = [1, 2, 3, 4, 5]

// highest
highest  = a.reduce((num1, num2)=>num1>num2 ? num1 : num2)
console.log(highest);


// lowest
lowest  = a.reduce((num1, num2)=>num1<num2 ? num1 : num2)
console.log(lowest);

// sum
sum  = a.reduce((num1, num2)=> num1 + num2)
console.log(sum);
