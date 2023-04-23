const timerEl = document.querySelector(".timer");
const pomobtn = document.getElementById("pomo");
const sBreakbtn = document.getElementById("sBreak");
const lBreakbtn = document.getElementById("lBreak");
const startbtn = document.querySelector(".start");
const setTime = document.querySelector(".setting");
const submit = document.querySelector(".setContainer");
const closebtn = document.querySelector(".submit");
const timeEl = document.getElementById("timeEl");
const sBreakEl = document.getElementById("sBreakEl");
const lBreakEl = document.getElementById("lBreakEl");
let pause = false;
let sBreak = false;
let lBreak = false;
let pomo = false;
let set = false;
let intervalId;
let timer;
if(timeEl.value == 0){
    timer = 1500;
    timerEl.textContent = `25:00`;
}


function reduceTime() {
    let min = pad(Math.floor(timer / 60) % 60);
    let sec =  pad(timer % 60);
    timerEl.textContent = `${min}:${sec}`;
    timer--;
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
    if (timer < 0) {
        set = true;
        if(sBreak || lBreak){
            timerEl.textContent = `Break Time's Over`;
            startbtn.textContent = "";
        clearInterval(intervalId);
        } else {
            timerEl.textContent = `Break Time`;
            startbtn.textContent = "";
            clearInterval(intervalId);
        }
    }
}

startbtn.addEventListener("click", () =>{
    
    if(!pause){
        pause = true;
        intervalId = setInterval(reduceTime, 1000);
        startbtn.textContent = "Pause";
    } else {
        pause = false;
        startbtn.textContent = "Start";
        clearInterval(intervalId);
    }
});

setTime.addEventListener("click", () => {
    submit.style.display = "block";
});

closebtn.addEventListener("click", () => {
    submit.style.display = "none";
    timer = (timeEl.value) * 60;
    if(timeEl.value > 9){
        timerEl.textContent = `${timeEl.value}:00`;
    } else{
        timerEl.textContent = `0${timeEl.value}:00`;
    }
});

pomobtn.addEventListener("click", () => {
    pomo = true;
    sBreak = false;
    lBreak = false;
    if(set){
        startbtn.textContent = "Start";
        set = false;
    }
    if(timeEl.value == 0){
        timer = 1500;
        timerEl.textContent = `25:00`;
    } else{
        timer = (timeEl.value) * 60;
        if(timeEl.value > 9){
            timerEl.textContent = `${timeEl.value}:00`;
        } else{
            timerEl.textContent = `0${timeEl.value}:00`;
        }
    }

});

sBreakbtn.addEventListener("click", () => {
    pomo = false;
    sBreak = true;
    lBreak = false;
    if(set){
        startbtn.textContent = "Start";
        set = false;
    }
    if(sBreakEl.value == 0){
        timer = 10 * 60;
        timerEl.textContent = `10:00`;
    } else {
        timer = (sBreakEl.value) * 60;
        if(sBreakEl.value > 9){
            timerEl.textContent = `${sBreakEl.value}:00`;
        } else{
            timerEl.textContent = `0${sBreakEl.value}:00`;
        }
    }
}
);

lBreakbtn.addEventListener("click", () => {
    pomo = false;
    sBreak = false;
    lBreak = true;

    if(set){
        startbtn.textContent = "Start";
        set = false;
    }
    
    if(lBreakEl.value == 0){
        timer = 20 * 60;
        timerEl.textContent = `20:00`;
    } else{
        timer = (lBreakEl.value) * 60;
        if(lBreakEl.value > 9){
            timerEl.textContent = `${lBreakEl.value}:00`;
        } else{
            timerEl.textContent = `0${lBreakEl.value}:00`;
        }
    }
});


