"use strict";

let seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    startApp: function () {
        while (
            seriesDB.count == "" ||
            seriesDB.count == null ||
            isNaN(seriesDB.count)
        ) {
            seriesDB.count = +prompt("Nechta serial ko'rdigiz?", "");
        }
    },
    detectSeries: function () {
        if (seriesDB.count <= 5) {
            console.log("Kam serial ko'rgan ekansiz");
        } else if (seriesDB.count > 5 || seriesDB.count <= 10) {
            console.log("Siz klassik tomoshabin ekansiz");
        } else {
            console.log("Siz serialchi zvezda ekansiz");
        }
    },
    listOfSeries: function () {
        for (let i = 1; i <= seriesDB.count; i++) {
            let nameOfSeries = prompt("Serialingiz nomini kiriting>>", "");
            let rateOfSeries = +prompt("Serialga necha baho berasiz?", "");
            while (
                rateOfSeries == "" ||
                rateOfSeries == null ||
                isNaN(rateOfSeries)
            ) {
                rateOfSeries = +prompt("Serialga necha baho berasiz?", "");
            }
            seriesDB.series[nameOfSeries] = rateOfSeries;
        }
    },
    showDB: function () {
        if (seriesDB.private == false) {
            console.log(seriesDB);
        } else {
            console.log(
                "Sizning ma'lumotlaringiz xavfszlikka to'g'ri kelmaydi"
            );
        }
    },
    writeGenres: function () {
        for (let i = 0; i <= 2; i++) {
            let likeGenres = prompt(`${i + 1}-yaxshi ko'rgan janringiz?`, "");
            if (likeGenres === "" || likeGenres === null) {
                i--;
            } else {
                seriesDB.genres[i] = likeGenres;
            }
        }
        seriesDB.genres.forEach((item, index) => {
            console.log(`${index + 1}-yaxshi ko'rgan janringiz >> ${item}`);
        });
    },
    visibleDB: function () {
        if (seriesDB.private === false) {
            seriesDB.private = true;
        } else {
            seriesDB.private = false;
        }
    },
};
