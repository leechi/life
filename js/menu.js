const menuIcon = document.querySelector(".menu-bar__icon");
const menuList = document.querySelector(".menu-bar__list");




function dropMenu() {
    menuList.classList.toggle("hidden");
}



menuIcon.addEventListener("click", dropMenu);


