const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

number = Math.random(10)

rl.question("Guess the number from 1 to 10: ", (guess)=>{
    if (guess == number){
        console.log("Comgratulations, you guessed!");
        rl.close()
    }
    else{
        console.log("Better luck next time!")
        rl.close()
    }
})