"use strict";

let btn = document.querySelector("#btn");

function myAnimation() {
    let car = document.querySelector(".car");
    let pos = 0;
    let timer = setInterval(moveFn, 10);

    function moveFn() {
        if (pos == 700) {
            clearInterval();
        } else {
            pos += 1;
            car.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", myAnimation);
