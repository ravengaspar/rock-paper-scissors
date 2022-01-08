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

      console.log(playerSelection, computerSelection)
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
      console.log(total)
      console.log(round)
      update()
    })
  })
}

game()
reset.addEventListener('click', () => {
  restartGame()
})

const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const winElement = document.querySelector('.winEl')
const loseElement = document.querySelector('loseEl')
const tieElement = document.querySelector('tieEl')
const scoreElement = document.querySelector('.score')

update = () => {
  let currentActive = 1 + total.win + total.lose + total.tie
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }

    if (round[idx] === 'win') {
      circle.classList.add('win')
      circle.innerHTML = "<img src='img/check.png'>"
    } else if (round[idx] === 'lose') {
      circle.classList.add('lose')
      circle.innerHTML = "<img src='img/cross.png'>"
    } else if (round[idx] === 'tie') {
      circle.classList.add('tie')
      circle.innerHTML = "<img src='img/equal.png'>"
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  let winTotal = `Win: ${total.win} `
  let loseTotal = `Lose: ${total.lose} `
  let tieTotal = `Tie: ${total.tie} `

  scoreElement.innerHTML = ''

  scoreElement.append(winTotal)
  scoreElement.append(loseTotal)
  scoreElement.append(tieTotal)
}
