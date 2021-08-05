"use strict";

let numberOfFilms;

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privacy: false
};

function start() {
    numberOfFilms = +prompt('how many films have you watched?');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('how many films have you watched?');
    }
}

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
    if (personalMoviesDB.count <= 10) {
        alert('slabak');
    } else if (personalMoviesDB.count <= 30) {
        alert('norm');
    } else if (personalMoviesDB.count > 30) {
        alert('krasava');
    } else {
        alert('error');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i <3; i++) {
        personalMoviesDB.genres[i] = prompt(`What is your favorite genre number ${i + 1}?`);
    }
}



start();

rememberMyFilms();

writeYourGenres();

showMyDB(personalMoviesDB.privacy);




