class Landing {
    // Property
    dataBase = {
        "Manu": { username: "Manu", password: "Manu123" },
        "Anu": { username: "Anu", password: "Anu123" },
        "Sijo": { username: "Sijo", password: "Sijo123" },
        "Karthy": { username: "Karthy", password: "Karthy123" }
    }
     
    //Method
    saveData() {
        if (this.dataBase) {
            localStorage.setItem("dataBase", JSON.stringify(this.dataBase))
        }
    }

    getData() {
        this.dataBase = JSON.parse(localStorage.getItem("dataBase"))
        // console.log(dataBase); 
    }

    register() {
        // this.getData()
        // console.log(regUser.value);
        // console.log(regPswd.value);
        if (regUser.value == "" || regPswd.value == "") {
            alert(`Fill the Username and Password`)
        } else {
            if (regUser.value in this.dataBase) {
                alert(`User already Exists!!!`)
            } else {
                this.dataBase[regUser.value] = { username: regUser.value, password: regPswd.value }
                console.log(this.dataBase);
                this.saveData()
                alert(`Registered Successfully`)
            }
        }
    }

    login(){
       this.getData()
        if (loginUser.value == "" || loginPswd.value == "") {
            alert(`Fill the Username and Password`)
        }else{
            if(loginUser.value in this.dataBase){
                if(this.dataBase[loginUser.value].password == loginPswd.value){
                    localStorage.setItem("userName", loginUser.value)
                    window.location = "home.html"
                    alert(`Login Successfull!!!`)

                }else{
                    alert(`Invalid Username or Password`)
                }
            }else{
                alert(`User doesnot exits!!! Please Register`)
            }
        }
    }
}

const obj = new Landing()
obj.getData()


