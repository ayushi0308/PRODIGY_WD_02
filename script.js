let timer = document.querySelector('.timer')
let startbtn = document.querySelector("#btn1")
let stopbtn = document.querySelector("#btn2")
let resetbtn = document.querySelector("#btn3")

let msec = 0;
let secs = 0;
let mins = 0;

let timerid = null;


startbtn.addEventListener('click', function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
    timerid = setInterval(Startfunc,10);
})

stopbtn.addEventListener('click', function(){
    clearInterval(timerid);
})

resetbtn.addEventListener('click', function(){
    clearInterval(timerid)
    timer.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
})

function Startfunc(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs= 0;
            mins++;
        }
    }

    let msecString;
    if(msec < 10){
        msecString = `0${msec}`;
    }
    else{
        msecString = msec;
    }

    let secsString;
    if(secs < 10){
        secsString = `0${secs}`;
    }
    else{
        secsString = secs;
    }

    let minsString;
    if(mins < 10){
        minsString = `0${mins}`;
    }
    else{
        minsString = mins;
    }

    timer.innerHTML = `${msecString} : ${secsString} : ${minsString}`;
}