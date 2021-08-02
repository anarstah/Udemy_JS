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

for (let i = 0; i < 2; i++) {
    let a = prompt('Yours last film?');
    let b = +prompt('Rating?');

    if ((a && b) != null && (a && b) != '' && a.length < 50) {
        console.log('done');
        personalMoviesDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }

    console.log(personalMoviesDB);

}

if (personalMoviesDB.count <= 10) {
    alert('slabak');
} else if (personalMoviesDB.count <= 30) {
    alert('norm');
} else if (personalMoviesDB.count > 30) {
    alert('krasava');
} else {
    alert('error');
}



