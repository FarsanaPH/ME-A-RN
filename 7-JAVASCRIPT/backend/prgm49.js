class Bank {
    // property
    accoundDetails = {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 5000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 10000 }, //7000
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 6000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 2000 }, // 5000
    }
    // w.a. method to validate an account
    validate(acno){
        return acno in this.accoundDetails ? true : false
    }
    // w.a. method to authenticate an account
    authenticate(acno, pswd){
        if(this.validate(acno)){
            if(this.accoundDetails[acno].password == pswd){
                console.log(`Authentication Successfull`);
            }else{
                console.log(`Incorrect password`);  
            }
        }else{
            console.log(`Incorrect Account Number`); 
        }
    }
    // w.a. method to check the balance of an account
    checkBalance(acno, pswd){
        if(this.validate(acno)){
            if(this.accoundDetails[acno].password == pswd){
                console.log(`Balance of Account number ${acno} is ${this.accoundDetails[acno].balance}`);
                
            }else{
                console.log(`Incorrect password`);  
            }
        }else{
            console.log(`Incorrect Account Number`); 
        }
    }
    // w.a. method to transfer an amount from one accound to another
    fundTransfer(fromacno, pswd, toacno, amount){
        if(this.validate(fromacno) && this.validate(toacno)){
            if(this.accoundDetails[fromacno].password == pswd){
                if(this.accoundDetails[fromacno].balance >= amount){
                    console.log(`Balance of ${fromacno} is ${this.accoundDetails[fromacno].balance} and balance of ${toacno} id ${this.accoundDetails[toacno].balance} before Fund Transfer`);

                        this.accoundDetails[fromacno].balance-=amount
                        this.accoundDetails[toacno].balance+=amount
                    
                     console.log(`Balance of ${fromacno} is ${this.accoundDetails[fromacno].balance} and balance of ${toacno} id ${this.accoundDetails[toacno].balance} after Fund Transfer`);
                }else{
                    console.log(`Insufficiant balance`);  
                }
            }else{
                console.log(`Invalid Account or Password`);   
            }
        }else{
            console.log(`Incorrect account details`); 
        }
    }
}

const obj = new Bank()
console.log(obj.validate(1001)?`Accound exists` : `No such account number`);
obj.authenticate(1000, "userone")
obj.checkBalance(1000, "userone")
obj.fundTransfer(1001, "usertwo", 1003, 3000)
