"use strict";

let arr = [11, 8, 3, 15, 21, 5, 324, 145];

arr.sort((a, b) => a - b);

console.log(arr);

// arr.forEach(function (item, index) {
//     console.log(`${index} : ${item}`);
// });

// forEach() metodi callback funksiya qabul qiladi va shu callback funksiya tasirida massivning har bir index raqamga tegishli qiymatlar uchun amal qiladi

// arr[15] = 1;

// for (let i of arr) {
//     console.log(i);
// }

// console.log(arr.length);
