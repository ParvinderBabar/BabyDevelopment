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

function toggleTimer() {
  const timerButton = document.getElementById("timer-button");

  if (isRunning) {
    // pause pressed
    isRunning = false;
    timerButton.innerText = "▶";
    timerButton.style = "";

    clearInterval(intervalId);
  } else {
    // play pressed
    isRunning = true;
    timerButton.innerText = "▐ ▌";
    timerButton.style = "font-size: 35px;";

    intervalId = setInterval(incrementTime, 1000);
  }
}
