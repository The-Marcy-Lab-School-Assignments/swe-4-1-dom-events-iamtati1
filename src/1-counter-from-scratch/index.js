let count = 0;
let timeLeft = 10;
let timerId = null;
let highScore = 0;

const countDisplay = document.querySelector('#count');
const timerDisplay = document.querySelector('#timer');
const incrementBtn = document.querySelector('#increment');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const highScoresList = document.querySelector('#high-scores');

function updateCount() {
    countDisplay.textContent = count;
}

function updateTimer() {
    timerDisplay.textContent = timeLeft;
}

function resetGame() {
    clearInterval(timerId);
    count = 0;
    timeLeft = 10;
    updateCount();
    updateTimer();
}

function updateHighScore() {
    if (count > highScore) {
        highScore = count;

        const li = document.createElement('li');
        li.textContent = `New High Score: ${highScore}`;
        highScoresList.append(li);
    }
}

incrementBtn.addEventListener('click', () => {
    if (timeLeft > 0) {
        count++;
        updateCount();
    }
});

startBtn.addEventListener('click', () => {
    resetGame();

    timerId = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(timerId);
            updateHighScore();
        }
    }, 1000);
});

resetBtn.addEventListener('click', resetGame);
