const flw1 = document.querySelector("#flower1");
const flw2 = document.querySelector("#flower2");
const flw3 = document.querySelector("#flower3");

window.addEventListener("load", sidenVises);

function sidenVises() {
  flw1.classList.add("pulse1");
  flw2.classList.add("pulse2");
  flw3.classList.add("pulse2");

  flw1.addEventListener("click", clickDrejBlomst1);
  flw2.addEventListener("click", clickDrejBlomst2);
  flw3.addEventListener("click", clickDrejBlomst3);
}

function clickDrejBlomst1() {
  console.log("clickDrejBlomst");
  flw1.classList.add("drej");

  flw1.addEventListener("animationend", stopAnimation);
}

function clickDrejBlomst2() {
  flw2.classList.add("drej");

  flw2.addEventListener("animationend", stopAnimation);
}

function clickDrejBlomst3() {
  flw3.classList.add("drej");

  flw3.addEventListener("animationend", stopAnimation);
}

function stopAnimation() {
  console.log("stopAnimation");
  flw1.classList.remove("drej");
  flw2.classList.remove("drej");
  flw3.classList.remove("drej");
  flw1.classList.add("pulse1");
  flw2.classList.add("pulse2");
  flw3.classList.add("pulse2");
}
