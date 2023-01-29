const moonmode = document.querySelector(".moon-mode");
const sunmode = document.querySelector(".sun-mode");
const body = document.querySelector("body");
const greetingColor = document.querySelector(".login-form__greeting");
const btn = document.querySelector(".menu-bar");
const menuText = document.querySelector(".menu-bar__link");
const menuText2 = document.querySelector(".menu-bar__link2");
const editPen = document.querySelector(".fa-pen");
const dropdownBtn = document.querySelector(".btn");


if (moonmode.addEventListener("click", changeColorMoon)) {    
    changeColorMoon()    
} else if(sunmode.addEventListener("click", changeColorSun)) {
    changeColorSun()
}

function changebgSun() {
    sunmode.classList.remove("hidden");
    moonmode.classList.add("hidden");
}
function changebgMoon() {
    sunmode.classList.add("hidden");
    moonmode.classList.remove("hidden");
}

moonmode.addEventListener("click", changebgSun);
sunmode.addEventListener("click", changebgMoon);

function changeColorMoon(){
    body.style.backgroundColor = "#2B2B2B";
    document.body.style.color = "#f2f2f2";
    greetingColor.style.color = "#f2f2f2";
    btn.style.color = "lightgray";
    moonmode.style.color = "lightgray";
    sunmode.style.color = "lightgray";
    editPen.style.color = "lightgray";
    menuText.style.color = "lightgray";
    menuText2.style.color = "lightgray";
    dropdownBtn.style.color = "lightgray";

}

function changeColorSun(){
    body.style.backgroundColor = "white";
    document.body.style.color = "black";
    greetingColor.style.color = "black";
    btn.style.color = "black";
    moonmode.style.color = "black";
    sunmode.style.color = "black";
    editPen.style.color = "black";
    menuText.style.color = "black";
    menuText2.style.color = "black";
    dropdownBtn.style.color = "black";
}




