import { spongemock } from "./spongemock.js";

const inputArea = document.getElementById("inputArea");
const outputArea = document.getElementById("outputArea");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

inputArea.addEventListener("input", () => {
  outputArea.value = spongemock(inputArea.value);
});

// instantiate ClipboardJS by passing the HTML element of the copy button
new ClipboardJS(copyBtn);

copyBtn.addEventListener("click", () => {
  Toastify({
    text: "Output copied to clipboard!",
    duration: 2000,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    style: {
      background: "green",
    },
    callback: () => inputArea.focus(), // Invoked when the toast is dismissed
  }).showToast();
});

clearBtn.addEventListener("click", () => {
  inputArea.value = "";
  outputArea.value = "";
  inputArea.focus();
});

window.addEventListener("DOMContentLoaded", () => {
  inputArea.focus();
});
