expense = [12000, 5000, 28000, 10000]
// 1. Find the least expense - 5000
lowest = expense[0] //12000  
    for(exp of expense){ // 12000 //5000 // 28000 // 10000
        if(lowest>exp){ //12000>12000 // 12000 >5000 // 5000 >28000 //  5000>10000
            lowest=exp //5000
        }
    }
    console.log(lowest);
    
// 2. Find the highest expense - 28000
highest = expense[0] //12000
    for(exp of expense){ // 12000 // 5000 //28000 // 10000
        if(highest<exp){ // 12000<12000 // 12000<5000 // 12000<28000 // 28000<10000
            highest=exp // 28000
        }
    }
    console.log(highest);
// 3. Find the Total expense - 46000
sum = 0
    for(exp of expense){
        sum += exp
    }
    console.log(sum);


// =------------- HW -----------------=
// 1
    arr = [10, 11, 12, 3, 4, 2]
    // w.a.p to find where 2 is present in the array or not.
    searchItem = 2
    isPresent = false
    for( item of arr){ // 10 // 11 // 12
        if(item ==  searchItem){ // 10 == 2 // 11 == 2 // 12== 2
            isPresent = true
        }
    }
    console.log(isPresent ? `${searchItem} is Present` : `${searchItem} is Not Present`);
    
// 2
    a = [4, 5, 6] // 15
    // output :- [11, 10, 9]
    sum = 0 // 15
    o = []
    for(item of a){ // 4 // 5 //6
        sum +=item // 0 = 0+4 = 4 // 4+5=9 //9+6 = 15
    }    
    for (item of a){
        o.push(sum-item) // 15-4 = 11 // 15-5 = 10 // 15-6 = 9
    }
    console.log(o);
    

//3
    //w.a.p to find the duplication item from the given array
    b = [10,20,30,20,30,40,50,60,10] // 10, 20, 30

    duplication = []

    for (i=0; i<=b.length-1; i++){ //10  //20 //
        for(j=i+1; j<=b.length-1; j++){ //20 // 30 //20 //  // 30  // 40
            if(b[i]==b[j]){ // 10 == 20 // 10 == 30 // 10==20 // 10 == 30  // 10==40 //20
                duplication.push(b[i])
            }
        }
    }
    console.log(duplication);

    //w.a.p to find the pair whose sum is 6
    // pair =[2,3,4,5] // [2, 4]
    
//------------------------------------
pp = [10,111,12,201,301] 
qq = [11,20,25,30,33]
// find the duplicates in these 2 array - // [11, 20, 30]

dup = []
for(i of pp){
    for( j of qq){
        if(i == j ){
            dup.push(i)
        }
    }
}
console.log(dup.length==0? `No duplications` : dup);
