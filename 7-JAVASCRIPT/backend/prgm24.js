function a() {
    console.log(`Inside Function a`);

    function b() {
        console.log(`Inside Function b`);
    }
    b()
}
a()

function c() {
    let parent_variable = "Parent"
    console.log(`Inside Function a`);
    console.log(`My Parent variable is ${parent_variable}`);
    // console.log(`My child variable is ${child_variable}`);

    function d() {
        let child_variable = "Child"
        console.log(`Inside Function b`);
        console.log(`My child variable is ${child_variable}`);
        
        console.log(`My Parent variable inside function b is ${parent_variable}`);
    }
    d()
}
c()