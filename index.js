var inquirer = require("inquirer");
var Word = require("./word")
var counter = 9;
function repeat(){
    if(counter > 0){
inquirer.prompt([
    {
        type: "input",
        message: "guess a letter",
        name: "usrLetter"
    }
]).then(function(inquirerRes){
var guess = inquirerRes.usrLetter;
new Word(guess)



        repeat();
    counter --
    console.log(counter);
    

});
}
}
repeat();