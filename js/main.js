const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
const pc_choice_info = document.getElementById("pc_choice_info");
const player_points = document.getElementById("player_points");
const pc_points = document.getElementById("pc_points");
const bodyElem = document.getElementById("body");

rock_btn.addEventListener('click', () => {
	playGame('rock');
})

paper_btn.addEventListener('click', () => {
	playGame('paper');
})

scissors_btn.addEventListener('click', () => {
	playGame('scissors');
})

function getComputerChoice(){
	let choice = Math.floor(Math.random() * 3) + 1;
	if (choice == 1)
		return "rock";
	else if (choice == 2)
		return "paper";
	else
		return "scissors";
}

function addPoints(winner){
	if (winner == 'player'){
		player_points.textContent = parseInt(player_points.textContent) + 1;
	}
	else{
		pc_points.textContent = parseInt(pc_points.textContent) + 1;
	}
}

function resetGame(){
	pc_choice_info.textContent = '"Game information will be shown here"';
	player_points.textContent = 0;
	pc_points.textContent = 0;
}

function playGame(pChoice){
	let cChoice = getComputerChoice();
	let gameRules = {
		rock: {rock: 'tie', paper: 'lose', scissors: 'win'}, 
		paper: {rock: 'win', paper: 'tie', scissors: 'lose'}, 
		scissors: {rock: 'lose', paper: 'win', scissors: 'tie'}}	
	let result = gameRules[pChoice][cChoice];
	switch (result){
		case 'win':
			pc_choice_info.textContent = `You have chosen ${pChoice}. Computer has chosen ${cChoice}. You win this round!`;
			addPoints('player');
			break;
		case 'lose':
			pc_choice_info.textContent = `You have chosen ${pChoice}. Computer has chosen ${cChoice}. You lose this round`;
			addPoints('pc');
			break;
		case 'tie':
			pc_choice_info.textContent = `You have chosen ${pChoice}. Computer has chosen ${cChoice}. It's a tie!`;
			break;
	}
	if (parseInt(player_points.textContent) == 5){
		alert(`Computer has chosen ${cChoice}, you have reached 5 points and won the game. CONGRATULATIONS!`);
		resetGame();
	}	
	else if (parseFloat(pc_points.textContent) == 5){
		alert(`Computer has chosen ${cChoice}, it has reached 5 points and won the game. I'm very sorry :(`);
		resetGame();
	}
}
	