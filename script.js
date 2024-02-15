// selected all HTML Classes
const mainContainer = document.getElementById("main-container");
const input = document.getElementById("input-text");
const copyBtn = document.getElementById("copyBtn");
const changeBgButton = document.getElementById("changeBtn");

// Window onload function
window.onload = () => {
  mainFun();
};

// Created mainFun function
function mainFun() {
  changeBgButton.addEventListener("click", function () {
    const bgColor = generatedHexColor();
    mainContainer.style.backgroundColor = bgColor;
    input.value = bgColor;
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(input.value);
    generateToastMsg(`${input.value} Copied`);
  });
}

// Background color generated function

function generatedHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// generateToastMsg function
function generateToastMsg(msg) {
  const div = document.createElement("div");
  div.innerText = msg;
  div.className = "toastMsg toast-message-slide-in";
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    div.addEventListener("animationend", function () {
      div.remove();
    });
  });
  document.body.appendChild(div);
}
