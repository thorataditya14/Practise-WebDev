// default player names
var player1 = "Player 1";
var player2 = "Player 2";

// Function to roll the dice
function rollDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        if(randomNumber1 > randomNumber2)
            document.querySelector("h1").innerHTML = (player1 + " Wins!");
        else if (randomNumber1 < randomNumber2)
            document.querySelector("h1").innerHTML = (player2 + " Wins!");
        else
            document.querySelector("h1").innerHTML = "Draw!";
        
        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    }, 50);
}

// Function to edit player names
function editNames() {
    player1 = prompt("Enter Player1 name");
    player2 = prompt("Enter player2 name");

    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
}