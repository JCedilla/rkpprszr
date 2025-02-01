document.addEventListener('DOMContentLoaded', function() {
    let compAnsEl = document.getElementById("comAnsEl");
    let userScoreText = document.getElementById("userScoreText");
    let computerScoreText = document.getElementById("computerScoreText");
    let tryAgainButton = document.getElementById("tryAgainbutton")
    let rockBtn = document.getElementById("rock")
    let paperBtn = document.getElementById("paper")
    let scissorBtn = document.getElementById("scissor")
    let userScore = 0;
    let computerScore = 0;

    // Disable the buttons
    function disableButtons() {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }

    // function to check winner and cap it to 5
    function checkWinner() {
        if (userScore >= 5) {
            compAnsEl.innerText = "You win!";
            disableButtons();
            compAnsEl.innerText = "User wins!"
        } else if (computerScore >= 5) {
            compAnsEl.innerText = "Computer wins!";
            disableButtons();
            compAnsEl.innerText = "Computer wins!"
        }
        
    }

    // Function to update the scores
    function updateScores() {
        userScoreText.innerText = userScore;
        computerScoreText.innerText = computerScore;
        console.log("user is at " + userScore + "points")
        console.log("computer is at " + computerScore + "points")
    }

    // Function to compute the computer's answer
    function computeAns() {
        let computerChoices = ["rock", "paper", "scissors"];
        let randomAnswer = Math.floor(Math.random() * 3);
        compAnsEl.innerText = computerChoices[randomAnswer];
        console.log(randomAnswer);
    }

    // Function when the user picks Rock
    function pickRock() {
        computeAns();
        if (compAnsEl.innerText == "rock") {
            compAnsEl.innerText += " / It's a Tie.";
        } else if (compAnsEl.innerText == "scissors") {
            compAnsEl.innerText += " +1 point to You!";
            userScore++;
        } else if (compAnsEl.innerText == "paper") {
            compAnsEl.innerText += " +1 point to Computer.";
            computerScore++;
        }
        updateScores();
        checkWinner()
    }

    // Function when the user picks Paper
    function pickPaper() {
        computeAns();
        if (compAnsEl.innerText == "paper") {
            compAnsEl.innerText += " / It's a Tie.";
        } else if (compAnsEl.innerText == "rock") {
            compAnsEl.innerText += " +1 point to You!";
            userScore++;
        } else if (compAnsEl.innerText == "scissors") {
            compAnsEl.innerText += " +1 point to Computer.";
            computerScore++;
        }
        updateScores();
        checkWinner()
    }

    // Function when the user picks Scissors
    function pickScissor() {
        computeAns();
        if (compAnsEl.innerText == "scissors") {
            compAnsEl.innerText += " / It's a Tie.";
        } else if (compAnsEl.innerText == "paper") {
            compAnsEl.innerText += " +1 point to You!";
            userScore++;
        } else if (compAnsEl.innerText == "rock") {
            compAnsEl.innerText += " +1 point to Computer.";
            computerScore++;
        }
        updateScores();
        checkWinner()
    }

    function tryAgain() {
        userScore = 0;
        computerScore = 0;
        userScoreText.innerText = userScore;
        computerScoreText.innerText = computerScore;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorBtn.disabled = false;
        compAnsEl.innerText = ""
    }

    // Event listeners for buttons
    document.getElementById("rock").addEventListener("click", pickRock);
    document.getElementById("paper").addEventListener("click", pickPaper);
    document.getElementById("scissor").addEventListener("click", pickScissor);
    document.getElementById("tryAgainbutton").addEventListener("click", tryAgain);
});
