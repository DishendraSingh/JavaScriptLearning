const randomnumner = Math.floor(Math.random() * 100) + 1;
console.log(randomnumner);


const userInput = document.querySelector("#btnguessField");
const submit = document.querySelector("#Subt");
const guesses = document.querySelector(".guesses"); 
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let preViousGuess = []
let numberGues=1

let playGame = true

if (playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();

        const userGuess = Number(userInput.value);
        console.log(userGuess);
        validateGuess(userGuess);
    });
}
function validateGuess(userGuess)
{
    if(userGuess < 1 || userGuess > 100|| isNaN(userGuess))
    {
        alert("Please enter a number between 1 and 100");
        userInput.value = "";
        userInput.focus();
        return;
    }
    else
    {
        preViousGuess.push(userGuess);
        console.log(preViousGuess);
        
        checkGuess(userGuess);
    }
 }
 function checkGuess(userGuess)
 {
    if(numberGues === 10)
    {
        lastResult.textContent = "Game Over";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else
    {
        if(userGuess === randomnumner)
        {
            lastResult.textContent = "Congratulation! You got it right!";
            lastResult.style.backgroundColor = "green";
            lowOrHi.textContent = "";
            console.log("You Win", userGuess);
            setGameOver();
        }
        else if(userGuess < randomnumner)
        {
            lastResult.textContent = "Wrong!";
            lastResult.style.backgroundColor = "red";
            lowOrHi.textContent = "Last guess was too low!";
        }
        else if(userGuess > randomnumner)
        {
            lastResult.textContent = "Wrong!";
            lastResult.style.backgroundColor = "red";
            lowOrHi.textContent = "Last guess was too high!";
        }
        numberGues++;
        userInput.value = "";
        userInput.focus();
    }
 }      
