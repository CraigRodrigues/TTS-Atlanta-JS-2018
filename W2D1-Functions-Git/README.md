# W2D1 - Functions & Git

## Itinerary

- Knowledge checks
- Review arrays, objects, loops and functions
- Gratuity challenge
- Intro to Git & Github
- Fork practice homework
- Start on homework (Function practice and RPS II)

## Knowledge Checks

- [Variables, Strings and More](https://goo.gl/forms/oquB5pusZ9W2R96h1)
- [Arrays](https://goo.gl/forms/AQUq3VtG27gvyov43)
- [Objects](https://goo.gl/forms/SMSlJwCnYNTpSXFT2)

## Slides
- [JavaScript Arrays, Objects, Loops, Functions](http://slides.com/pagingcraig/objects-arrays-loops-functions)
- [Git and Github](http://slides.com/pagingcraig/git-and-github)

## Useful Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

## Homework

- Complete [Try Git](https://try.github.io/levels/1/challenges/1)
- Complete [Function Practice Problems](https://github.com/TTSAtlantaJS/functions-practice) and pass all tests
- Complete Rock, Paper, Scissors (Revisited) Challenge (below)

## Rock, Paper, Scissors (Revisisted)

1. Define a `hands` array with the values 'rock', 'paper', and 'scissors';
2. Define a function called `getHand()` that returns a hand from the array using `parseInt(Math.random()*10)%3` 
4. Define two objects for two players. Each player has `name` and `getHand()` properties.
5. Define a function called `playRound()` that 
 	- Takes two player objects as arguments 
 	- Gets hands from each
 	- Determines the winner
 	- Logs the hands played and name of the winner.
 	- If its a tie, log the hands played and "it's a tie".
 	- Returns the winner object (null if no winner)
6. Define a function called `playGame()` that takes arguments `player1`, `player2`, and `playUntil`.
	- Play rounds until one of the players wins `playUntil` hands
	- When one player has won enough games, return the winning player object
7. Play a game to 5 wins

**Bonus**

- Define a function caled `playTournament()`
	- Take 4 players and `playUntil` as arguments
	- Play a game between the first two players, and the second two players
	- Play a game between the winners of the first round.
	- Announce the tournament winner's name `"[name] is the world champion"`
