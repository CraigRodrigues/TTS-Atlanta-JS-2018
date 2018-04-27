var weapons = ['rock', 'paper', 'scissors'];
var playerOne = 'Craig';
var playerTwo = 'Justin';
var playerOneScore = 0;
var playerTwoScore = 0;

console.log('Player one is: ' + playerOne);
console.log('Player two is: ' + playerTwo);
console.log('--------------');

while (playerOneScore < 3 && playerTwoScore < 3) {
    var playerOneHand = weapons[Math.floor(Math.random() * weapons.length) % 3];
    var playerTwoHand = weapons[Math.floor(Math.random() * weapons.length) % 3];

    console.log(playerOne + "'s hand is: " + playerOneHand);
    console.log(playerTwo + "'s hand is: " + playerTwoHand);

    // deal with equal hands first - draw game
    if (playerOneHand === playerTwoHand) {
        console.log('DRAW GAME!');
    } else if (playerOneHand === 'rock' && playerTwoHand === 'scissors') {
        console.log(playerOne + ' won the hand!');
        playerOneScore++;
    } else if (playerOneHand === 'paper' && playerTwoHand === 'rock') {
        console.log(playerOne + ' won the hand!');
        playerOneScore++;
    } else if (playerOneHand === 'scissors' && playerTwoHand === 'paper') {
        console.log(playerOne + ' won the hand!');
        playerOneScore++;
    } else {
        console.log(playerTwo + ' won the hand!');
        playerTwoScore++;
    }

    console.log('PLAYER SCORES');
    console.log(playerOne + ': ' + playerOneScore);
    console.log(playerTwo + ': ' + playerTwoScore);
    console.log('--------------');

    if (playerOneScore === 3) {
        console.log(playerOne + ' is the winner!');
    } else if (playerTwoScore === 3) {
        console.log(playerTwo + ' is the winner!');
    }
}
