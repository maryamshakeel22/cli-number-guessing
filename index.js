#! /usr/bin/env node
import inquirer from "inquirer";
const ramdomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 to 6:",
    }
]);
if (answers.userGuessNumber === ramdomNumber) {
    console.log("Congratulation! You guessed correct number.");
}
else {
    console.log("Sorry! You guessed wrong number");
}
