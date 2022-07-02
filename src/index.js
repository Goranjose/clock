let active_1 = false;

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
let currentChronometer;

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
}

// TIMER FUNCTION
function excecuteTimer() {
  location.hash = "#timer";
  resetAll();

  active(btnTimer, btnPomodoro, btnChronometer);

  showTitle("Timer");
  timerShowDisplay();
  chronometerShowButtons();
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

  active(btnChronometer, btnTimer, btnPomodoro);

  showTitle("Chronometer");
  chronometerShowDisplay();
  chronometerShowButtons();

  if (active_1 === false) {
    buttons.replaceChild(btnStart, btnStop);
  } else {
    buttons.replaceChild(btnStop, btnStart);
  }

  btnStart.addEventListener("click", startChronometer);
  btnStop.addEventListener("click", stopChronometer);
  btnReset.addEventListener("click", resetChronometer);
}

function startChronometer() {
  active_1 = true;
  buttons.replaceChild(btnStop, btnStart);

  currentChronometer = setInterval(() => {
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

  clearInterval(currentChronometer);
}

function resetChronometer() {
  hoursValue = 0;
  minutesValue = 0;
  secondsValue = 0;
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
  miliSeconds.textContent = "00";
  stopChronometer();
}

// INITIAL FUNCTION
// excecuteTimer();
excecuteChronometer();
