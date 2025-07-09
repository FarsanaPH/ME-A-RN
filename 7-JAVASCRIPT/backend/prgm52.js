// Hiraricial Inheritance
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
class C extends A {
    methodc(){
        console.log(`Inside Method c`);
    }
}
const obj = new C()
obj.methoda()

