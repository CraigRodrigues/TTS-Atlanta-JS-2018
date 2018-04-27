# Homework 01

1. Read the following tutorial [JavaScript Strings](http://www.javascriptkit.com/javatutors/string4.shtml)
2. Join our Slack Group and Channel
3. Send me your GitHub username via Slack or Email to be added to the organization
4. Make a GitHub repo when submitting your homework. When naming your GitHub repo, please use the following naming convention: `rps_cr_xy` (the project name + your team's initials)
5. Work with your partner to create a game of `Rock Paper Scissors` that runs until one player has _three wins_

    * Store the player names and number of wins for each player in variables
    * Use a while loop to run the game until one player has 3 wins
    * Use this starter code to randomly select an item:

    ```javascript
    var weapons = ['rock', 'paper', 'scissors'];
    var weaponOfChoice =
        weapons[Math.floor(Math.random() * weapons.length) % 3];
    // your code goes here
    ```

    * Output each player's hand to the console
    * Use an `if` or `switch` statement to determine a winner of the round
    * Output the round winner's name to the console
    * Create a way to track how many rounds each player has won
    * When one player wins 3 rounds, announce that player's name as the game winner
    * Email me a link to your REPL or push the code to our class GitHub Organization
    * See below for all possible winning outcomes

![RPS Hands](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/300px-Rock-paper-scissors.svg.png)

# Homework 02

1. After reading about strings please create a repl.it that can console log Mario blocks!
2. Create a variable that dictates the height
3. The blocks should look like this for a height of 5:
    ```javascript
       ##
      ###
     ####
    #####
    ```
4. Use what you know about strings, control flow and conditional statements
5. For extra credit make it so that it console logs like this:
    ```javascript
       ## ##
      ### ###
     #### ####
    ##### #####
    ```
