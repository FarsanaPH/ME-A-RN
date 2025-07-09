class A {
    methoda(){
        console.log(`Inside Method A`);
    }
}

class B extends A {
    methodb(){
        console.log(`Inside Method b`);
    }
}

const obj = new B()
obj.methodb()
obj.methoda()