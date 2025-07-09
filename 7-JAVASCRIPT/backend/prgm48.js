class Student{
    // property
    // stdId
    // stdName
    // stdAge
    
    // constructor
    constructor(id, name, age){
            this.stdId = id
            this.stdName = name
            this.stdAge = age
    }
    // method
    display(){
        console.log(`Id number ${this.stdId } Name is ${this.stdName} and age is ${this.stdAge}`);  
    }
}

const std = new Student(1001, "Graceson", 15)
std.display()