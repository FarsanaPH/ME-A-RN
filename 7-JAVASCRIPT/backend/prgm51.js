// Multi Level Inheritance
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
class C extends B {
    methodc(){
        console.log(`Inside Method c`);
    }
}
const obj = new C()
obj.methodc()
obj.methodb()
obj.methoda()