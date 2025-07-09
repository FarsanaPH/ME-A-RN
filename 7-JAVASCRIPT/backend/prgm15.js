// w.a.p to print the second largest number among three given numbers ans arrange them in descending order.
num1 = 1200
num2 = 150
num3 = 100

//  o/p second largest number is 120
// 150 > 120 > 100

if(num1 > num2 && num1 > num3 ){
    if(num2 > num3){
        console.log(`second largest is ${num2}`); 
        console.log(`Decending order is ${num1}> ${num2} > ${num3}`);
         
    }else{
        console.log(`second largest is ${num3}`);  
        console.log(`Decending order is ${num1}> ${num3} > ${num2}`);
    }
}else if(num2> num3 && num2> num1){
    if(num1>num3){
        console.log(`second largest is ${num1}`); 
        console.log(`Decending order is ${num2}> ${num1} > ${num3}`);
    }else{
        console.log(`second largest is ${num3}`); 
        console.log(`Decending order is ${num2}> ${num3} > ${num1}`);
    }
}else if(num3>num1 && num3 > num2){
    if(num1>num2){
        console.log(`second largest is ${num1}`); 
        console.log(`Decending order is ${num3}> ${num1} > ${num2}`);
    }else{
        console.log(`second largest is ${num2}`); 
        console.log(`Decending order is ${num3}> ${num2} > ${num1}`);
    }
}else{
    console.log(`Numbers are equal`);
    
}
    