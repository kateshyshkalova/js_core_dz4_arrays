'use strict';
// let mas = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// let masCopy = mas.slice();
// console.log(masCopy);
// console.log(mas);

let arrCopy = (arr) => { return arr.slice() };

let mas1 = [1, 2, 3];
let mas2 = [1, 2, 3, [10, 20]];

const arr1 = arrCopy(mas1);
console.log(`arr1 = ${arr1}`);

const arr2 = arrCopy(mas2);
console.log(`arr2 = ${arr2}`);