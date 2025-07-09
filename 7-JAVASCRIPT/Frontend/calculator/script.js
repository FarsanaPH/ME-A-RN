function display(num){
    result.value +=num
    console.log(result.value);
    
}


function allClear(){
    result.value = ""
}

function back(){
     console.log(result.value);
    result.value = result.value.slice(0, -1)  
}

function equalTo(){
    try {
        result.value = eval(result.value)
    } catch {
        result.value = "ERROR!!!"
        setTimeout(() => {
             result.value = ""
        }, 1000);
    }
}