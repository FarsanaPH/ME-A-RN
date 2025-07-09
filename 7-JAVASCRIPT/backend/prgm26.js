weekdays = ["Monday", "Tuesday", "Wednesday"]
console.log(weekdays);
console.log(typeof (weekdays));
console.log(weekdays[2]);
console.log(`-------------------------------`);

for (i = 0; i <= weekdays.length - 1; i++) {
    console.log(weekdays[i]);
}
console.log(`-------------------------------`);

for(let i in weekdays){
    // console.log(i);
    console.log(weekdays[i]);  
}

console.log(`-------------------------------`);

for(let i of weekdays){
    console.log(i);
    
}

console.log(`-------------------------------`);
weekdays.push("Thursday")
console.log(weekdays);
console.log(`-------------------------------`);
weekdays.unshift("Sunday")
console.log(weekdays);
console.log(`-------------------------------`);
weekdays.pop()
console.log(weekdays);
console.log(`-------------------------------`);
weekdays.shift()
console.log(weekdays);

// ----------------------------------
