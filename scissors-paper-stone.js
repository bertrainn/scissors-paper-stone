const options_0 = ["Scissor", "Paper", "Rock"];
const options_1 = ["Scissor", "Paper", "Rock", "Lizard", "Spock"];
let result = 0;
let game_mode = 0; 
let computer_score = 0;
let player_score = 0;

const change_button = document.getElementById("change_game");
const game_header_text = document.getElementById("game_header_text");

const header_text = document.getElementById("header_text");
const header_subtext = document.getElementById("header_subtext");

const player_icon = document.getElementById("player_icon");
const computer_icon = document.getElementById("computer_icon");
const player_score_value = document.getElementById("player_score");
const computer_score_value = document.getElementById("computer_score");

const rock_btn = document.getElementById("rock_btn");
const scissor_btn = document.getElementById("scissor_btn");
const paper_btn = document.getElementById("paper_btn");
const spock_btn = document.getElementById("spock_btn");
const lizard_btn = document.getElementById("lizard_btn");
const gun_btn = document.getElementById("gun_btn");

const modal = document.getElementById('modal');
const overlay = document.getElementById("overlay");
const endgametext = document.getElementById("endgametext");
const reset_btn = document.getElementById("reset_btn");

change_button.addEventListener("click", () => {
    resetGame();
    spock_btn.classList.toggle("hide");
    lizard_btn.classList.toggle("hide");
    if (game_mode == 0) {
        game_mode = 1;
        game_header_text.innerText ="Rock Paper Scissors Lizard Spock";
    }
    else {
        game_mode = 0;
        game_header_text.innerText ="Rock Paper Scissors The Game";
    }
    
});

rock_btn.addEventListener("click", () => playRound("Rock", game_mode));
paper_btn.addEventListener("click", () => playRound("Paper", game_mode));
scissor_btn.addEventListener("click", () => playRound("Scissor", game_mode));
spock_btn.addEventListener("click", () => playRound("Spock", game_mode));
lizard_btn.addEventListener("click", () => playRound("Lizard", game_mode));
gun_btn.addEventListener("click", () => playRound("Gun", game_mode));

reset_btn.addEventListener("click", () => resetGame());
overlay.addEventListener("click", () => closeModal());

function playRound (player_choice, game_mode) { 
    let computer_choice = "";
    if (game_mode == '1') {
        computer_choice = options_1[Math.floor(Math.random() * options_1.length)]; 
    }
    else {
        computer_choice = options_0[Math.floor(Math.random() * options_0.length)]; 
    }

    updateIcon(player_choice, computer_choice);
    const result = versus (player_choice, computer_choice);
    updateScore(result);

    if(gameOver(player_score, computer_score)) {
        openModal();
        displayEndGameText();
    }
}

function versus (player_choice, computer_choice) {
    if(player_choice=="Gun") {
        header_subtext.textContent = "Gun Beats Everything";
        return 1;
    }

    if(player_choice == computer_choice) {
        header_subtext.textContent = `${player_choice} ties with ${computer_choice}`;
        return 0;
    }
    //Player loses
    else if ((player_choice == "Rock" && computer_choice == "Paper") || 
    (player_choice == "Spock" && computer_choice == "Paper") ||

    (player_choice == "Paper" && computer_choice == "Scissor") ||
    (player_choice == "Lizard" && computer_choice == "Scissor") ||

    (player_choice == "Scissor" && computer_choice == "Rock") ||
    (player_choice == "Lizard" && computer_choice == "Rock") ||

    (player_choice == "Scissor" && computer_choice == "Spock") ||
    (player_choice == "Rock" && computer_choice == "Spock") ||

    (player_choice == "Spock" && computer_choice == "Lizard") ||
    (player_choice == "Paper" && computer_choice == "Lizard")) {
        header_subtext.textContent = `${computer_choice} beats ${player_choice}`;
        return -1;
    }

    else {
        header_subtext.textContent = `${player_choice} beats ${computer_choice}`;
        return 1;
    }
}

function gameOver (player_score, computer_score) {
    return (player_score == 5 || computer_score == 5);
}

function updateIcon (player_choice, computer_choice) {
    switch (player_choice) {
        case 'Rock':
            player_icon.textContent = '🪨';
            break;
        case 'Paper':
            player_icon.textContent = '🧻';
            break;
        case 'Scissor':
            player_icon.textContent = '✂️';
            break;
        case 'Spock':
            player_icon.textContent = '🖖';
            break;
        case 'Lizard':
            player_icon.textContent = '🦎';
            break
        case 'gun':
            player_icon.textContent = '🔫';
            break
      }
    
      switch (computer_choice) {
        case 'Rock':
            computer_icon.textContent = '🪨';
            break;
        case 'Paper':
            computer_icon.textContent = '🧻';
            break;
        case 'Scissor':
            computer_icon.textContent = '✂️';
            break;
        case 'Spock':
            computer_icon.textContent = '🖖';
            break;
        case 'Lizard':
            computer_icon.textContent = '🦎';
            break
      }
}

function updateScore (result) {
    if(result == 1) {
        header_text.textContent = "You Win!";
        player_score++;
    }  
    else if (result == -1) {
        header_text.textContent = "You Lose!";
        computer_score++;
    }  
    else {
        header_text.textContent = "It's A Tie!";
    }
    player_score_value.textContent = `Player: ${player_score}`;
    computer_score_value.textContent = `Computer: ${computer_score}`;
}

function openModal () {
    modal.classList.add(`active`);
    overlay.classList.add(`active`);
}

function closeModal () {
    modal.classList.remove(`active`);
    overlay.classList.remove(`active`);
}

function displayEndGameText (){
    return player_score > computer_score ? (endgametext.textContent="You Win!") : (endgametext.textContent="You Lose!");
}

function resetGame () {
    
    header_text.textContent = "Please Make Your Choice";
    header_subtext.textContent ="First To 5 Points Wins";

    computer_score = 0;
    player_score = 0;
    player_score_value.textContent = `Player: ${player_score}`;
    computer_score_value.textContent = `Computer: ${computer_score}`;

    player_icon.textContent = '?';
    computer_icon.textContent = '?';


    closeModal();
}