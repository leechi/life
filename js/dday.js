const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");
const ddayForm = document.querySelector(".dropdown-menu__form");
const title = document.querySelector("#title");
const start = document.querySelector("#start");
const end = document.querySelector("#end")
const ddayTitle = document.querySelector(".dday-box__box-title");
const ddayEnd = document.querySelector(".dday-box__box-number__date");

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

    ddayTitle.innerText = `${title.value}`;
ddayEnd.innerText = `${end.value}`;
}



ddayForm.addEventListener("submit", handleDdaySubmit)
