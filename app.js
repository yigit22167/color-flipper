const bodyEl = document.querySelector(".body");
const flipButton = document.getElementById("flipBtn");
const colorInfoText = document.getElementById("color-info");

flipButton.addEventListener("click", changeColor);

function changeColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var newColor = "#" + randomColor;
  bodyEl.setAttribute("style", `background-color: ${newColor}`);
  colorInfoText.innerHTML = newColor;
}
