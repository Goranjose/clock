function showTitle(title = "Chronometer") {
  const chronometerTitle = document.createElement("h1");
  chronometerTitle.setAttribute("id", "title");
  chronometerTitle.classList.add("title");
  chronometerTitle.textContent = title;
  clockContainer.appendChild(chronometerTitle);
}

// CREATE TIMER DISPLAY AND INPUT
function timerShowDisplay() {
  clockContainer.classList.remove("chronometer");
  clockContainer.classList.add("timer");

  const timerDisplay = document.createElement("div");
  clockContainer.appendChild(timerDisplay);

  const containerHours = document.createElement("div");
  containerHours.classList.add("info");
  timerDisplay.appendChild(containerHours);

  // HOURS
  const inputHours = document.createElement("input");
  inputHours.classList.add("timer-display-text");
  inputHours.setAttribute("type", "number");
  inputHours.setAttribute("id", "hoursIn");
  inputHours.setAttribute("name", "hours");
  inputHours.setAttribute("min", "0");
  inputHours.setAttribute("max", "99");
  inputHours.setAttribute("placeholder", "00");
  containerHours.appendChild(inputHours);

  // MAX-LENGTH HOURS
  var inputFormatHours = document.getElementById("hoursIn");
  inputFormatHours.addEventListener("input", function () {
    if (this.value.length > 2) this.value = this.value.slice(0, 2);
  });

  const infoHours = document.createElement("label");
  infoHours.setAttribute("for", "hoursIn");
  infoHours.textContent = "hours";
  containerHours.appendChild(infoHours);

  const points_1 = document.createElement("span");
  points_1.classList.add("points");
  points_1.textContent = ":";
  timerDisplay.appendChild(points_1);
  //

  // MINUTES
  const containerMinutes = document.createElement("div");
  containerMinutes.classList.add("info");
  timerDisplay.appendChild(containerMinutes);

  const inputMinutes = document.createElement("input");
  inputMinutes.classList.add("timer-display-text");
  inputMinutes.setAttribute("type", "number");
  inputMinutes.setAttribute("id", "minutesIn");
  inputMinutes.setAttribute("name", "minutes");
  inputMinutes.setAttribute("min", "0");
  inputMinutes.setAttribute("max", "59");
  inputMinutes.setAttribute("placeholder", "00");
  containerMinutes.appendChild(inputMinutes);

  // MAX-LENGTH MINUTES
  var inputFormatMinutes = document.getElementById("minutesIn");
  inputFormatMinutes.addEventListener("input", function () {
    if (this.value.length > 2) this.value = this.value.slice(0, 2);
  });

  const infoMinutes = document.createElement("label");
  infoMinutes.setAttribute("for", "minutesIn");
  infoMinutes.textContent = "minutes";
  containerMinutes.appendChild(infoMinutes);

  const points_2 = document.createElement("span");
  points_2.classList.add("points");
  points_2.textContent = ":";
  timerDisplay.appendChild(points_2);
  //

  // SECONDS
  const containerSeconds = document.createElement("div");
  containerSeconds.classList.add("info");
  timerDisplay.appendChild(containerSeconds);

  const inputSeconds = document.createElement("input");
  inputSeconds.classList.add("timer-display-text");
  inputSeconds.setAttribute("type", "number");
  inputSeconds.setAttribute("id", "secondsIn");
  inputSeconds.setAttribute("name", "seconds");
  inputSeconds.setAttribute("min", "0");
  inputSeconds.setAttribute("max", "59");
  inputSeconds.setAttribute("placeholder", "00");
  inputSeconds.setAttribute("autofocus", "true");
  containerSeconds.appendChild(inputSeconds);

  // MAX-LENGTH SECONDS
  var inputFormatSeconds = document.getElementById("secondsIn");
  inputFormatSeconds.addEventListener("input", function () {
    if (this.value.length > 2) this.value = this.value.slice(0, 2);
  });

  const infoSeconds = document.createElement("label");
  infoSeconds.setAttribute("for", "secondsIn");
  infoSeconds.textContent = "seconds";
  containerSeconds.appendChild(infoSeconds);
}
//

// TIMER ACTIVE
function timerShowDisplayActive() {
  clockContainer.classList.add("timer");
  const timerDisplay = document.createElement("div");
  clockContainer.appendChild(timerDisplay);

  // HOURS
  const containerHours = document.createElement("div");
  containerHours.classList.add("info");
  timerDisplay.appendChild(containerHours);

  const textHours = document.createElement("span");
  textHours.setAttribute("id", "hours");
  textHours.textContent = "00";
  containerHours.appendChild(textHours);

  const infoHours = document.createElement("p");
  infoHours.textContent = "hours";
  containerHours.appendChild(infoHours);

  const points_1 = document.createElement("span");
  points_1.classList.add("points");
  points_1.textContent = ":";
  timerDisplay.appendChild(points_1);
  //

  // MINUTES
  const containerMinutes = document.createElement("div");
  containerMinutes.classList.add("info");
  timerDisplay.appendChild(containerMinutes);

  const textMinutes = document.createElement("span");
  textMinutes.setAttribute("id", "minutes");
  textMinutes.textContent = "00";
  containerMinutes.appendChild(textMinutes);

  const infoMinutes = document.createElement("p");
  infoMinutes.textContent = "minutes";
  containerMinutes.appendChild(infoMinutes);

  const points_2 = document.createElement("span");
  points_2.classList.add("points");
  points_2.textContent = ":";
  timerDisplay.appendChild(points_2);
  //

  //SECONDS
  const containerSeconds = document.createElement("div");
  containerSeconds.classList.add("info");
  timerDisplay.appendChild(containerSeconds);

  const textSeconds = document.createElement("span");
  textSeconds.setAttribute("id", "seconds");
  textSeconds.textContent = "00";
  containerSeconds.appendChild(textSeconds);

  const infoSeconds = document.createElement("p");
  infoSeconds.textContent = "seconds";
  containerSeconds.appendChild(infoSeconds);
  //

  hours = document.getElementById("hours");
  minutes = document.getElementById("minutes");
  seconds = document.getElementById("seconds");
  miliSeconds = document.getElementById("mili-seconds");
  //
}
//

