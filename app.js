

"use strict";
console.log("hallo world");
window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  points = 0;
  lives = 3;
  console.log("noob");
  document.querySelector("#mouse1_container").classList.add("leftzigzag");
  document.querySelector("#mouse2_container").classList.add("leftzigzag");
  document.querySelector("#cat1_container").classList.add("leftzigzag");
  document.querySelector("#cat2_container").classList.add("leftzigzag");

  document.querySelector("#mouse1_container").addEventListener("mousedown", clickMouse);
  document.querySelector("#mouse2_container").addEventListener("mousedown", clickMouse);
  document.querySelector("#cat1_container").addEventListener("mousedown", clickCat);
  document.querySelector("#cat2_container").addEventListener("mousedown", clickCat);
}

function clickMouse() {
  let mouse = this;
  mouse.removeEventListener("click", clickMouse);

  mouse.classList.add("paused");
  mouse.querySelector("img").classList.add("zoom_out");
  mouse.addEventListener("animationend", mouseGone);
  incrementPoints();
}


function clickCat() {
  let cat = this;
  cat.removeEventListener("click", clickCat);

  cat.classList.add("paused");
  cat.querySelector("img").classList.add("zoom_out");
  cat.addEventListener("animationend", catGone);
  decrementLives();
}


function mouseGone() {
  let mouse = this;

  mouse.removeEventListener("animationend", mouseGone);
  mouse.querySelector("img").classList.remove("zoom_out");

  mouse.classList.remove("paused");

  mouse.classList.remove("leftzigzag");
  mouse.offsetWidth;
  mouse.classList.add("leftzigzag");

  mouse.addEventListener("click", clickMouse);
}

function catGone() {
  let cat = this;
  cat.removeEventListener("animationend", catGone);

  cat.querySelector("img").classList.remove("zoom_out");

  cat.classList.remove("paused");

  cat.classList.remove("leftzigzag");
  cat.offsetWidth;
  cat.classList.add("leftzigzag");

  cat.addEventListener("click", clickCat);
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
