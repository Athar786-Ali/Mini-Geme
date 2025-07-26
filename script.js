


function playGame(userChoice) {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = options[randomIndex];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw! 🤝";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You Win! 🎉 ${userChoice} beats ${computerChoice}`;
    } else {
        result = `You Lose! 😞 ${computerChoice} beats ${userChoice}`;
    }

    document.getElementById("result").textContent = result;
}

rock.addEventListener('click', () => playGame("rock"));
paper.addEventListener('click', () => playGame("paper"));
scissors.addEventListener('click', () => playGame("scissors"));






 


