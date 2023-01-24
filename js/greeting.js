const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form Input");
const greeting = document.querySelector(".greeting");
const logout = document.querySelector(".logout");

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