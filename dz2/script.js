'use strict';
let arrToString = (arr) => {
    let newArr = [];

    // for (const i of arr) {
    //     newArr[i - 1] = `'${arr[i - 1]}'`;
    // }
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = `'${arr[i]}'`;
    }
    return newArr;
};

let mas1 = [1, 2, 30];
console.log(`mas1 = ${mas1}`);
let mas2 = [10, 200, 3333];
console.log(`mas2 = ${mas2}`);

const arr1 = arrToString(mas1);
console.log(`arr1 = ${arr1}`);

const arr2 = arrToString(mas2);
console.log(`arr2 = ${arr2}`);
console.log(`typeof arr2[1] = ${typeof (arr2[1])}`);