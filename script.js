const inputArea = document.getElementById('inputArea');
const outputArea = document.getElementById('outputArea');
const clearBtn = document.getElementById('clearBtn');

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

clearBtn.addEventListener('click', () => {
    inputArea.value = '';
    outputArea.value = '';
});
