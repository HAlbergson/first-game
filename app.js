"use strict";
console.log("hallo world");
window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  points = 0;
  lives = 3;
  console.log("noob");
  document.querySelector("#mouse1_container").classList.add("rightzigzag");
  document.querySelector("#mouse2_container").classList.add("leftzigzag");
  document.querySelector("#cat1_container").classList.add("leftzigzag");
  document.querySelector("#cat2_container").classList.add("rightzigzag");

  document
    .querySelector("#mouse1_container")
    .addEventListener("mousedown", clickMouse1);
  document
    .querySelector("#mouse2_container")
    .addEventListener("mousedown", clickMouse2);
  document
    .querySelector("#cat1_container")
    .addEventListener("mousedown", clickCat1);
  document
    .querySelector("#cat2_container")
    .addEventListener("mousedown", clickCat2);
}

function clickMouse1() {
  console.log("virker det");
  document
    .querySelector("#mouse1_container")
    .removeEventListener("click", clickMouse1);

  document.querySelector("#mouse1_container").classList.add("paused");
  document.querySelector("#mouse1_sprite").classList.add("zoom_out");
  document
    .querySelector("#mouse1_container")
    .addEventListener("animationend", mouse1Gone);
  incrementPoints();
}

function clickMouse2() {
  console.log("virker det2");
  document
    .querySelector("#mouse2_container")
    .removeEventListener("click", clickMouse1);

  document.querySelector("#mouse2_container").classList.add("paused");
  document.querySelector("#mouse2_sprite").classList.add("zoom_out");
  document
    .querySelector("#mouse2_container")
    .addEventListener("animationend", mouse2Gone);
  incrementPoints();
}

function clickCat1() {
  console.log("virker det3");
  document
    .querySelector("#cat1_container")
    .removeEventListener("click", clickCat1);

  document.querySelector("#cat1_container").classList.add("paused");
  document.querySelector("#cat1_sprite").classList.add("zoom_out");
  document
    .querySelector("#cat1_container")
    .addEventListener("animationend", cat1Gone);
  decrementLives();
}
function clickCat2() {
  console.log("virker det3");
  document
    .querySelector("#cat2_container")
    .removeEventListener("click", clickCat2);

  document.querySelector("#cat2_container").classList.add("paused");
  document.querySelector("#cat2_sprite").classList.add("zoom_out");
  document
    .querySelector("#cat2_container")
    .addEventListener("animationend", cat2Gone);
  decrementLives();
}

function mouse1Gone() {

  document
    .querySelector("#mouse1_container")
    .removeEventListener("animationend", mouse1Gone);


  document.querySelector("#mouse1_sprite").classList.remove("zoom_out");


  document.querySelector("#mouse1_container").classList.remove("paused");


  document.querySelector("#mouse1_container").classList.remove("rightzigzag");
  document.querySelector("#mouse1_container").offsetWidth;
  document.querySelector("#mouse1_container").classList.add("rightzigzag");


  document
    .querySelector("#mouse1_container")
    .addEventListener("click", clickMouse1);
}

function mouse2Gone() {
  document
    .querySelector("#mouse2_container")
    .removeEventListener("animationend", mouse2Gone);

  document.querySelector("#mouse2_sprite").classList.remove("zoom_out");

  document.querySelector("#mouse2_container").classList.remove("paused");

  document.querySelector("#mouse2_container").classList.remove("leftzigzag");
  document.querySelector("#mouse2_container").offsetWidth;
  document.querySelector("#mouse2_container").classList.add("leftzigzag");

  document
    .querySelector("#mouse2_container")
    .addEventListener("click", clickMouse2);
}

function cat1Gone() {
  document
    .querySelector("#cat1_container")
    .removeEventListener("animationend", cat1Gone);

  document.querySelector("#cat1_sprite").classList.remove("zoom_out");

  document.querySelector("#cat1_container").classList.remove("paused");

  document.querySelector("#cat1_container").classList.remove("leftzigzag");
  document.querySelector("#cat1_container").offsetWidth;
  document.querySelector("#cat1_container").classList.add("leftzigzag");

  document
    .querySelector("#cat1_container")
    .addEventListener("click", clickCat1);
}

function cat2Gone() {

  document
    .querySelector("#cat2_container")
    .removeEventListener("animationend", cat2Gone);


  document.querySelector("#cat2_sprite").classList.remove("zoom_out");

  document.querySelector("#cat2_container").classList.remove("paused");

  document.querySelector("#cat2_container").classList.remove("rightzigzag");
  document.querySelector("#cat2_container").offsetWidth;
  document.querySelector("#cat2_container").classList.add("rightzigzag");

  document
    .querySelector("#cat2_container")
    .addEventListener("click", clickCat2);
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
