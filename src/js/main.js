const hexInput = document.querySelector("#hex-input");
const colorField = document.querySelector("#color-field");

hexInput.addEventListener("change", () => {
  setColor(hexInput.value);
});

function setColor(color) {
  colorField.style.background = color;
}