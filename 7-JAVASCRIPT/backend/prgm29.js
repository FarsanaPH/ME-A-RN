a = [[2,4],[3,15],[7,9]]

for(item of a){ // [2,4], [3,5], [7,9]
    // console.log(item);
    for( num of item){ // [2,4]
        console.log(num);
    }
}
console.log(`---------------------------`);

// w.a.p to find the highest number
highest = a[0][0]
for(item of a){
    for(num of item){
        if(highest < num){
            highest = num
        }
    }
}
console.log(highest);
console.log(`------------------------`);

// find the lowest number
lowest = a[0][0]
for(item of a){
    for(num of item){
        if(lowest > num){
            lowest = num
        }
    }
}
console.log(lowest);
console.log(`------------------------`);

// find the sum of all number
sum = 0
for(item of a){
    for(num of item){
       sum +=num
    }
}
console.log(sum);