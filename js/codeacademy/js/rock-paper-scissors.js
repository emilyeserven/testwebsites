// Human makes a choice between Rock, Paper, or Scissor.
//  On click, enlarge a little bit. Once clicked, glow blue.
// Computer makes a choice between Rock, Paper, or Scissor.
//  Choice may be what human picked. When chosen, glow red.
// Give a point to the winning side.
// Click a button to reset the round.
// Best out of 3 wins. (So they only need 2 points to win.)

// BONUS: Options for best out of 5 or 10 wins as well.
// BONUS: Custom setting to input the rounds you want to play. Set before playing game.

// Initialize the user and computer scores and set them to 0.
let userScore = 0,
    compScore = 0;

// Store (cache) the DOM nodes that will be modified for later.
const elUserScore = document.getElementById('userScore'),
      elCompScore = document.getElementById('compScore'),
      elUserPick = document.getElementById('userPick'),
      elCompPick = document.getElementById('compPick'),
      elOverallResult = document.getElementById('overallResult');

// The result checking function changed to a lookup object on recommendation of mentor

let gameCheck = {
    "rock": (choice) => {
        if(choice === "paper"){
            console.log("5a. paper > rock");
            return result = ["rock wins", "user"];
        }
        if(choice === "scissors"){
            console.log("5b. rock > scissors");
            return result = ["paper wins", "comp"];
        }
    },
    "paper": (choice) => {
        if(choice === "rock"){
            console.log("5a. paper > rock");
            return result = ["paper wins", "user"];
        }
        if(choice === "scissors"){
            console.log("5c. scissors > paper");
            return result = ["scissors win", "comp"];
        }
    },
    "scissors": (choice) => {
        if(choice === "paper"){
            console.log("5c. scissors > paper");
            return result = ["rock wins", "comp"];
        }
        if(choice === "rock"){
            console.log("5b. rock > scissors");
            return result = ["scissors win", "user"];
        }
    }
}

let compare = (choice1, choice2) => {
    if(!(choice1 in gameCheck) || !(choice2 in gameCheck)){
        console.log("Invalid arguments passed");
        return false;
    }
    if(choice1 === choice2) {
        return result = ["The result is a tie!", "tie"];
    }
    return gameCheck[choice1](choice2);
}


// Set up the function that will allow the computer to make a 'choice'.
let computerRoll = function() {
    console.log("2. Computer is rolling.");
    let computerChoice = Math.random();
    // Above will select a random number between 0 and 1 and store that number in the computerChoice variable.
    // Below if statement will assign Rock, Paper, or Scissors to the number.
    if (computerChoice < 0.34) {
        computerChoice = "rock";
        console.log("3a. Math is " + computerChoice);
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
        console.log("3b. Math is " + computerChoice);
    } else {
        computerChoice = "scissors";
        console.log("3c. Math is " + computerChoice);
    }
    console.log("3sub. Computer Choice is " + computerChoice);
    // Return the string as the variable computerChoice.
    return computerChoice;
};

// Below is the main function that executes whenever a button is clicked. Called whenever an event listener (below) is activated.
let userChoiceFunc = function(choice) {
    //set the function input to be the variable userChoice.
    let userChoice = choice;
    console.log("1. User Choice is " + choice);
    // assign the returned value of the computerRoll function to the variable computerChoice.
    let computerChoice = computerRoll();
    // Compare the two scores with the compare function.
    console.log(compare(userChoice, computerChoice));
    console.log("6. " + result[0]);
    // Immediatly call the getResult function, which will add to the user score, computer score, or neither.
    let getResult = (function() {
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
    // Modify the cached elements (at top) to the new values.
    elUserScore.textContent = userScore;
    elCompScore.textContent = compScore;
    elUserPick.textContent = userChoice;
    elCompPick.textContent = computerChoice;
    elOverallResult.textContent = result[0];
}

//function
//set the userChoice to what the id was
// run through computer choice
// compare
// return result

// For any of the below event listeners, they're activated with a click on a specific element with an ID specified.
// They then call the userChoice function with a specific string value. 
let rockBox = document.getElementById('rock');
rockBox.addEventListener('click', function() {
    userChoiceFunc("rock");
}, false);

let paperBox = document.getElementById('paper');
paperBox.addEventListener('click', function() {
    userChoiceFunc("paper");
}, false);
let scissorBox = document.getElementById('scissors');
scissorBox.addEventListener('click', function() {
    userChoiceFunc("scissors");
}, false);
