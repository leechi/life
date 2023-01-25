const clock = document.querySelector(".clock");
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

function getAnalogClock() {
    const today = new Date();
    const hh = today.getHours() * 30;
    const mm = today.getMinutes() * deg;
    const ss = today.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}

getClock();
getAnalogClock();
setInterval(getClock, 1000);
setInterval (getAnalogClock, 1000);