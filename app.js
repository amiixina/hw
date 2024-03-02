const timeForm = document.getElementById('time-form');
const stopButton = document.getElementById('stop-button');
const progressBar = document.getElementById('progress-bar');
let time;
let intervalId;
let progress = 0;

timeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  time = parseInt(document.getElementById('time').value);
  startTimer();
});

function startTimer() {
  clearInterval(intervalId);
  progress = 0;
  progressBar.value = progress;
  intervalId = setInterval(() => {
    progress += 1 / (60 * time);
    progressBar.value = progress;
    if (progress >= 1) {
      clearInterval(intervalId);
      alert(`Time to rest, you worked ${time} minutes!`);
    }
  }, 1000);
}

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
});
