"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let tabParent = document.querySelector(".tabheader__items"),
        tabItems = document.querySelectorAll(".tabheader__item"),
        tabContent = document.querySelectorAll(".tabcontent"),
        loader = document.querySelector(".loader");

    // LOADER
    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 500);

    // TABS
    function hideFn() {
        tabContent.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabItems.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showFn(i = 0) {
        tabContent[i].classList.add("show", "fade");
        tabContent[i].classList.remove("hide");
        tabItems[i].classList.add("tabheader__item_active");
    }

    tabParent.addEventListener("click", (event) => {
        let target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabItems.forEach((item, index) => {
                if (target === item) {
                    hideFn();
                    showFn(index);
                }
            });
        }
    });

    // AKSIYA

    const tugashVaqt = "2022-08-05";

    function vaqtQabulQilish(tugashi) {
        let vaqt = Date.parse(tugashi) - Date.parse(new Date()),
            kun = Math.floor(vaqt / 1000 / 60 / 60 / 24),
            soat = Math.floor((vaqt / 1000 / 60 / 60) % 24),
            daqiqa = Math.floor((vaqt / 1000 / 60) % 60),
            soniya = Math.floor((vaqt / 1000) % 60);

        return { vaqt, kun, soat, daqiqa, soniya };
    }

    function domdaKorsatish(selector, tugashi) {
        let time = document.querySelector(selector),
            kun = time.querySelector("#days"),
            soat = time.querySelector("hours"),
            daqiqa = time.querySelector("minutes"),
            soniya = time.querySelector("#seconds");

        let timeInterval = setInterval(aksiyaQismi, 1000);

        aksiyaQismi();

        function aksiyaQismi() {
            let t = vaqtQabulQilish(tugashi);

            kun.innerHTML = t.kun;
            soat.innerHTML = t.soat;
            daqiqa.innerHTML = t.daqiqa;
            soniya.innerHTML = t.soniya;

            if (t.vaqt <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    domdaKorsatish(".timer", tugashVaqt);
});
