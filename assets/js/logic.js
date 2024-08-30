
const body = document.querySelector("body");
const theme =document.querySelector("#theme");
let image =document.querySelector("#image");

let mode = "light";

// Listen for a click event on toggle switch
theme.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "light") {
    mode = "dark";
    body.setAttribute("class", "dark");
    image.src=image.dataset.moon;
    image.dataset.status="dark"
  }
  // If mode is light, apply dark background
  else {
    mode = "light";
    body.setAttribute("class", "light");
    image.src=image.dataset.sun;
    image.dataset.status="dark"
  }
});

