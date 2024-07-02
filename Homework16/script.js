let timer = document.querySelector('.timer');
let countdownTime = 85;

const timerCountDown = (countdownTime,display) =>{
    let timer = countdownTime;
    let minutes;
    let seconds;

    let interval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(interval);
        }
    }, 1000);
}


window.onload = function () {
    let display = document.querySelector('#timer');
    startTimer(countdownTime, display);
};