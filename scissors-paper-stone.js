function versus (player_choice, computer_choice) {
    if(player_choice == computer_choice) {
        return 0;
    }
    //Player loses
    else if ((player_choice == "rock" && computer_choice == "paper") || 
    (player_choice == "paper" && computer_choice == "scissors") ||
    (player_choice == "scissors" && computer_choice == "rock")) {
        return -1;
    }
    else {
        return 1;
    }
}

const options = ["scissors", "paper", "rock"];
let player_score = 0;
let computer_score = 0;
let result = "";


for (let i = 0; i < 5; i++) {
    let player_choice = window.prompt("Enter your choice: ");
    const computer_choice = options[Math.floor(Math.random() * options.length)];    
    console.log("Computer Plays: " + computer_choice);
    console.log("Player Plays: " + player_choice);
    result = versus(player_choice, computer_choice);

    if(result == 0) {
        console.log("It's a draw");
    }

    else if(result == -1) {
        console.log("Computer Wins");
        computer_score++;
    }

    else {
        console.log("Player Wins");
        player_score++;
    }
}

console.log("Final Scores:");
console.log("Computer Scores: " + computer_score);
console.log("Player Scores: " + player_score);

if(player_score > computer_score) {
    console.log("Player Wins");
}
else {
    console.log("Computer Wins");
}

