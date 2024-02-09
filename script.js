let scoreComputer = 0;
let scorePlayer = 0;

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber == 0) {
		return "ROCK";
	} else if (randomNumber == 1) {
		return "PAPER";
	} else {
		return "SCISSORS";
	}
}

function getPlayerChoice() {
	let choice = prompt("Quel est votre choix ?");
	let playerChoice = choice.toUpperCase();
	return playerChoice;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : match nul !`;
	} else if (playerSelection == "ROCK") {
		if (computerSelection == "PAPER") {
            scoreComputer++;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : ordi win !`;
		} else if (computerSelection == "SCISSORS") {
            scorePlayer++;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : player win !`;
		}
	} else if (playerSelection == "PAPER") {
		if (computerSelection == "ROCK") {
            scorePlayer++;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : player win !`;
		} else if (computerSelection == "SCISSORS") {
            scoreComputer++;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : ordi win !`;
		}
	} else if (playerSelection == "SCISSORS") {
		if (computerSelection == "PAPER") {
            scorePlayer++;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : player win !`;
		} else if (computerSelection == "ROCK") {
            scoreComputer++;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : ordi win !`;
		}
	}
}

function playGame() {
	for (i = 0; i < 5; i++) {
		let playerSelection = getPlayerChoice();
		let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
	}
    if (scorePlayer == scoreComputer) {
        console.log(`match terminé ! le score final est player : ${scorePlayer} et ordi : ${scoreComputer} : match nul !`);
    }
    else if (scorePlayer > scoreComputer) {
        console.log(`match terminé ! le score final est player : ${scorePlayer} et ordi : ${scoreComputer} : player win !`);     
    }
    else if (scorePlayer < scoreComputer) {
        console.log(`match terminé ! le score final est player : ${scorePlayer} et ordi : ${scoreComputer} : ordi win !`);     
    }
}

playGame();