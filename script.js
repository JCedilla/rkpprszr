document.addEventListener('DOMContentLoaded', function() {
    let compAnsEl = document.getElementById("comAnsEl");
    let userScoreText = document.getElementById("userScoreText");
    let computerScoreText = document.getElementById("computerScoreText");
    let tryAgainButton = document.getElementById("tryAgainbutton");
    let rockBtn = document.getElementById("rock");
    let paperBtn = document.getElementById("paper");
    let scissorBtn = document.getElementById("scissor");

    let userScore = 0;
    let computerScore = 0;

    // Disable the buttons
    function disableButtons() {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }

    // Function to check winner and cap it to 5
    function checkWinner() {
        if (userScore >= 5) {
            compAnsEl.innerText = "User wins!";
            disableButtons();
        } else if (computerScore >= 5) {
            compAnsEl.innerText = "Computer wins!";
            disableButtons();
        }
    }

    // Function to update the scores
    function updateScores() {
        userScoreText.innerText = userScore;
        computerScoreText.innerText = computerScore;
        console.log(`User: ${userScore} | Computer: ${computerScore}`);
    }

    // Function to compute the computer's answer
    function computeAns() {
        let computerChoices = ["rock", "paper", "scissors"];
        let randomAnswer = Math.floor(Math.random() * 3);
        return computerChoices[randomAnswer]; // Return choice instead of setting innerText
    }

    // Function to determine the winner based on user and computer choices
    function playGame(userChoice) {
        let computerChoice = computeAns();
        compAnsEl.innerText = `Computer chose ${computerChoice}`;

        if (userChoice === computerChoice) {
            compAnsEl.innerText += " / It's a Tie.";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            compAnsEl.innerText += " +1 point to You!";
            userScore++;
        } else {
            compAnsEl.innerText += " +1 point to Computer.";
            computerScore++;
        }

        updateScores();
        checkWinner();
    }

    // Function to reset the game
    function tryAgain() {
        userScore = 0;
        computerScore = 0;
        updateScores();
        compAnsEl.innerText = "";
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorBtn.disabled = false;
    }

    // Event listeners for buttons
    rockBtn.addEventListener("click", () => playGame("rock"));
    paperBtn.addEventListener("click", () => playGame("paper"));
    scissorBtn.addEventListener("click", () => playGame("scissors"));
    tryAgainButton.addEventListener("click", tryAgain);
});
