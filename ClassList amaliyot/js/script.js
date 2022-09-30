"use strict";

// let btns = document.querySelectorAll("button");

let btnExit = document.querySelector(".btn-exit"),
    rightMenu = document.querySelector(".right-menu"),
    showMenu = document.querySelector(".show-menu");

btnExit.addEventListener("click", () => {
    rightMenu.classList.add("hidden");
});
showMenu.addEventListener("click", () => {
    rightMenu.classList.remove("hidden");
});
