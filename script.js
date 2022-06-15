const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minEl = document.getElementById('min')
const secsEl = document.getElementById('sec')
const messageEl = document.querySelector('.message')

let xmas = new Date('2022-12-25').getTime()

const counter = setInterval(() => {
  let currentDate = new Date()
  let remainingTime = xmas - currentDate
  const days = Math.floor((remainingTime / (1000 * 60 * 60 * 24)));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor(remainingTime % (1000 * 60) / (1000));
  dayEl.innerText = days
  hourEl.innerText = hours
  minEl.innerText = mins
  secsEl.innerText = secs
  if (remainingTime <= 0) {
    clearInterval(counter)
    messageEl.innerText = 'Merry Christmas'
  }
}, 1000)

