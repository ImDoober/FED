// JavaScript Document
var menuButton = document.querySelector("header button");

menuButton.onclick = openMenu;

function openMenu() {
  var deNav = document.querySelector("nav");
  var deHeader = document.querySelector("header");
  deNav.classList.toggle("toonMenu");
  deHeader.classList.toggle("headerSize");
}
