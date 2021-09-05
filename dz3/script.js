'use strict';

let getLength = (arr) => {
    let newArr = [];
    arr.forEach((item, index, array) => {
        newArr[index] = item.length;
    });
    return newArr;
};

let mas1 = ['Ivan', 'Pavlo', 'Ira'];
console.log(`mas1 = ${mas1}`);
let mas2 = ['Oleksiy', 'Andriana'];
console.log(`mas2 = ${mas2}`);

const arr1 = getLength(mas1);
console.log(`arr1 = ${arr1}`);

const arr2 = getLength(mas2);
console.log(`arr2 = ${arr2}`);