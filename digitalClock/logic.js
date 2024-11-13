const clock = document.querySelector('#clock')

// const date = new Date();
//console.log(date); // Wed Nov 13 2024 16:13:05 GMT+0530 (India Standard Time)

// But we want hours, mins and seconds only

// const date = new Date()
// clock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`

// Note that we want to update this clock constantly,
// There is function setInterval that can execute callback funn
// after every set interval of time

setInterval(
    function (){
        const date = new Date()
        // console.log(date.toTimeString()) // 16:42:10 GST (Indian Standard Time)
        // clock.innerHTML = date.toTimeString().slice(0,8) 
                                     // Lets keep only time part
            // 16:42:55

       // clock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
       // This also works, get the individual hours,mins,secs and combine them

       // There is even another method toLocaleTimeString(), which gives time
       // according to system but with no additional infon
       // console.log(date.toLocaleTimeString());
            // 4:54:14 PM
        
        // Lets use this Since its human readable along with AM/PM
        clock.innerHTML = date.toLocaleTimeString()
    }, 1000
)
// I gave 1000, since we want to update it after 1 second

