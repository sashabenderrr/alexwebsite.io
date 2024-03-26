const minutesDisplay = document.querySelector('.time-left');
const sessionDisplay = document.querySelector('.session');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let timeLeft = 1500;
let timer;

function showTimeLeft() {
	minutesDisplay.textContent = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	minutesDisplay.textContent = Math.floor(timeLeft / 60) + ':' + (seconds < 10 ? '0' + seconds : seconds);
}

function startTimer() {
	if (timeLeft <= 0) {
		return;
	}
	timer = setInterval( () => {
		timeLeft--;
		showTimeLeft();
		if (timeLeft === 0) {
			stopTimer();
			changeSession();
		}
	}, 1000);
}

function stopTimer() {
	clearInterval(timer);
}

function resetTimer() {
	timeLeft = 1500;
	stopTimer();
	showTimeLeft();
	sessionDisplay.textContent = 'Session';
}

function changeSession() {
	if (sessionDisplay.textContent === 'Session') {
		sessionDisplay.textContent = 'Break';
		timeLeft = 300;
	} else {
		sessionDisplay.textContent = 'Session';
		timeLeft = 1500;
	}
	resetTimer();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
