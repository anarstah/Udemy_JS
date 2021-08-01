"use strict";

const numberOfFilms = +prompt('how many films have you watched?');
let k = 0;


let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privacy: false
};

for (let i = 0; i <= k; i++) {
    let a = prompt('Yours last film?');
    let b = +prompt('Rating?');
    personalMoviesDB.movies[a] = b;
    let another = confirm('another movie?');
    if (another === true) {
        k++;
    }
}

console.log(personalMoviesDB);



