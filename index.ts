#! /usr/bin/env node
import inquirer from "inquirer";

// 1)computer will generate a random number - Done

// 2)user input for guessing number - Done

// 3)compare user input and computer generated number and show results - 

let randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        message: "please guess a number between 1-10: ",
        type: "number",
        name: "userGuessedNumber",
    }
])
if(answers.userGuessedNumber === randomNumber){
    console.log('Congratulations you geussed the correct number');
}else{
    console.log('You guessed the wrong number')
}
