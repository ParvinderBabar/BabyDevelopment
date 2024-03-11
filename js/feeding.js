const timerDisplayLeft = document.getElementById('timerLeft');
const timerDisplayRight = document.getElementById('timerRight');
let countdownLeft = 0;
let countdownRight = 0;
let timerIdLeft;
let timerIdRight;
let nursingLog = [];

function updateTimerDisplayLeft() {
  timerDisplayLeft.textContent = countdownLeft + ' seconds';
}

function updateTimerDisplayRight() {
  timerDisplayRight.textContent = countdownRight + ' seconds';
}

function startTimerLeft() {
  clearInterval(timerIdRight);
  timerIdLeft = setInterval(function () {
    countdownLeft++;
    updateTimerDisplayLeft();
  }, 1000);
}

function startTimerRight() {
  clearInterval(timerIdLeft);
  timerIdRight = setInterval(function () {
    countdownRight++;
    updateTimerDisplayRight();
  }, 1000);
}

function stopTimerLeft() {
  clearInterval(timerIdLeft);
}

function stopTimerRight() {
  clearInterval(timerIdRight);
}

function clearTimerLeft() {
  stopTimerLeft();
  countdownLeft = 0;
  updateTimerDisplayLeft();
}

function clearTimerRight() {
  stopTimerRight();
  countdownRight = 0;
  updateTimerDisplayRight();
}

function cancelNursing() {
  clearTimerLeft();
  clearTimerRight();
}

function submitNursing() {
  const timeInput = document.getElementById('nursing-time').value.trim();
  if (timeInput === '') {
    alert('Please enter the time.');
    return;
  }
  // Stop both timers
  stopTimerLeft();
  stopTimerRight();

  nursingLog.push({
    left: countdownLeft,
    right: countdownRight,
    time: timeInput
  });
  console.log(nursingLog);
}

document.getElementById('startLeft').addEventListener('click', () => {
  startTimerLeft();
});

document.getElementById('startRight').addEventListener('click', () => {
  startTimerRight();
});

document.getElementById('stop').addEventListener('click', () => {
  stopTimerLeft();
  stopTimerRight();
});

document.getElementById('cancel').addEventListener('click', () => {
  cancelNursing();
});

document.getElementById('submit').addEventListener('click', () => {
  submitNursing();
});