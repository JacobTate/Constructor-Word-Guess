var Letter = require("./letter");
var wordArr = ["dog", "cat", "house", "jazz", "truck", "variable", "burnout"];

function randWord() {
    random_word = wordArr[Math.floor(Math.random() * wordArr.length)];
    return random_word
}
random_word = randWord();
var word_holder = new Letter(random_word.split(""));

function Word(letters) {

    // random_word.split();
    // console.log(random_word.length);
    word_holder.enterGuess(letters)




}
module.exports = Word