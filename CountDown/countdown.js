const daysEl  = document.getElementById("days");
const hoursEl  = document.getElementById("hours");
const minsEl  = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const christmas = '25 Dec 2023';


countdown();
setInterval(countdown, 1000);

function countdown() {
    const christmasDay = new Date(christmas);
    const currentDate = new Date();

    const totalSec = (christmasDay - currentDate) / 1000;

    const days = Math.floor(totalSec / 3600 / 24);
    const hrs = Math.floor(totalSec / 3600 ) % 24;
    const mins = Math.floor(totalSec / 60) % 60;
    const sec = Math.floor(totalSec) % 60;
   
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hrs);
    minsEl.innerHTML =  formatTime(mins);
    secondsEl.innerHTML = formatTime(sec);
    
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();
setInterval(countdown, 1000);
