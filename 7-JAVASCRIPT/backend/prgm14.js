// w.a.p to print "FIZZ" when the given number is divisible by 3 &
// "BUZZ" if the given number is divisible by 5 &
// "FIZZBUZZ" if the given number is divisible by 15

num = 15

if(num%15 == 0){
    console.log(`FIZZBUZZ`);
}else if(num%5==0){
    console.log(`BUZZ`);
}else if(num%3==0){
    console.log(`FIZZ`);
}else{
    console.log(`cant divisible by 3, 5, 15`);  
}