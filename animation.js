const flower1 = document.querySelector("#flower1");
const flower2 = document.querySelector("#flower2");
const flower3 = document.querySelector("#flower3");

window.addEventListener("load", sidenVises);

function sidenVises() {
  flower1.classList.add("pulse1");
  flower2.classList.add("pulse2");
  flower3.classList.add("pulse2");
}
