const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");
const ddayForm = document.querySelector(".dropdown-menu__form");




const title = document.querySelector("#title");
const sValue = document.querySelector("#start");
const eVaule = document.querySelector("#end");
const ddatLine = document.querySelector(".dday-box__box-line");

const DDAY = "dday";
let dDays = [];


function handleDropdown() {
    if (this.active) {
    dropdownMenu.classList.remove("active")
  } else {
    dropdownMenu.classList.add("active")
  }

  this.active = !this.active
}

dropdownButton.addEventListener("click", handleDropdown)

function saveDdays() {
    localStorage.setItem(DDAY, JSON.stringify(dDays));
}

function deleteDday(event) {
    const li = event.target.parentElement.parentNode.parentElement;
    dDays = dDays.filter((dDay) => dDay.id !== parseInt(li.id));
    li.remove();
    saveDdays();
   
}


function paintDday(newDdayObj) {


    const ul = document.createElement("ul");
    ul.id = newDdayObj.id;
    
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
    liTitle.innerText = `${newDdayObj.title}`;
    ul.appendChild(miniBox);
    miniBox.appendChild(liNumber);
    liNumber.appendChild(spanDday);
    liNumber.appendChild(spanDate);
    miniBox.appendChild(button);
    button.innerHTML = `<i class="fa-solid fa-square-minus"></i>`;
    spanDday.innerText = `D-${newDdayObj.dday}`;
    
      spanDate.innerText = `${newDdayObj.date}`;
    button.addEventListener("click", deleteDday);
    ddatLine.appendChild(ul);

}


function handleDdaySubmit(event) {
    event.preventDefault();
    let start = new Date();
    const end = new Date(eVaule.value);
    const result =  end.getTime() - start.getTime();
    const day = Math.floor(result / (1000 * 60 * 60 * 24) + 1);
    const newDdayObj = {
        title: title.value,
        date: eVaule.value,
        dday : day ,
        id : Date.now(),
    }
    dropdownMenu.classList.remove("active") 
    dDays.push(newDdayObj)
    paintDday(newDdayObj);
   
    saveDdays();

}


ddayForm.addEventListener("submit", handleDdaySubmit)


const savedDdays = localStorage.getItem(DDAY);

if (savedDdays !== null) {
    const parsedDdays = JSON.parse(savedDdays);
    dDays = parsedDdays;
    parsedDdays.forEach(paintDday);
}