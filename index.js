import inquirer from "inquirer";
// 1)computer will generate a random number - Done
// 2)user input for guessing number - Done
// 3)compare user input and computer generated number and show results - 
let randomNumber = 13;
const answers = await inquirer.prompt([
    {
        message: "please guess a number: ",
        type: "number",
        name: "userGuessedNumber",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log('Congratulations you gessed the wrong number');
}
else {
    console.log('You guessed the wrong number');
}
