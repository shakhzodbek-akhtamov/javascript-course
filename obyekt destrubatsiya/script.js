"use strict";

let theif = {
    height: 1.8,
    colors: {
        hair: "black",
        eyes: "gray",
        bodyColor: "white",
    },
    age: 25,
};

for (let key in theif) {
    if (typeof theif[key] === "object") {
        for (let entriesKey in theif[key]) {
            console.log(
                `${entriesKey} haqidagi ma'lumot -> ${theif[key][entriesKey]}`
            );
        }
    } else {
        console.log(`${key} haqidagi ma'lumot -> ${theif[key]}`);
    }
}
