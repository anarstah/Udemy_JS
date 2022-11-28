"use strict";

const arr = [1, 2, 3, 6, 8];

// arr.pop();
// arr.push(10);
//
// console.log(arr);

// arr[99] = 0;
//
// console.log(arr.length);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr} `);
});


// Filter

const names = ['Ivan', 'Ann', 'Ksenia', "Vladimir"];
const shortNames = names.filter((name) => {
    return name.length < 5;
});
console.log(shortNames);


// Map

const answers = ['IvAn', 'ANn', 'Hello'];
const results = answers.map(item => item.toLowerCase());
console.log(results)


// Every/Some

const some = [4, 'qwq', 'asdasd'];
console.log(some.some( item => typeof(item) === 'number'));
console.log(some.every( item => typeof(item) === 'number'));

// Reduce

const array = [4, 5, 1, 3, 2, 6];
const newArray = array.reduce((sum, current) => sum + current, 3);
console.log(newArray);

const fruits = ['apple', 'pear', 'plum'];
// const newFruits = fruits.reduce((sum, current) => sum + ', ' + current);
const newFruits = fruits.reduce((sum, current) => `${sum}, ${current}`);
console.log(newFruits);


// Entries

const obj = {
    ivan : 'person',
    ann : 'person',
    dog : 'animal',
    cat : 'animal'
};

const newArr = Object.entries(obj) 
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);