'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET','js/current,js');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    /* Свойства запроса */

    // status
    // statusText
    // response
    // readyState

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
        }

    });
});