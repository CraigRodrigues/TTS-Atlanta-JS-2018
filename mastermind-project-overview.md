# Final Project: Mastermind

![Mastermind Boardgame](https://kek.gg/i/6vnmVQ.jpeg)

## About
[Wikipedia](https://en.wikipedia.org/wiki/Mastermind_(board_game))
[Rules]()

## Overview

The final project is to recreate the game Mastermind in React using everything you've learned so far. 🎉

## Project Creation Process

1. Design the game model in pure javascript (objects and methods) - what tests would you need to write?
    1. Use a whiteboard or a piece of water
    1. How do you represent the pegs and colors?
    1. What do you store in this game object? Timestamp, player, all the guesses?
1. What will the data look like in Firebase Firestore? Collections and Documents?
1. Sketch out basic UI design
1. Figure out the components you need
1. Where should state live? Try drawing a tree diagram.
1. How would you handle authentication?
1. Create a working app WITHOUT any styling or pretty graphics - this should only be worked on once the basics of the game are working
1. Only add one feature at a time!
1. Commit often!
1. [Work using feature branches!](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
1. Tracking your planned features and progress with a tool like [Trello](https://trello.com/b/C4Awm5lK/kanban-board)

![Trello Board](https://kek.gg/i/36Mys9.jpeg)

## Requirements

Your goal is to complete the MVP requirements, but over time you can shoot towards advanced and nightmare to really flesh out the game!

### MVP (Minimum Viable Product)

- A player should be able to pick the number of rounds or difficulty (8, 10 or 12 rounds)
- The computer should generate the secret code
- Make the board look similar to the actual Mastermind board
- Have a way to show the rules/how to play
- Show the proper response to player guesses
- Show the number of rounds remaining and the full board
- Show the secret code if the player guesses correct or cannot guess within the allotted rounds
- Style the app so it looks good

### Advanced

- Add authentication and player profiles
- Add a leaderboard with the fastest game times/lowest number of rounds
- Allow players to see their past game history with their guesses, secret code and time it took to complete
- Limit the amount of time a user has to make a guess and show a countdown timer
- [Learn Jest](https://facebook.github.io/jest/docs/en/getting-started.html) (Facebook’s testing library) and implement tests around the games basic functionality and win conditions

### Nightmare

- Make the game multiplayer where each person trades off being the codebreaker guessing the secret
    1. Think how Firestore's realtime updates can make this possible
    1. Whoever guesses correctly wins the game
    1. Allow the player to choose the number of total games to play (and the number of rounds per game)
- Add another multiplayer game mode where one player is the codemaker and the other player is the codebreaker. The players can switch off between games and play best of 5/7/9.
- Add a game lobby
- Add chat
- [Learn Enzyme](https://facebook.github.io/jest/docs/en/tutorial-react.html#dom-testing) to do DOM testing for your components.
