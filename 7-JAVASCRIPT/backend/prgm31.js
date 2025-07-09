a = [1, 2, 3, 4, 5]

for(num of a){
    console.log(num);   
}

console.log(`-----------------`);
a.forEach((num)=>console.log(num))

// w.a.p to find square of all the elements in the given array.
console.log(`---------forEach--------`);

a.forEach((num)=>console.log(num**2))
console.log(`---------map--------`);

sq = a.map((num)=>num**2)
console.log(sq);

console.log(`-----------------`);

// w.a.p to create a new array with number <=3 then increment by 1 else decrement by 1
// a = [1, 2, 3, 4, 5]    o = [2, 3, 4, 3, 4]
o = a.map((item)=>item<=3? item+1 : item-1)
console.log(o);

