"use strict";

// function firstFunc() {
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// }

// function secondFunc() {
//     console.log(2);
// }

// firstFunc(secondFunc);

function callbackFunc(first, second) {
    console.log("cllback ni birimchi qiymati >> ", first);
    second();
}

function done() {
    console.log("qisqartma");
}

callbackFunc("javascript", done);
