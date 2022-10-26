const raiz  =  document.documentElement;
const newElementDiv = document.createElement("div");
const div = document.querySelector('div');

clase = document.styleSheets[0].cssRules[1].style;
clase.setProperty("display", "inline-block");

raiz.style.setProperty("--color" , "#854");
newElementDiv.classList.add("caja");
const body = document.querySelector("body");
body.appendChild(newElementDiv);

const newElementDiv2 = document.createElement("div");
newElementDiv2.classList.add("caja");
body.appendChild(newElementDiv2);

const newElementDiv3 = document.createElement("div");
newElementDiv3.classList.add("caja");
body.appendChild(newElementDiv3);





