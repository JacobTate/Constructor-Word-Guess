
function Letter(word) { //storing the word to be guessed and updating the hiddentword( the current game state)
    this.randomWord = word;
    this.gameState = [];
    console.log(this.randomWord);
    
    for (var i = 0; i < this.randomWord.length; i++) {
        this.gameState.push("_");
    }
    this.enterGuess = function (letter) {
        var letterInWord = false;
        for (var i = 0; i < this.randomWord.length; i++) {
            if (this.randomWord[i] === letter) {
                letterInWord = true;
                this.gameState.splice(
                    i, // where to delete
                    1, // how many to delete
                    letter // what to add
                );
            }
        }
        console.log(this.gameState);
        if (this.gameState.join("") === this.randomWord.join("")) {

             console.log("Game over!");
         
        }

    }
    
   
}

module.exports = Letter;