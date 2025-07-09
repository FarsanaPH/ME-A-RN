class A{
    methoda(){
        console.log(`Inside Method A`);
    }
    methoda(num){
        console.log(`Inside Method A with argument as ${num}`); 
    }
}
const obj  = new A()
// obj.methoda(2)

// rest operactor
class Sum {
    sumOfNumber(...arg){
        // console.log(arg);

        let total = arg.reduce((item1, item2)=> item1+item2)
        console.log(total);
        
        
    }
}
const obj1 = new Sum()
obj1.sumOfNumber(1,2,3,4,5,6)