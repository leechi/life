const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");
const ddayForm = document.querySelector(".dropdown-menu__form");




const title = document.querySelector("#title");
const sValue = document.querySelector("#start");
const eVaule = document.querySelector("#end");
const ddatLine = document.querySelector(".dday-box__box-line");

const DDAY = "dday";
let dDays = [];
function saveToDos() {
    localStorage.setItem(DDAY, JSON.stringify(dDays));
}

function handleDropdown() {
    if (this.active) {
    dropdownMenu.classList.remove("active")
  } else {
    dropdownMenu.classList.add("active")
  }

  this.active = !this.active
}


dropdownButton.addEventListener("click", handleDropdown)

// dropdownButton.active = false;

function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}


function deleteDday(event) {
    const li = event.target.parentElement.parentNode.parentElement;
    li.remove();
    console.log(event.target.parentElement.parentNode.parentElement)
}


function paintDday(day) {


    const ul = document.createElement("ul");
    ul.className = "dday-box__box-innerline";
    const liTitle = document.createElement("li");
    liTitle.className = "dday-box__box-title";
    const miniBox = document.createElement("div");
    miniBox.className = "dday-minibox";
    const liNumber = document.createElement("li");
    liNumber.className = "dday-box__box-number";
    const spanDday = document.createElement("span");
    const spanDate = document.createElement("span");
    spanDday.className = "dday-box__box-number__dday";
    spanDate.className = "dday-box__box-number__date";
    const button = document.createElement("button");
    button.className = "dday-box__box-delete";
    ul.appendChild(liTitle);
    liTitle.innerText = `${title.value}`;
    ul.appendChild(miniBox);
    miniBox.appendChild(liNumber);
    liNumber.appendChild(spanDday);
    liNumber.appendChild(spanDate);
    miniBox.appendChild(button);
    button.innerHTML = `<i class="fa-solid fa-square-minus"></i>`;
    spanDday.innerText = `D-${day}`;
    spanDate.innerText = `${eVaule.value}`;
    button.addEventListener("click", deleteDday);
    ddatLine.appendChild(ul);

}


function handleDdaySubmit(event) {
    event.preventDefault();
    let start = new Date();
    const end = new Date(eVaule.value);
    const result =  end.getTime() - start.getTime();
    const day = Math.floor(result / (1000 * 60 * 60 * 24) + 1);
    dropdownMenu.classList.remove("active") 
    paintDday(day);

}


ddayForm.addEventListener("submit", handleDdaySubmit)

const savedDdays = localStorage.getItem(DDAY);

if (savedDdays !== null) {
    const parsedDays = JSON.parse(savedToDos);
    dDays = parsedDays;
    parsedDays.forEach(paintDday);
}