function ageCheck() {
    console.log(age);

    // if(age.value>=18){
    //     alert(`eligible for voting`);

    // }else{
    //     alert(`Not Eligible for voting`);

    // }

    if (age.value) {
        if (age.value >= 18) {
            result.innerHTML = "Eligible for Voting"
            result.style.color = "green"
        } else if (age.value < 18) {
            result.innerHTML = "Not Eligible for Voting"
            result.style.color = "red"
        } else {
            result.innerHTML = "Invalid Input"
            result.style.color = "blue"
        }
    } else {
        result.innerHTML = "Enter a Value"
        result.style.color = "orange"
    }
}

// eligible - Eligible for Voting - green // >=18
// not eligible - Not Eligible for Voting - red <18
// no value - Enter a value - orange // 
// not a number - Invalid Input - blue // dsaasd