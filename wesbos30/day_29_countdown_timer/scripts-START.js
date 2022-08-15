let countdown;
const displayTimeLeft = document.querySelector('.display__time-left');
const displayTimeEndHTML = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('button');

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const minutes = parseInt(this.minutes.value);
    timer(minutes * 60);
    this.reset();
})

buttons.forEach(button => button.addEventListener('click', () => timer(parseInt(button.dataset.time))));

function timer(seconds) {
    if(countdown) {
        clearInterval(countdown);
    }
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeRemaining(seconds);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        displayTimeRemaining(secondsLeft);
        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }
    }, 1000);
    displayEndTime(seconds);
}

function displayTimeRemaining(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    displayTimeLeft.textContent = display;
    document.title = display;
}

function displayEndTime(seconds) {
    const endTime = new Date(Date.now() + seconds * 1000);
    const hours = endTime.getHours();
    const minutes = endTime.getMinutes();
    const AMPM = hours > 12 ? 'PM' : 'AM';
    displayTimeEndHTML.textContent = `Be Back At ${hours % 12}:${minutes < 10 ? '0' : ''}${minutes} ${AMPM}`;

}