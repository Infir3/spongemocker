/**
 * Spongemocks the given input text.
 * @param {string} input
 * @returns {string}
 */
export function spongemock(input) {
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
