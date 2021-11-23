const btns = document.querySelectorAll('button');

btn.addEventListener('click', () => {
    alert('Click')
})


let i = 0;
const changeBg = (event) => {
    event.target.style.background = 'red';
    i++;
    // if (i == 1) {
    //     btns.forEach(btn => {
    //         btn.removeEventListener('click', changeBg);
    //     });
    // }
}

btns.forEach(btn => {
    btn.addEventListener('click', changeBg, {once: true});
})

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
})
