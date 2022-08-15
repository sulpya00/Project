const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let results

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = "Rock"
    }
    if (randomNumber === 2){
        computerChoice = "Paper"
    }
    if (randomNumber === 3){
        computerChoice = "Scissor"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        results = "It's a draw"
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper') {
        results = "You Win"
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissor') {
        results = "You Lose"
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock') {
        results = "You Lose"
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissor') {
        results = "You Win"
    }
    if(computerChoice === 'Scissor' && userChoice === 'Rock') {
        results = "You Win"
    }
    if(computerChoice === 'Scissor' && userChoice === 'Paper') {
        results = "You Lose"
    }
    resultDisplay.innerHTML = results
}