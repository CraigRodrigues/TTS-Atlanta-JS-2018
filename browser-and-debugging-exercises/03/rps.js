var hands = ['rock', 'paper', 'scissors'];

var playerOne = {
    name: null,
    hand: null
};

var playerTwo = {
    name: null,
    hand: null
};

function getHand() {
    var randomIndex = Math.floor(Math.random() * 3);

    return hands[randomIndex];
}

// plays only one round - called by playGame
function playRound(player1, player2) {
    var winMap = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    player1.hand = getHand();
    player2.hand = getHand();

    if (player1.hand === player2.hand) {
        console.log('It is a tie');
        console.log('Hands played: ' + player1.hand);

        return null;
    } else if (player1.hand === winMap[player2.hand]) {
        return player1;
    } else {
        return player2;
    }
}

// takes in two player objects and the total number of rounds to play
function playGame(player1, player2, playUntil) {
    player1.score = 0;
    player2.score = 0;

    console.log('Player one is: ' + player1.name);
    console.log('Player two is: ' + player2.name);

    while (player1.score < playUntil && player2.score < playUntil) {
        var winner = playRound(player1, player2);

        if (winner) {
            winner.score++;

            if (player1.score === playUntil) {
                return player1;
            } else if (player2.score === playUntil) {
                return player2;
            }
        }
    }
}
