function versus (player_choice, computer_choice) {
    if(player_choice == computer_choice) {
        return "Tie";
    }
    //Player loses
    else if ((player_choice == "rock" && computer_choice == "paper") || 
    (player_choice == "paper" && computer_choice == "scissors") ||
    (player_choice == "scissors" && computer_choice == "rock")) {
        return "Computer Wins";
    }
    else {
        return "Player Wins";
    }
}

const options = ["scissors", "paper", "rock"];
const computer_choice = options[Math.floor(Math.random() * options.length)];
let player_choice = window.prompt("Enter your choice: ");

console.log("Computer Plays: " + computer_choice);
console.log("Player Plays: " + player_choice);
console.log(versus(player_choice, computer_choice));