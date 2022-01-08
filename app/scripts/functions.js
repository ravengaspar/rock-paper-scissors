const optionsArr = ['rock', 'paper', 'scissors']

const buttons = document.querySelectorAll('[data-key]')
const reset = document.querySelector('.reset')

let round = []
let total

let result = (obj) => Object.values(obj).reduce((a, b) => a + b)

let computerSelectionImage = document.querySelector('.computer-selection')

// Randomize computer's selection
computerPlay = () => optionsArr[Math.floor(Math.random() * optionsArr.length)]

playRound = (playerSelection, computerSelection) => {
  // Returns whether the player wins/loses and count's the result
  return (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
    ? round.push('lose')
    : (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'paper' && computerSelection === 'scissors')
    ? round.push('win')
    : round.push('tie')
}

restartGame = () => {
  location.reload()
}

game = () => {
  buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (round.length >= 5) return // stops the program after 5 rounds
      let img = document.querySelector('img')
      let playerSelection = item.getAttribute('data-key')
      let computerSelection = computerPlay()

      if (computerSelection === 'rock') {
        img.src = 'img/fist.png'
      } else if (computerSelection === 'paper') {
        img.src = 'img/hand.png'
      } else if (computerSelection === 'scissors') {
        img.src = 'img/peace-symbol.png'
      }

      console.log(
        `Round:${round.length + 1} ${playerSelection} vs ${computerSelection}`
      )
      playRound(playerSelection, computerSelection)

      total = {
        win: round.filter((win) => win === 'win').length,
        lose: round.filter((lose) => lose === 'lose').length,
        tie: round.filter((tie) => tie === 'tie').length,
      }

      if (round.length == 5) {
        if (total.win > total.lose) {
          setTimeout(() => {
            img.src = 'img/trophy.png'
          }, 1000)
        } else if (total.lose > total.win) {
          setTimeout(() => {
            img.src = 'img/loser.png'
          }, 1000)
        } else if (
          (total.tie > total.win && total.tie > total.lose) ||
          total.win == total.lose
        ) {
          setTimeout(() => {
            img.src = 'img/equal.png'
          }, 1000)
        }
      }

      let results = `Win: ${total.win}. Lost: ${total.lose}. Tied Game: ${total.tie}`
      console.log(results)
      update()
    })
  })
}

game()
reset.addEventListener('click', () => {
  restartGame()
})
