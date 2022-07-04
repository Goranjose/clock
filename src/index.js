// let active_1 = false;

// BUTTONS
let buttons = document.getElementById("buttons");
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");

// NAV-ICON BUTTONS
const btnTimer = document.getElementById("timer-button");
const btnPomodoro = document.getElementById("pomodoro-button");
const btnChronometer = document.getElementById("chronometer-button");

// VISUAL TEXTS
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let miliSeconds = document.getElementById("mili-seconds");
let hoursValue = 0;
let minutesValue = 0;
let secondsValue = 0;
let miliSecondsValue = 0;
let currentInterval;

// CONSTANTLY CHANGING
const clockContainer = document.getElementById("clock");

// EVENT LISTENERS
btnTimer.addEventListener("click", excecuteTimer);
btnPomodoro.addEventListener("click", excecutePomodoro);
btnChronometer.addEventListener("click", excecuteChronometer);

// FUNCTION ADD AND REMOVE CLASS"
function active(btnAdd, btnRemove_1, btnRemove_2) {
  btnAdd.classList.add("active");
  btnRemove_1.classList.remove("active");
  btnRemove_2.classList.remove("active");
}

// CLEAN HTML
function resetAll() {
  clockContainer.innerHTML = "";
  hoursValue = 0;
  minutesValue = 0;
  secondsValue = 0;
  miliSecondsValue = 0;
  clearInterval(currentInterval);
}

// TIMER FUNCTION
function excecuteTimer() {
  location.hash = "#timer";
  resetAll();

  document.title = `Timer - 00:00`;

  active(btnTimer, btnPomodoro, btnChronometer);

  showTitle("Timer");
  timerShowDisplay();
  chronometerShowButtons();

  buttons.replaceChild(btnStart, btnStop);

  // if (active_1 === false) {
  //   buttons.replaceChild(btnStart, btnStop);
  // } else {
  //   buttons.replaceChild(btnStop, btnStart);
  // }

  btnStart.addEventListener("click", startTimer);

  btnStop.addEventListener("click", stopTimer);
  btnReset.addEventListener("click", resetTimer);
}
//

function startTimer() {
  buttons.replaceChild(btnStop, btnStart);

  timerShowDisplayActive();
  console.log(inputHours.value);

  currentInterval = setInterval(() => {
    secondsValue -= 1;
    if (secondsValue === -1) {
      secondsValue = 59;
      minutesValue -= 1;
      minutes.textContent = formatValue(minutesValue);
    }
    if (minutesValue === -1) {
      minutesValue = 59;
      hours.textContent = formatValue(hoursValue);
    }
    if (hoursValue === -1) {
      hoursValue = 0;
      minutesValue = 0;
      secondsValue = 0;
    }
    seconds.textContent = formatValue(secondsValue);
  }, 1000);
}

// POMODORO FUNCTION
function excecutePomodoro() {
  location.hash = "#pomodoro";
  resetAll();

  active(btnPomodoro, btnTimer, btnChronometer);

  showTitle("Pomodoro");
}

// CHRONOMETER FUNCTION
function excecuteChronometer() {
  location.hash = "#chronometer";
  resetAll();

  document.title = `Chronometer - 00:00`;

  active(btnChronometer, btnTimer, btnPomodoro);

  showTitle("Chronometer");
  chronometerShowDisplay();
  chronometerShowButtons();

  buttons.replaceChild(btnStart, btnStop);

  // if (active_1 === false) {
  //   buttons.replaceChild(btnStart, btnStop);
  // } else {
  //   buttons.replaceChild(btnStop, btnStart);
  // }

  btnStart.addEventListener("click", startChronometer);
  btnStop.addEventListener("click", stopChronometer);
  btnReset.addEventListener("click", resetChronometer);
}

function startChronometer() {
  // active_1 = true;
  buttons.replaceChild(btnStop, btnStart);

  currentInterval = setInterval(() => {
    miliSecondsValue += 1;

    if (miliSecondsValue === 100) {
      miliSecondsValue = 0;
      secondsValue += 1;
      seconds.textContent = formatValue(secondsValue);
      document.title = `Chronometer - ${
        secondsValue === 60 ? "00" : minutes.textContent
      }:${seconds.textContent}`;
    }

    if (secondsValue === 60) {
      secondsValue = 0;
      minutesValue += 1;
      minutes.textContent = formatValue(minutesValue);
      document.title = `Chronometer - ${
        minutesValue === 60 ? "00" : minutes.textContent
      }:00`;
    }

    if (minutes === 60) {
      minutesValue = 0;
      hoursValue += 1;
      hours.textContent = formatValue(hoursValue);
    }

    miliSeconds.textContent = formatValue(miliSecondsValue);
  }, 10);
}

function formatValue(value) {
  return ("0" + value).slice(-2);
}

function stopChronometer() {
  active_1 = false;

  buttons.replaceChild(btnStart, btnStop);

  clearInterval(currentInterval);
}

function resetChronometer() {
  hoursValue = 0;
  minutesValue = 0;
  secondsValue = 0;
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
  miliSeconds.textContent = "00";
  document.title = `Chronometer - 00:00`;
  stopChronometer();
}

// INITIAL FUNCTION
excecuteTimer();
// excecuteChronometer();
