"use strict";

let uzs = document.querySelector("#uzs"),
    usd = document.querySelector("#usd");

uzs.addEventListener("input", () => {
    let request = new XMLHttpRequest();

    request.open("GET", "json/current.json");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    request.send();

    request.addEventListener("load", () => {
        if (request.status === 200) {
            let data = JSON.parse(request.response);
            usd.value = (+uzs.value / data.current.usd).toFixed(2);
        }
    });
});
