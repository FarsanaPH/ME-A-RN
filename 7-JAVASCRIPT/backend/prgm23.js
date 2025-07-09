function greet (name, callback){
    console.log(`Hi.. I am ${name}`);
    callback()
}

function secondFunction (){
    console.log(`I am second function`);
    
}
greet("grace", secondFunction)