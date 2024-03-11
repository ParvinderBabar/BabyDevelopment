let isRunning = false;
let numberOfSeconds = 0;
let intervalId = null;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  let leftoverSeconds = seconds % 60;

  let hours = Math.floor(minutes / 60);
  let leftoverMinutes = minutes % 60;

  if (leftoverSeconds < 10) {
    leftoverSeconds = "0" + leftoverSeconds;
  }
  if (leftoverMinutes < 10) {
    leftoverMinutes = "0" + leftoverMinutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  return `${hours} : ${leftoverMinutes} : ${leftoverSeconds}`;
}

function incrementTime() {
  numberOfSeconds = numberOfSeconds + 1;
  const timerDisplay = document.getElementById("timer-display");

  timerDisplay.innerText = formatTime(numberOfSeconds);
}

function play() {
  const timerButton = document.getElementById("timer-button");

  isRunning = true;
  timerButton.innerText = "▐ ▌";
  timerButton.style = "font-size: 35px;";

  intervalId = setInterval(incrementTime, 1000);
}

function pause() {
  const timerButton = document.getElementById("timer-button");

  isRunning = false;
  timerButton.innerText = "▶";
  timerButton.style = "";

  clearInterval(intervalId);
}

function toggleTimer() {

  if (isRunning) {
    // pause pressed
    pause()
  } else {
    // play pressed
    play()
  }
}


function resetTimer() {
  const timerDisplay = document.getElementById("timer-display");
  pause()
  numberOfSeconds = 0
  timerDisplay.innerText = "00 : 00 : 00";
}


