//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log(`All product name`);
products.forEach((item)=>console.log(item[1]))
console.log(`---------------------------------------------`);

//2. display product whose price < Rs.50
console.log(`product whose price < Rs.50`);
products.filter((item)=>item[2]<50).forEach((pro)=>console.log(pro[1]))
console.log(`---------------------------------------------`);

//3. print price of oreo
console.log(`Price of oero is`, products.find((item)=>item[1]==`oreo`)[2])
console.log(`---------------------------------------------`);

//4. print costly product name
console.log(`costly product name`);
costlyPro = products.reduce((pro1, pro2)=>pro1[2]>pro2[2]? pro1 : pro2)
console.log(costlyPro[1]);
console.log(`---------------------------------------------`);

//5. display out of stock product
console.log(`out of stock product`);
products.filter((item)=>item[3]==0).forEach((item)=>console.log(item))
console.log(`---------------------------------------------`);

//6. sort products based on stock in decsending order
console.log(`products based on stock in decsending order`);
desc = products.sort((item1, item2)=>item2[3] - item1[3])
console.log(desc);
console.log(`---------------------------------------------`);

//7. print product having maximum available stock
console.log(`product having maximum available stock`);
console.log(`---------------------------------------------`);

//8. is there any product can be purchased by Rs. 10
console.log(`All product name`);
console.log(`---------------------------------------------`);

//9. Is there any product in the range of 10 to 30
console.log(`All product name`);
console.log(`---------------------------------------------`);

//10. print all products in the range of 10 to 30
console.log(`All product name`);
console.log(`---------------------------------------------`);