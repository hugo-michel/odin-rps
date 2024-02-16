let scoreComputer = 0;
let scorePlayer = 0;
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const result = document.querySelector("#result");
const divScorePlayer = document.querySelector("#score-joueur");
const divScoreOrdi = document.querySelector("#score-ordi");

divScorePlayer.textContent = `score joueur = ${scorePlayer}`;
divScoreOrdi.textContent = `score ordi = ${scoreComputer}`;

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

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : match nul !`;
	} else if (playerSelection == "ROCK") {
		if (computerSelection == "PAPER") {
			scoreComputer++;
			divScoreOrdi.textContent = `score ordi = ${scoreComputer}`;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : ordi win la manche !`;
		} else if (computerSelection == "SCISSORS") {
			scorePlayer++;
			divScorePlayer.textContent = `score joueur = ${scorePlayer}`;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : player win la manche !`;
		}
	} else if (playerSelection == "PAPER") {
		if (computerSelection == "ROCK") {
			scorePlayer++;
			divScorePlayer.textContent = `score joueur = ${scorePlayer}`;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : player win la manche !`;
		} else if (computerSelection == "SCISSORS") {
			scoreComputer++;
			divScoreOrdi.textContent = `score ordi = ${scoreComputer}`;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : ordi win la manche !`;
		}
	} else if (playerSelection == "SCISSORS") {
		if (computerSelection == "PAPER") {
			scorePlayer++;
			divScorePlayer.textContent = `score joueur = ${scorePlayer}`;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : player win la manche !`;
		} else if (computerSelection == "ROCK") {
			scoreComputer++;
			divScoreOrdi.textContent = `score ordi = ${scoreComputer}`;
			return `player a joué ${playerSelection} et ordi a joué ${computerSelection} : ordi win la manche !`;
		}
	}
}

btnRock.addEventListener("click", function() {
	let computerSelection = getComputerChoice();
	let playerSelection = "ROCK";
	result.textContent = playRound(playerSelection, computerSelection);
	if (scorePlayer === 5) {
		result.textContent = `Match terminé ! le score final est player : ${scorePlayer} et ordi : ${scoreComputer} : player win !`
	};
	if (scoreComputer === 5) {
		result.textContent = `Match terminé ! le score final est player : ${scorePlayer} et ordi : ${scoreComputer} : ordi win !`
	};
});

btnPaper.addEventListener("click", function() {
	let computerSelection = getComputerChoice();
	let playerSelection = "PAPER";
	result.textContent = playRound(playerSelection, computerSelection);
	if (scorePlayer === 5) {
		result.textContent = `Match terminé ! le score final est player : ${scorePlayer} et ordi : ${scoreComputer} : player win !`
	};
	if (scoreComputer === 5) {
		result.textContent = `Match terminé ! le score final est player : ${scorePlayer} et ordi : ${scoreComputer} : ordi win !`
	};
});

btnScissors.addEventListener("click", function() {
	let computerSelection = getComputerChoice();
	let playerSelection = "SCISSORS";
	result.textContent = playRound(playerSelection, computerSelection);
	if (scorePlayer === 5) {
		result.textContent = `Match terminé ! le score final est player : ${scorePlayer} et ordi : ${scoreComputer} : player win !`
	};
	if (scoreComputer === 5) {
		result.textContent = `Match terminé ! le score final est player : ${scorePlayer} et ordi : ${scoreComputer} : ordi win !`
	};
});