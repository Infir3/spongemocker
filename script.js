const inputArea = document.getElementById("inputArea");
const outputArea = document.getElementById("outputArea");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

/**
 * @param {string} input
 * @returns {string} output
 */
function spongemock(input) {
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    if (i % 2 === 0) {
      output += currentChar.toLowerCase();
    } else {
      output += currentChar.toUpperCase();
    }
  }

  return output;
}

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
  }).showToast();
});

clearBtn.addEventListener("click", () => {
  inputArea.value = "";
  outputArea.value = "";
});
