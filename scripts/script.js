const optionsArr = [
    'rock',
    'paper',
    'scissors'
]


let win = 0
let lose = 0
let tie = 0

// Randomize computer's selection
computerPlay = () => {
    return optionsArr[Math.floor(Math.random() * optionsArr.length)]
}


playRound = (playerSelection, computerSelection) => {


    // Returns whether the player wins/loses and count's the result
    return playerSelection === 'rock' && computerSelection === 'paper' 
    || playerSelection === 'paper' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'rock'
    ? lose ++
    : playerSelection === 'rock' && computerSelection === 'scissors' 
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'paper' && computerSelection === 'scissors'
    ? win ++ 
    : tie ++ 

}

const playerSelection = window.prompt('Please pick from rock, paper, or scissors').toLowerCase()

game = (numberOfRounds) => {

for (let i = 0; i < numberOfRounds; i++) {
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
} 
let result = `Win: ${win}. Lost: ${lose}. Tied Game: ${tie}`
console.log(result)
}

game(5)