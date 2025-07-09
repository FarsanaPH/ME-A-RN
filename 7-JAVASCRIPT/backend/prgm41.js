//[id, name, designation, location, salary, experience]

// employee =[ 1000,'Neel','developer','kochi',25000,3]

const employee = {
    empId : 1000,
    empName : "Graceson",
    empDesgn : "Developer",
}
console.log(employee);
console.log(employee["empName"]);
console.log(employee.empDesgn);

for(item in employee){
    // console.log(item);
    console.log(employee[item]); 
}
console.log(`--------------------------`);

employee["empLoc"] = "kochi"
console.log(employee);

console.log(`--------------------------`);

Object.assign(employee, {empSal : 25000})
console.log(employee);
console.log(`--------------------------`);

// w.a.p to check whether employee experience (empExp) is present in the given object or not. 
// if present print "Key is available" else add a new key value pairs as empExp : 3

isPresent = false
for(emp in employee){
    // console.log(emp);
    if( emp == "empExp"){
        isPresent = true
    } 
}
isPresent? console.log(`Key is Available`) : (employee["empExp"] = 3), console.log(employee);

console.log(`-----------------------------`);
"empExp" in employee ? console.log(`Key is Available`) : (employee["empExp"] = 3), console.log(employee);;

console.log(`-------------------------`);
employee["empExp"] +=2
console.log(employee);

employee["empName"] = "Rishi"
console.log(employee);

console.log(`--------------------`);

delete employee.empExp
console.log(employee);

car = {
    name : "Baleno",
    model : "Hatch Back",
    manufacturer : "Maruthi",
    price : "10Lakhs"
}

// display car name and manufacturer name
// check whether "model" key is present  or not, if present display the value.
// add "varient" key to the car object with value as "Manuel".
// update a new value "automatic" to the car varient.
// create a new key "color" and value as "red", "blue", "green"

text = "hai hello all hello world all"
// w.a p to get the word count from the given text
// o/p ={hai:1, hello:2, all:2, word:1}

numArray = [10,20,30,20,40,50,50,60,10]
// w.a.p to find the count count

pattern = ABCBAA
//find the first recursive letter -> B


