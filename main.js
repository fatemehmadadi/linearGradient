"use strict";
const colorBox = document.querySelector(".color_box");
const colorInput = document.querySelectorAll(".color-input");
const selectInput = document.querySelector(".select-input");
const code = document.querySelector(".code");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");

const changer = () => {
  const valueOne = colorInput[0].value;
  const valueTwo = colorInput[1].value;
  const value = selectInput.value;
  colorBox.style.backgroundImage = `linear-gradient(${value}, ${valueOne}, ${valueTwo})`;
  code.value = `linear-gradient(${value}, ${valueOne}, ${valueTwo});`;
};

const copyFun = () => {
  if (code.value) {
    code.select();
    code.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(code.value);
    alert("Copied the text");
  }
};

const resetFun = () => {
  code.value = ``;
  colorInput[0].value = "#e7eb09";
  colorInput[1].value = "#c55f0c";
  selectInput.value = "to right";
  colorBox.style.backgroundImage =
    "linear-gradient(to right, #e7eb09, #c55f0c)";
};
colorInput.forEach((el) => {
  el.addEventListener("change", changer);
});
selectInput.addEventListener("input", changer);
copyBtn.addEventListener("click", copyFun);
resetBtn.addEventListener("click", resetFun);
