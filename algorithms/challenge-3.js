function alphabetPosition(text) {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    let letter = text[i].toLowerCase();
    if (letters.includes(letter)) {
      result.push(letters.indexOf(letter) + 1);
    }
  }
  return result.join(" ");
}
console.log(alphabetPosition("decadev"))
console.log(alphabetPosition('success'))
console.log(alphabetPosition('developer'))

  module.exports = alphabetPosition