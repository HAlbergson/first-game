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
}

function clickMouse1() {
  console.log("virker det");
  document
    .querySelector("#mouse1_container")
    .removeEventListener("click", clickMouse);

  document.querySelector("#mouse1_container").classList.add("paused");
  document.querySelector("#mouse1_sprite").classList.add("zoom_out");
}

function clickMouse2() {
  console.log("virker det2");
  document
    .querySelector("#mouse2_container")
    .removeEventListener("click", clickMouse1);

  document.querySelector("#mouse2_container").classList.add("paused");
  document.querySelector("#mouse2_sprite").classList.add("zoom_out");
}

function clickCat1() {
  console.log("virker det3");
  document
    .querySelector("#mcat1_container")
    .removeEventListener("click", clickCat1);

  document.querySelector("#cat1_container").classList.add("paused");
  document.querySelector("#cat1_sprite").classList.add("zoom_out");
}
function clickCat2() {
  console.log("virker det3");
  document
    .querySelector("#mcat2_container")
    .removeEventListener("click", clickCat2);

  document.querySelector("#cat2_container").classList.add("paused");
  document.querySelector("#cat2_sprite").classList.add("zoom_out");
}
