"use strict";
console.log("hallo world");
window.addEventListener("load", start);

function start() {
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
}

function mouse1Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#mouse1_container")
    .removeEventListener("animationend", mouse1Gone);

  // fjern forsvind-animation
  document.querySelector("#mouse1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#mouse1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#mouse1_container").classList.remove("rightzigzag");
  document.querySelector("#mouse1_container").offsetWidth;
  document.querySelector("#mouse1_container").classList.add("rightzigzag");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#mouse1_container")
    .addEventListener("click", clickMouse1);
}

function mouse2Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#mouse2_container")
    .removeEventListener("animationend", mouse2Gone);

  // fjern forsvind-animation
  document.querySelector("#mouse2_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#mouse2_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#mouse2_container").classList.remove("leftzigzag");
  document.querySelector("#mouse2_container").offsetWidth;
  document.querySelector("#mouse2_container").classList.add("leftzigzag");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#mouse2_container")
    .addEventListener("click", clickMouse2);
}

function cat1Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#cat1_container")
    .removeEventListener("animationend", cat1Gone);

  // fjern forsvind-animation
  document.querySelector("#cat1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#cat1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#cat1_container").classList.remove("leftzigzag");
  document.querySelector("#cat1_container").offsetWidth;
  document.querySelector("#cat1_container").classList.add("leftzigzag");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#cat1_container")
    .addEventListener("click", clickCat1);
}

function cat2Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#cat2_container")
    .removeEventListener("animationend", cat2Gone);

  // fjern forsvind-animation
  document.querySelector("#cat2_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#cat2_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#cat2_container").classList.remove("rightzigzag");
  document.querySelector("#cat2_container").offsetWidth;
  document.querySelector("#cat2_container").classList.add("rightzigzag");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#cat2_container")
    .addEventListener("click", clickCat2);
}
