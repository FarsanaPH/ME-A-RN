car = {
    name : "Baleno",
    model : "Hatch Back",
    manufacturer : "Maruthi",
    price : "10Lakhs"
}

// display car name and manufacturer name
console.log(`car name is : ${car.name} and manufacturer name is : ${car.manufacturer}`);
console.log('-----------------------------');

// check whether "model" key is present or not , if present display the value
'model' in car ? console.log(car.model) : console.log('key is not present');
console.log('-----------------------------');

// add "varient" key to the car object with values as "Manuel"
// car["varient"] = ["Manuel"]
// console.log(car);
// console.log('-----------------------------');
car.varient = ["Manuel"]
console.log(car);
// console.log('-----------------------------');

// update a new value "automatic" to the car varient
car["varient"].push("automatic")
console.log(car);
console.log('-----------------------------');

// create a new key "color" and value as "red", "blue", "green"
car.color = ["red", "blue", "green"];
console.log(car);
console.log('-----------------------------');

