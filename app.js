"use strict";
console.log("hallo world");
window.addEventListener("load", ready);

let points = 0;
let lives = 0;
let isGameRunning = false;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_restart1").addEventListener("click", startGame);
  document.querySelector("#btn_restart2").addEventListener("click", showStartScreen);
}

function startGame() {
  isGameRunning = true;
  points = 0;
  lives = 3;
  resetLives();
  resetPoints();
  showGameScreen();
  startTimer();
  startAnimation();
  registerClick();
  animationRestart();
  startMusic();
  document.querySelector("#game").classList.add("zoom_in");
}

function startMusic() {
  document.querySelector("#sound_music").play();
  document.querySelector("#sound_music").loop = true;
}

function startAnimation() {
  document.querySelector("#mouse1_container").classList.add("leftzigzag");
  document.querySelector("#mouse2_container").classList.add("leftzigzag");
  document.querySelector("#cat1_container").classList.add("leftzigzag");
  document.querySelector("#cat2_container").classList.add("leftzigzag");

  addSpeed();
  addPosition();
}
function showGameScreen() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}
function addPosition() {
  document.querySelector("#mouse1_container").classList.add("position1");
  document.querySelector("#mouse2_container").classList.add("position3");
  document.querySelector("#cat1_container").classList.add("position2");
  document.querySelector("#cat2_container").classList.add("position5");
}
function registerClick() {
  document.querySelector("#mouse1_container").addEventListener("mousedown", clickMouse);
  document.querySelector("#mouse2_container").addEventListener("mousedown", clickMouse);
  document.querySelector("#cat1_container").addEventListener("mousedown", clickCat);
  document.querySelector("#cat2_container").addEventListener("mousedown", clickCat);
}

function animationRestart() {
  document.querySelector("#mouse1_container").addEventListener("animationiteration", mouseRestart);
  document.querySelector("#mouse2_container").addEventListener("animationiteration", mouseRestart);
  document.querySelector("#cat1_container").addEventListener("animationiteration", catRestart);
  document.querySelector("#cat2_container").addEventListener("animationiteration", catRestart);
}
function resetLives() {
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");

  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}
function resetPoints() {
  points = 0;
  displayPoints();
}

function addSpeed() {
  document.querySelector("#mouse1_container").classList.add("speed1");
  document.querySelector("#mouse2_container").classList.add("speed2");
  document.querySelector("#cat1_container").classList.add("speed3");
  document.querySelector("#cat2_container").classList.add("speed2");
}

function clickMouse() {
  let mouse = this;
  console.log("click mouse");
  mouse.removeEventListener("mousedown", clickMouse);
  mouse.classList.add("paused");
  mouse.querySelector("img").classList.add("zoom_out");
  mouse.addEventListener("animationend", mouseGone);
  document.querySelector("#sound_clickMouse").play();
  document.querySelector("#sound_clickMouse").volume = 0.3;
  document.querySelector("#sound_clickMouse").currentTime = 0;
  incrementPoints();
}

function mouseGone() {
  console.log("mouse gone");
  let mouse = this;
  mouse.removeEventListener("animationend", mouseGone);
  mouse.querySelector("img").classList.remove("zoom_out");
  mouse.classList.remove("paused");
  if (isGameRunning) {
    mouseRestart.call(this);
    mouse.addEventListener("mousedown", clickMouse);
  }
}

function mouseRestart() {
  console.log("mouserESTART");
  let mouse = this;
  mouse.classList.remove("leftzigzag");
  mouse.offsetWidth;
  mouse.classList.add("leftzigzag");
  mouse.classList.remove("speed1", "speed2", "speed3");
  let speed = Math.floor(Math.random() * 3) + 1;
  mouse.classList.add("speed" + speed);
  mouse.classList.remove("position1", "position2", "position3", "position4", "position5");
  let pos = Math.floor(Math.random() * 5) + 1;
  mouse.classList.add("position" + pos);
}

function clickCat() {
  let cat = this;
  cat.removeEventListener("mousedown", clickCat);
  cat.classList.add("paused");
  cat.querySelector("img").classList.add("zoom_out");
  cat.addEventListener("animationend", catGone);
  document.querySelector("#sound_clickCat").play();
  document.querySelector("#sound_clickCat").volume = 0.8;
  document.querySelector("#sound_clickCat").currentTime = 0;
  decrementLives();
  decrementPoints();
}

function catGone() {
  let cat = this;
  cat.removeEventListener("animationend", catGone);
  cat.querySelector("img").classList.remove("zoom_out");
  cat.classList.remove("paused");

  if (isGameRunning) {
    catRestart.call(this);
    cat.addEventListener("mousedown", clickCat);
  }
}

function catRestart() {
  console.log("catrESTART");
  let cat = this;
  cat.classList.remove("leftzigzag");
  cat.offsetWidth;
  cat.classList.add("leftzigzag");
  cat.classList.remove("speed1", "speed2", "speed3");
  let speed = Math.floor(Math.random() * 3) + 1;
  cat.classList.add("speed" + speed);
  cat.classList.remove("position1", "position2", "position3", "position4", "position5");
  let pos = Math.floor(Math.random() * 5) + 1;
  cat.classList.add("position" + pos);
}

function incrementPoints() {
  points++;
  console.log("har nu " + points + " point");
  displayPoints();
}

function decrementPoints() {
  points--;
  console.log("har nu " + points + " point");
  displayPoints();
}
function displayPoints() {
  document.querySelector("#hay_count").textContent = points;

  if (points >= 10) {
    levelComplete();
  }
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}
function decrementLives() {
  console.log("mist et liv");
  showDecrementedLives();
  lives--;
  if (lives == 0) {
    gameOver();
  }
}
function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");

  document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}
function timeIsUp() {
  if (points >= 15) {
    levelComplete();
  } else {
    gameOver();
  }
}
function end() {
  isGameRunning = false;

  document.querySelector("#mouse1_container").classList.remove("leftzigzag");
  document.querySelector("#mouse2_container").classList.remove("leftzigzag");
  document.querySelector("#cat1_container").classList.remove("leftzigzag");
  document.querySelector("#cat2_container").classList.remove("leftzigzag");

  document.querySelector("#mouse1_container").removeEventListener("mousedown", mouseGone);
  document.querySelector("#mouse2_container").removeEventListener("mousedown", mouseGone);
  document.querySelector("#cat1_container").removeEventListener("mousedown", catGone);
  document.querySelector("#cat2_container").removeEventListener("mousedown", catGone);

  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#game").classList.remove("zoom_in");
  document.querySelector("#sound_music").pause();
}

function gameOver() {
  console.log("gameOver");
  document.querySelector("#sound_gameOver").play();
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("zoom_in");

  end();
}

function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#sound_levelComplete").play();
  document.querySelector("#level_complete").classList.add("zoom_in");
  end();
}

function showStartScreen() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#start").classList.add("zoom_in");
}
