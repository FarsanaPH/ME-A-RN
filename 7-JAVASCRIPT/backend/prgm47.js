// [1000,'Neel','developer','kochi',25000,3],

class Employee{
    // property
    empId
    empName
    empDesg
    // constructor
    constructor(name, id, designation){
            this.empId = id
            this.empName = name
            this.empDesg = designation
    }
    // method
    display(){
        console.log(`Name of the Employee is ${this.empName} and Designation is ${this.empDesg} and employee id is ${this.empId}`);  
    }
}

const emp = new Employee("Graceson", 1001, "Developer")
emp.display()