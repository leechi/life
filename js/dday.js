const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");
const ddayForm = document.querySelector(".dropdown-menu__form");




const title = document.querySelector("#title");
const sValue = document.querySelector("#start");
const eVaule = document.querySelector("#end")
const ddayTitle = document.querySelector(".dday-box__box-title");
const ddayEnd = document.querySelector(".dday-box__box-number__date");
const dday = document.querySelector(".dday-box__box-number__dday");

dropdownButton.addEventListener("click", function(event) {
  if (this.active) {
    dropdownMenu.classList.remove("active")
  } else {
    dropdownMenu.classList.add("active")
  }

  this.active = !this.active
})

dropdownButton.active = false;

function handleDdaySubmit(event) {
    let start = new Date();
const end = new Date(eVaule.value);

const timeDiff =  end.getTime() - start.getTime();
const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);


    event.preventDefault();
    ddayTitle.innerText = `${title.value}`;
    ddayEnd.innerText = `${eVaule.value}`;
    dropdownMenu.classList.remove("active")
    dday.innerText = `D-${day}`;
    

}



ddayForm.addEventListener("submit", handleDdaySubmit)