// CREATE CHRONOMETER DISPLAY
function chronometerShowDisplay() {
  clockContainer.classList.add("chronometer");
  const chronometerDisplay = document.createElement("div");
  clockContainer.appendChild(chronometerDisplay);

  // HOURS
  const containerHours = document.createElement("div");
  containerHours.classList.add("info");
  chronometerDisplay.appendChild(containerHours);

  const textHours = document.createElement("span");
  textHours.setAttribute("id", "hours");
  textHours.textContent = "00";
  containerHours.appendChild(textHours);

  const infoHours = document.createElement("p");
  infoHours.textContent = "hours";
  containerHours.appendChild(infoHours);

  const points_1 = document.createElement("span");
  points_1.classList.add("points");
  points_1.textContent = ":";
  chronometerDisplay.appendChild(points_1);
  //

  // MINUTES
  const containerMinutes = document.createElement("div");
  containerMinutes.classList.add("info");
  chronometerDisplay.appendChild(containerMinutes);

  const textMinutes = document.createElement("span");
  textMinutes.setAttribute("id", "minutes");
  textMinutes.textContent = "00";
  containerMinutes.appendChild(textMinutes);

  const infoMinutes = document.createElement("p");
  infoMinutes.textContent = "minutes";
  containerMinutes.appendChild(infoMinutes);

  const points_2 = document.createElement("span");
  points_2.classList.add("points");
  points_2.textContent = ":";
  chronometerDisplay.appendChild(points_2);
  //

  //SECONDS
  const containerSeconds = document.createElement("div");
  containerSeconds.classList.add("info");
  chronometerDisplay.appendChild(containerSeconds);

  const textSeconds = document.createElement("span");
  textSeconds.setAttribute("id", "seconds");
  textSeconds.textContent = "00";
  containerSeconds.appendChild(textSeconds);

  const infoSeconds = document.createElement("p");
  infoSeconds.textContent = "seconds";
  containerSeconds.appendChild(infoSeconds);

  const points_3 = document.createElement("span");
  points_3.classList.add("points");
  points_3.textContent = ",";
  chronometerDisplay.appendChild(points_3);
  //

  // MILI-SECONDS
  const textMiliSeconds = document.createElement("span");
  textMiliSeconds.setAttribute("id", "mili-seconds");
  textMiliSeconds.textContent = "00";
  chronometerDisplay.appendChild(textMiliSeconds);
  //

  hours = document.getElementById("hours");
  minutes = document.getElementById("minutes");
  seconds = document.getElementById("seconds");
  miliSeconds = document.getElementById("mili-seconds");
}

// CREATE BUTTONS
function chronometerShowButtons() {
  const chronometerButtons = document.createElement("div");
  chronometerButtons.setAttribute("id", "buttons");
  chronometerButtons.classList.add("buttons");
  clockContainer.appendChild(chronometerButtons);

  const buttonStart = document.createElement("button");
  buttonStart.setAttribute("id", "start");
  chronometerButtons.appendChild(buttonStart);
  const imgStart = document.createElement("img");
  imgStart.src = "./assets/start.png";
  imgStart.classList.add("start");
  buttonStart.appendChild(imgStart);

  const buttonStop = document.createElement("button");
  buttonStop.setAttribute("id", "stop");
  chronometerButtons.appendChild(buttonStop);
  const imgStop = document.createElement("img");
  imgStop.src = "./assets/stop.png";
  imgStop.classList.add("stop");
  buttonStop.appendChild(imgStop);

  const buttonReset = document.createElement("button");
  buttonReset.setAttribute("id", "reset");
  chronometerButtons.appendChild(buttonReset);
  const imgReset = document.createElement("img");
  imgReset.src = "./assets/reset.png";
  imgReset.classList.add("reset");
  buttonReset.appendChild(imgReset);

  buttons = document.getElementById("buttons");
  btnStart = document.getElementById("start");
  btnStop = document.getElementById("stop");
  btnReset = document.getElementById("reset");
}

showTitle();
chronometerShowDisplay();
chronometerShowButtons();
excecuteTimer();
// excecuteChronometer();
buttons.removeChild(btnStop);
buttons.replaceChild(btnStart, btnStop);
