"use strict";
console.log("hallo world");
window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  points = 0;
  lives = 3;
  console.log("noob");
  startAnimation();
  addPosition();
  registerClick();
  animationRestart();
  addSpeed();
}

function startAnimation() {
  document.querySelector("#mouse1_container").classList.add("leftzigzag");
  document.querySelector("#mouse2_container").classList.add("leftzigzag");
  document.querySelector("#cat1_container").classList.add("leftzigzag");
  document.querySelector("#cat2_container").classList.add("leftzigzag");
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

function addSpeed() {
  document.querySelector("#mouse1_container").classList.add("speed1");
  document.querySelector("#mouse2_container").classList.add("speed2");
  document.querySelector("#cat1_container").classList.add("speed3");
  document.querySelector("#cat2_container").classList.add("speed2");
}

function clickMouse() {
  let mouse = this;
  mouse.removeEventListener("mousedown", clickMouse);
  mouse.classList.add("paused");
  mouse.querySelector("img").classList.add("zoom_out");
  mouse.addEventListener("animationend", mouseGone);
  incrementPoints();
}

function mouseGone() {
  let mouse = this;
  mouse.removeEventListener("animationend", mouseGone);
  mouse.querySelector("img").classList.remove("zoom_out");
  mouse.classList.remove("paused");
  mouseRestart.call(this);
  mouse.addEventListener("mousedown", clickMouse);
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
  cat.removeEventListener("click", clickCat);
  cat.classList.add("paused");
  cat.querySelector("img").classList.add("zoom_out");
  cat.addEventListener("animationend", catGone);
  decrementLives();
}

function catGone() {
  let cat = this;
  cat.removeEventListener("animationend", catGone);
  cat.querySelector("img").classList.remove("zoom_out");
  cat.classList.remove("paused");
  catRestart.call(this);
  cat.addEventListener("mousedown", clickCat);
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
  if (points >= 20) {
    levelcomplete();
  }
}

function displayPoints() {
  document.querySelector("#hay_count").textContent = points;
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

function gameOver() {
  console.log("gameOver");
  document.querySelector("#game_over").classList.remove("hidden");
  end();
}

function levelcomplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  end();
}
