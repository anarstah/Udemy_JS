 "use strict";

let personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privacy: false,
    start: function () {
        personalMoviesDB.count = +prompt('how many films have you watched?');

        while (personalMoviesDB.count == null || personalMoviesDB.count == '' || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt('how many films have you watched?');
        }

    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMoviesDB.count <= 10) {
            alert('slabak');
        } else if (personalMoviesDB.count <= 30) {
            alert('norm');
        } else if (personalMoviesDB.count > 30) {
            alert('krasava');
        } else {
            alert('error');
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            const genres = prompt(`Enter your favorite genres separated by commas`).toLowerCase();
            if (genres == null || genres == '') {
                i--;
            } else {
                personalMoviesDB.genres = genres.split(', ');
                personalMoviesDB.genres.sort();
            }
        }
        personalMoviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDb : function () {
        if (personalMoviesDB.privacy) {
            personalMoviesDB.privacy = false;
        } else {
            personalMoviesDB.privacy = true;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMoviesDB);
        }
    }
};




