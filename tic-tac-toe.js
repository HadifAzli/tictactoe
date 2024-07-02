/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

// The board object used to save the current status of a gameplay
let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    board[position] = mark; /*when user's input on the board, 
                            a new board will be updated and displayed*/
}

// TODO: print the game board as described at the top of this code skeleton
// Will not be tested in Part 1
function printBoard() {
    console.log(`
        ${board[1]} | ${board[2]} | ${board[3]}
        ----------
        ${board[4]} | ${board[5]} | ${board[6]}
        ----------
        ${board[7]} | ${board[8]} | ${board[9]}
        `); 
}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
// position is an input String
function validateMove(position) {
    let userPosition = (position);
    return userPosition >= 1 && userPosition <= 9 && board[userPosition] === ' ';
}   /*to check whether the user's input is within 
    the range number and on the null string*/

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Horizontal
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // Vertical
    [1, 5, 9], [3, 5, 7] // Diagonal
]; /*array of every possibilites for winCombinations*/

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    for (let combination of winCombinations) {
        if (board[combination[0]] == player && 
            board[combination[1]] == player && 
            board[combination[2]] == player) 
        return true
        }
        return false
}/*to check every user's 3 moves input whether
    it meets the winCombinations array of possibilities*/

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    for (let check in board) {
        if (board[check] === ' ') {
            return false;
        }
    }
    return true;
} /*To check every user's input on null string 
and whether the board is full or not */

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {
    let position = prompt(`Player ${player}'s turn. Enter a position between number 1-9: `)
    if (validateMove(position) == (1<position>9)) /*If user's input is other than range number of 1 to 9, invalid input will be displayed*/
        {
    console.log('Invalid input. Please enter a number between 1 and 9.');
    return;
        }
    markBoard(position, player); /*Update the game board after each user's input */

    printBoard(); /*Print out the updated game board */

    if (checkWin(player)) {
        console.log(`Player ${player} wins!`);
        winner= true;
    } /*to check for winner*/

    if (checkFull() && winner == false) {
        console.log("It's a tie!");
        winner = true;
    } /*to check for tie */

    currentTurnPlayer = player === 'X' ? 'O' : 'X'; /*For next player's turn*/

} 


console.log(
    'Game started:\n'+
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n'); /*Entry game display*/

let winner = false /*set winner as boolean*/
let currentTurnPlayer = 'X' /*set the first player to be X*/
let gameOver = false

while (winner == false){
    playTurn(currentTurnPlayer);
    gameOver = false
} /*To play the game*/


// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
function restart (playTurn) {
    let input_restart = prompt ('Start Over? Y or N: ')
    if (input_restart === 'Y' || 'y'){
        return true
    }
    console.log ('Thank you for playing!')
} /*DNF*/
