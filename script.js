const inputArea = document.getElementById('inputArea');
const outputArea = document.getElementById('outputArea');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');
const copyToClipboardToast = document.getElementById('copyToClipboardToast')

/**
 * @param {string} input
 * @returns {string} output
 */
function spongemock(input) {
    let output = '';

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

inputArea.addEventListener('input', (val) => {
    outputArea.value = spongemock(inputArea.value);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(outputArea.value).then(() => {
        const toast = new bootstrap.Toast(copyToClipboardToast);
        toast.show();
    });
});

clearBtn.addEventListener('click', () => {
    inputArea.value = '';
    outputArea.value = '';
});
