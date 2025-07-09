function getTime(){
    const time = new Date()
// console.log(time);


    const hour = time.getHours()
    console.log(hour);

    const minute = time.getMinutes()
    console.log(minute);

    const seconds = time.getSeconds()
    console.log(seconds);


    result.innerHTML = `${hour} : ${minute} : ${seconds} ${hour>=12 ? `PM` : `AM`}`

    setTimeout(()=>{
        getTime()
    },1000)
    
    

}

getTime()