document.addEventListener("DOMContentLoaded", function() {
    const sleepStart = new Date(localStorage.getItem('sleepStart'));
    const sleepEnd = new Date(localStorage.getItem('sleepEnd'));
    const sleepDuration = calculateSleepDuration(sleepStart, sleepEnd);
    const totalSleepHours = sleepDuration / (1000 * 60 * 60);
    document.getElementById('total-hours').textContent = totalSleepHours.toFixed(2);

    const analysisResult = analyzeSleepTime(totalSleepHours);
    document.getElementById('analysis-result').textContent = analysisResult;

    function calculateSleepDuration(start, end) {
        return end - start;
    }

    function analyzeSleepTime(hours) {
        if (hours < 0) {
            return "Invalid sleep time. Please check your inputs.";
        } else if (hours > 24) {
            return "Your baby's sleep time exceeds 24 hours. Please consult with a pediatrician.";
        } else {
            return "Sleep time within normal limits.";
        }
    }
});