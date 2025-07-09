a = [12, 41, 6, 5, 22]

// w.a.p to print all even numbers from the given array
even = a.filter((num)=>num%2==0)
console.log(`even numbers are ${even}`);
console.log(even);

// w.a.p to print all odd numbers from the given array
odd = a.filter((num)=>num%2!=0)
console.log(`Odd numbers are ${odd}`);

console.log(`----------------------------------------`);
// is there any even numbers are present in the given array.
even = a.some((num)=>num%2==0)
console.log(even);
console.log(`----------------------------------------`);
even = a.find((num)=>num%2==0)
console.log(even);
