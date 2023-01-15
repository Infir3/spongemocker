import { spongemock } from "./spongemock.js";

const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

textInput.addEventListener("input", () => {
  textOutput.value = spongemock(textInput.value);
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
    callback: () => textInput.focus(), // Invoked when the toast is dismissed
  }).showToast();
});

clearBtn.addEventListener("click", () => {
  textInput.value = "";
  textOutput.value = "";
  textInput.focus();
});

window.addEventListener("DOMContentLoaded", () => {
  textInput.focus();
});
