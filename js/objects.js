"use strict";

const options = {
    name : 'test',
    width : 1024,
    height : 768,
    colors : {
        bg : 'red',
        border : 'black'
    },
    makeTest : function () {
        console.log("Test");
    }
};

const {bg, border} = options.colors;
console.log(border);
console.log(bg);


options.makeTest();

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }

}
console.log(Object.keys(options).length);
