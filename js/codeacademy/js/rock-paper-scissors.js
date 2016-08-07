// Human makes a choice between Rock, Paper, or Scissor.
//  On click, enlarge a little bit. Once clicked, glow blue.
// Computer makes a choice between Rock, Paper, or Scissor.
//  Choice may be what human picked. When chosen, glow red.
// Give a point to the winning side.
// Click a button to reset the round.
// Best out of 3 wins. (So they only need 2 points to win.)

// BONUS: Options for best out of 5 or 10 wins as well.
// BONUS: Custom setting to input the rounds you want to play. Set before playing game.


var userScore = 0;
var compScore = 0;


var elUserScore = document.getElementById('userScore');
var elCompScore = document.getElementById('compScore');

//ORIGINAL CODE FROM CODECADEMY:


var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        console.log("5a. Tie.");
        return result = ["The result is a tie!", "tie"];
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            console.log("5b. rock > scissors");
            return result = ["rock wins", "user"];
        } else if (choice2 === "paper") {
            console.log("5c. paper > rock");
            return result = ["paper wins", "comp"];
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            console.log("5d. paper > rock");
            return result = ["paper wins", "user"];
        } else if (choice2 === "scissors") {
            console.log("5e. scissors > paper");
            return result = ["scissors win", "comp"];
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            console.log("5f. rock > scissors");
            return result = ["rock wins", "comp"];
        } else if (choice2 === "paper") {
            console.log("5g. scissors > paper");
            return result = ["scissors win", "user"];
        }
    }
}

var computerRoll = function() {
    console.log("2. Computer is rolling.");
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        var computerChoice = "rock";
        console.log("3a. Math is " + computerChoice);
    } else if(computerChoice <= 0.67) {
        var computerChoice = "paper";
        console.log("3b. Math is " + computerChoice);
    } else {
        var computerChoice = "scissors";
        console.log("3c. Math is " + computerChoice);
    }
    console.log("3sub. Computer Choice is " + computerChoice);
    return computerChoice;
};

var userChoice = function(choice) {
    var userChoice = choice;
    console.log("1. User Choice is " + choice);
    var computerChoice = 0;
    console.log(compare(userChoice, computerRoll()));
    console.log("6. " + result[0]);
    var getResult = (function() {
        if (result[1] === "user") {
            userScore++;
            console.log("7a. Add one to user! userScore is now " + userScore);
            return userScore;
        } else if (result[1] === "comp") {
            compScore++;
            console.log("7b. Add one to computer! compScore is now " + compScore);
            return compScore;
        } else if (result[1] === "tie") {
            console.log("7c. It was a tie!")
        }
    } () );
    console.log("User Score is now " + userScore + ", while Computer Score is now " + compScore + ".");
    elUserScore.textContent = userScore;
    elCompScore.textContent = compScore;
}

//function
//set the userChoice to what the id was
// run through computer choice
// compare
// return result


var rockBox = document.getElementById('rock');
rockBox.addEventListener('click', function() {
    userChoice("rock");
}, false);

var paperBox = document.getElementById('paper');
paperBox.addEventListener('click', function() {
    userChoice("paper");
}, false);
var scissorBox = document.getElementById('scissors');
scissorBox.addEventListener('click', function() {
    userChoice("scissors");
}, false);
