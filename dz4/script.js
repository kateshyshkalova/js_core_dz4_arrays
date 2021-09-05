'use strict';

let removeDuplicates = (arr) => {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) { //якщо новий масив ще не містить елемент, додаємо його 
            result.push(str);
        }
    };
    return result;
}

let mas1 = ['html', 'css', 'html', 'js'];
console.log(`mas1 = ${mas1}`);

const arr1 = removeDuplicates(mas1);
console.log(`arr1 = ${arr1}`);

let mas2 = ['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss', 'java', 'php', 'java'];
console.log(`mas2 = ${mas2}`);

const arr2 = removeDuplicates(mas2);
console.log(`arr2 = ${arr2}`);