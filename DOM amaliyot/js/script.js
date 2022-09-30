"use strict";

const adv = document.querySelectorAll(".promo__adv img"),
    wrapper = document.querySelector(".promo__bg"),
    genre = wrapper.querySelector(".promo__genre"),
    seriesList = document.querySelector(".promo__interactive-list"),
    form = document.querySelector("form.add"),
    inputValue = document.querySelector(".adding__input"),
    submit = document.querySelector("button.submit");

const seriesDB = {
    series: [
        "Omar",
        "The Final Legacy",
        "Ertugrul",
        "Magnificent Century",
        "The Great Seljuks: Guardians...",
    ],
};

function iterationItems() {
    adv.forEach((item) => {
        item.remove();
    });
}
iterationItems();

function changedElements() {
    genre.textContent = "COMEDY";
    wrapper.style.backgroundImage = "url('img/1.jpg')";
}
changedElements();

function showListItems() {
    seriesDB.series.forEach((item, index) => {
        seriesList.innerHTML = "";
        seriesList.innerHTML += `<li class="promo__interactive-item">${
            index + 1
        }. ${item}<div class="delete"></div>`;
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    seriesDB.series.push(inputValue.value);
    seriesDB.series.sort();
    inputValue.value = "";
    showListItems();

    // console.log(inputValue.value.split(""));
});
