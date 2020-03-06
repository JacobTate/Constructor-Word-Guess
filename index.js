var inquirer = require("inquirer");
var Word = require("./word")
var counter = 8;

function repeat() {
    if (counter > 0) {
        inquirer.prompt([{
            type: "input",
            message: "guess a letter",
            name: "usrLetter"
        }]).then(function (inquirerRes) {
            var guess = inquirerRes.usrLetter;
            new Word(guess) 
                repeat();
            counter --;
     
        });
    }
    else{
        console.log("You loose :(");
        
    }
  
   
    
}
repeat();
