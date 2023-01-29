const hellos = [{
    hello : "Go for it"
},{
    hello : "You can do it"
},{
    hello : "Break a leg"
},{
    hello : "You can make it"
},{
    hello : "Good work"
},{
    hello : "It's now or never"
},{
    hello : "Hang in there"
    }, {
    hello : "Hello"
}
];
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form Input");
const greeting = document.querySelector(".greeting");
const logout = document.querySelector(".logout");
const helloWorld = document.querySelector(".hello")

function changeHello() {
    const helloMsg = hellos[Math.floor(Math.random() * hellos.length)];
    helloWorld.innerHTML = `${helloMsg.hello}! <i class="fa-solid fa-face-laugh"></i>`
}

changeHello();
setInterval(changeHello, 4777);



const HIDDEN = "hidden"
const USERNAME = "username"

function loginHandler(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN);
    localStorage.setItem(USERNAME, username);
    paintGreeting(username)
}

function logoutHandler() {
    localStorage.removeItem(USERNAME);
    logout.classList.add(HIDDEN);
    greeting.classList.add(HIDDEN);
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", loginHandler)
}

logout.addEventListener("click", logoutHandler);

function paintGreeting(username) {
    greeting.classList.remove(HIDDEN);
    logout.classList.remove(HIDDEN);
    greeting.innerText = `${username}`;
}



const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", loginHandler);
} else {
    paintGreeting(savedUsername);

}