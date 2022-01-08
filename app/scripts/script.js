const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')

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
      circle.innerHTML = "<img src='/img/check.png'>"
    } else if (round[idx] === 'lose') {
      circle.classList.add('lose')
      circle.innerHTML = "<img src='/img/cross.png'>"
    } else if (round[idx] === 'tie') {
      circle.classList.add('tie')
      circle.innerHTML = "<img src='/img/equal.png'>"
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
}

const status = document.querySelectorAll('.active')
