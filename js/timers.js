const btn = document.querySelector('.btn'),
    square = document.querySelector('.square');

function myAnimation() {
    const timer = setInterval(frame, 10);
    let pos = 0;
    function frame() {
        if (pos === 300) {
            clearInterval(timer);
        } else {
            square.style.top = pos + "px";
            square.style.left = pos + "px";
            pos ++;
        }
    }
}

btn.addEventListener('click', myAnimation);