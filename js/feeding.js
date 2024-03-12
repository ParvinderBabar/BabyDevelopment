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
    // Display result in label
    // Calculate total time in minutes
    let totalTimeInMinutes = 0;
    nursingLog.forEach(session => {
        totalTimeInMinutes += (session.left + session.right) / 60; // Convert seconds to minutes and sum
    });

    // Display total time in minutes
    const resultLabel = document.getElementById('result');
    resultLabel.textContent = `BeastFed: ${totalTimeInMinutes.toFixed(2)} minutes(Left: ${countdownLeft} seconds, Right: ${countdownRight} seconds)`;
  // Export result to dashboard.html
  exportResultToDashboard(totalTimeInMinutes);
}

function exportResultToDashboard(totalTimeInMinutes) {
  // Open a new window or tab with dashboard.html
  const dashboardWindow = window.open('dashboard.html');
  // Pass the result to dashboard.html using localStorage or URL parameters
  dashboardWindow.onload = function() {
    // Access the window object of dashboard.html
    const dashboardDocument = dashboardWindow.document;
    // Find the element in dashboard.html where you want to display the result
    const resultElement = dashboardDocument.getElementById('dashboard-result');
    // Set the content of the element to display the result
    resultElement.textContent = `Breastfed: ${totalTimeInMinutes.toFixed(2)} minutes(Left: ${countdownLeft} seconds, Right: ${countdownRight} seconds)`;
   // Save result to localStorage
  localStorage.setItem('totalTime', totalTimeInMinutes.toFixed(2));
}

// Load result from localStorage when dashboard.html loads
window.onload = function() {
  const savedTotalTime = localStorage.getItem('totalTime');
  if (savedTotalTime) {
    const resultElement = document.getElementById('dashboard-result');
    resultElement.textContent = `Total time: ${savedTotalTime} minutes`;
  }

  };
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